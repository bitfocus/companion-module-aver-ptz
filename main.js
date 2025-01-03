const { InstanceBase, Regex, runEntrypoint, InstanceStatus, UDPHelper } = require('@companion-module/base')
const UpgradeScripts = require('./upgrades.js')
const UpdateActions = require('./actions.js')
const UpdatePresets = require('./presets.js')

let sequenceNumber = 0 // initialize sequence number

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	//initial module loading
	async init(config) {
		this.config = config
		this.updateStatus(InstanceStatus.Ok) // update status column to green checkmark
		this.init_udp()
		this.updateActions() // export actions
		this.updatePresets() // export presets
	}

	init_udp() {
		//check if udp previously exists and destroy
		this.destroy()

		//initialize new UDPHelper
		this.udp = new UDPHelper(this.config.host, this.config.port)
		this.log('info', 'Initialized UDP')

		//print errors to console and update status column
		this.udp.on('error', (e) => {
			this.log('error', "Network error: " + e.message)
			this.updateStatus(InstanceStatus.UnknownError, e.message) // update status column to error message
		})

		//print received data to console
		this.udp.on('data', (data) => {
			let hexString = data.toString('hex')
			this.log('console', "Reply: " + hexString)
			this.updateStatus(InstanceStatus.Ok) // update status column to green checkmark
		})
	}

	sendCommand(payload){
		let newPayLoad, payloadLength, hexSequenceNumber, cmdBuff
		let payLoadType = '0100' //value 1 and value 2 for VISCA command

		newPayLoad = payload
		
		//add packet header if visca over ip enabled
		if(this.config.isviscaoverip){
			//convert payload length to hexadecimal
			payloadLength = Number(payload.length).toString(16).padStart(4, "0")
			//get the sequence number
			hexSequenceNumber = sequenceNumber.toString(16).padStart(8, '0');
			//increment the sequence number
			this.incrementSequenceNumber()
			newPayLoad = payLoadType + payloadLength + hexSequenceNumber + payload
		}

		//node.js encode from string to hexadecimal
		cmdBuff = Buffer.from(newPayLoad, 'hex')
	
		this.log('console', "Send: " + this.separateHex(cmdBuff.toString('hex')))

		this.udp.send(cmdBuff)
	}

	// When module gets deleted
	async destroy() {
		if (this.udp) {
			this.udp.destroy();
			delete this.udp;
			this.log('info', 'Previous UDP connection detected and destroyed')
		  }
	}

	//update to module configuration settings
	async configUpdated(config) {
		this.config = config
		this.init_udp()
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
				type: 'checkbox',
				id: 'isviscaoverip',
				label: 'VISCA over IP',
				default: true
			},
		]
	}

	// function to format hexadecimal into grouped pairs for easier reading from console log
	separateHex(hex) {
		const regex = /([A-Fa-f0-9]{2})/g;
		return hex.match(regex).join(' ');
	}

    // function to increment the sequence number
    incrementSequenceNumber(){
    	sequenceNumber = (sequenceNumber + 1) >>> 0; // increment, convert to unsigned 32-bit int, wrap around above 0xFFFFFFFF
    }

	updateActions() {
		UpdateActions(this)
	}

	updatePresets(){
		UpdatePresets(this)
	}
}
runEntrypoint(ModuleInstance, UpgradeScripts)
