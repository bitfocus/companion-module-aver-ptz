const { InstanceBase, Regex, runEntrypoint, InstanceStatus, UDPHelper } = require('@companion-module/base')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdatePresets = require('./presets.js')

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	//initial module loading
	async init(config) {
		this.config = config
		await this.init_udp()
		this.updateStatus(InstanceStatus.Ok)
		this.updateActions() // export actions
		this.updatePresets()
	}

	init_udp() {
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		  }

		  this.udp = new UDPHelper(this.config.host, this.config.port)
		  this.udp.on("error", (err) => {
			  this.log("error", "Network error: " + err.message);
			})
		this.udp.on('data', (data) => {
			this.updateStatus('ok')
			let hexString = data.toString('hex')
			if (hexString.length == 80) {
				//this is the main settings information
				this.updateData(Uint8Array.from(data))
			}
			//console.log(hexString)
		})
	}

	sendCommand(payload){
		var newPayload = payload.replace(/ /g, "")

		if(this.config.isviscaoverip){
			var viscaIPheader = '010000'
			var payloadLength = (newPayload.length / 2).toString(16).padStart(2, "0");
			newPayload = viscaIPheader +  payloadLength + '00000000' + newPayload
		}

		var cmdBuff = Buffer.from(newPayload, 'hex')

		//console.log(cmdBuff)
		
		this.udp.send(cmdBuff)
	}

	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')

		if (this.udp) {
			this.udp.destroy();
			delete this.udp;
		  }
	}

	//update to module configuration settings
	async configUpdated(config) {
		this.config = config
		await this.init_udp()
		this.updatePresets()
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module controls PTZ cameras with VISCA over IP protocol'
			},
			{
				type: 'textinput',
				id: 'host',
				label: 'Target IP',
				width: 8,
				regex: Regex.IP,
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Target Port',
				width: 4,
				default: '52381',
				regex: Regex.PORT,
			},
			{
				id: 'isviscaoverip',
				type: 'checkbox',
				label: 'VISCA over IP',
				default: true
			},
		]
	}

	updateActions() {
		UpdateActions(this)
	}

	updatePresets(){
		UpdatePresets(this)
	}
}
runEntrypoint(ModuleInstance, UpgradeScripts)
