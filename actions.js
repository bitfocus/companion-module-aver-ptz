module.exports = function (self) {
	self.setActionDefinitions({
		zoom_in_action: {
			name: 'Zoom In',
			options: [
				{
					id: 'zoom_in',
					type: 'dropdown',
					label: 'Select Level',
					default: '5',
					choices: [
						{ id: '0', label: '0 (low)' }, { id: '1', label: '1' }, { id: '2', label: '2' }, { id: '3', label: '3' },
						{ id: '4', label: '4' }, { id: '5', label: '5' }, { id: '6', label: '6' }, { id: '7', label: '7 (high)' },
					],
				},
			],
			callback: async (event) => {
				var selected = (event.options.zoom_in).toString()
				var cmd = '810104072' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		zoom_out_action: {
			name: 'Zoom Out',
			options: [
				{
					id: 'zoom_out',
					type: 'dropdown',
					label: 'Select Level',
					default: '5',
					choices: [
						{ id: '0', label: '0 (low)' }, { id: '1', label: '1' }, { id: '2', label: '2' }, { id: '3', label: '3' },
						{ id: '4', label: '4' }, { id: '5', label: '5' }, { id: '6', label: '6' }, { id: '7', label: '7 (high)' },
					],
				},
			],
			callback: async (event) => {
				var selected = (event.options.zoom_out).toString()
				var cmd = '810104073' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		zoom_stop_action: {
			name: 'Zoom Stop',
			options: [],
			callback: async (event) => {
				var cmd = '8101040700FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		focus_action: {
			name: 'Focus',
			options: [
				{
					id: 'focus',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '3802',
					choices: [
						{ id: '0800', label: 'Stop' }, { id: '0802', label: 'Far' }, { id: '0803', label: 'Near' }, 
						{ id: '3802', label: 'Auto' }, { id: '3803', label: 'Manual' }, { id: '1801', label: 'One Push' },
					],
				},
			],
			callback: async (event) => {
				var selected = (event.options.focus).toString()
				var cmd = '810104' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		wb_action: {
			name: 'White Balance',
			options: [
				{
					id: 'white_balance',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '3500',
					choices: [
						{ id: '3500', label: 'Auto' }, { id: '3504', label: 'ATW' }, { id: '3501', label: 'Indoor' }, { id: '3502', label: 'Outdoor' },
						{ id: '3503', label: 'One Push WB mode' }, { id: '3505', label: 'Manual' }, { id: '1005', label: 'One Push WB trigger' },
					],
				},

			],
			callback: async (event) => {
				var selected = (event.options.white_balance).toString()
				var cmd = '810104' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		red_gain_action: {
			name: 'Red Gain',
			options: [
				{
					id: 'red_gain',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '0302',
					choices: [{ id: '0302', label: 'Up' }, { id: '0303', label: 'Down' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.red_gain).toString()
				var cmd = '810104' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		blue_gain_action: {
			name: 'Blue Gain',
			options: [
				{
					id: 'blue_gain',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '0402',
					choices: [{ id: '0402', label: 'Up' }, { id: '0403', label: 'Down' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.blue_gain).toString()
				var cmd = '810104' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		auto_exposure_action: {
			name: 'Auto Exposure',
			options: [
				{
					id: 'auto_exposure',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '00',
					choices: [{ id: '00', label: 'Full Auto' }, { id: '03', label: 'Manual' }, { id: '0A', label: 'Shutter Priority' },
					{ id: '0B', label: 'Iris Priority' },{ id: '0D', label: 'Bright' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.auto_exposure).toString()
				var cmd = '81010439' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		shutter_action: {
			name: 'Shutter',
			options: [
				{
					id: 'shutter',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'Up' }, { id: '03', label: 'Down' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.shutter).toString()
				var cmd = '8101040A' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		iris_action: {
			name: 'Iris',
			options: [
				{
					id: 'iris',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'Up' }, { id: '03', label: 'Down' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.iris).toString()
				var cmd = '8101040B' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		gain__action: {
			name: 'Gain',
			options: [
				{
					id: 'gain',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'Up' }, { id: '03', label: 'Down' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.gain).toString()
				var cmd = '8101040C' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		bright_action: {
			name: 'Bright',
			options: [
				{
					id: 'bright',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'Up' }, { id: '03', label: 'Down' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.bright).toString()
				var cmd = '8101040D' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		exposure_comp_action: {
			name: 'Exposure Compensation',
			options: [
				{
					id: 'exposure_comp',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'Up' }, { id: '03', label: 'Down' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.exposure_comp).toString()
				var cmd = '8101040E' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		backlight_action: {
			name: 'Backlight',
			options: [
				{
					id: 'backlight',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.backlight).toString()
				var cmd = '81010433' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		preset_action: {
			name: 'Preset',
			options: [
				{
					id: 'preset',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'Recall' }, { id: '01', label: 'Set' }, { id: '00', label: 'Reset' },],
				},
				{
					id: 'num',
					type: 'number',
					label: 'Preset Number',
					default: 0,
					min: 0,
					max: 255,
				},
			],
			callback: async (event) => {
				var selected = (event.options.preset).toString()
				var numInput = (event.options.num).toString(16).padStart(2, "0");
				var cmd = '8101043F' + selected + numInput + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		menu_action: {
			name: 'Menu On/Off',
			options: [],
			callback: async (event) => {
				var cmd = '8101060610FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		osd_action: {
			name: 'On Screen Display',
			options: [],
			callback: async (event) => {
				var cmd = '8101043F015FFF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		pan_tilt_action: {
			name: 'Pan Tilt',
			options: [
				{
					id: 'pan_tilt',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '0301',
					choices: [{ id: '0301', label: 'Up' }, { id: '0302', label: 'Down' }, { id: '0103', label: 'Left' },
					{ id: '0203', label: 'Right' }, { id: '0101', label: 'Up Left' }, { id: '0201', label: 'Up Right' },
					{ id: '0102', label: 'Down Left' }, { id: '0202', label: 'Down Right' }, { id: '0303', label: 'Stop' },
					{ id: '04', label: 'Home' }, { id: '05', label: 'Reset' },
					],
				},
				{
					id: 'pan_speed',
					type: 'number',
					label: 'Pan Speed',
					default: 1,
					min: 1,
					max: 24,
				},
				{
					id: 'tilt_speed',
					type: 'number',
					label: 'Tilt Speed',
					default: 1,
					min: 1,
					max: 24,
				},
			],
			callback: async (event) => {
				var selected = (event.options.pan_tilt).toString()
				//console.log(selected)
				var cmd = ""
				if(selected === '04' || selected === '05'){
					cmd = '810106' + selected + 'FF'
				}
				else{
					var panInput = (event.options.pan_speed).toString(16).padStart(2, "0");
					var tiltInput = (event.options.tilt_speed).toString(16).padStart(2, "0");
					cmd = '81010601' + panInput + tiltInput + selected + 'FF'
				}
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		wdr_action: {
			name: 'Wide Dynamic Range',
			options: [
				{
					id: 'wdr',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.wdr).toString()
				var cmd = '8101043D' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		menu_enter_action: {
			name: 'Menu Enter',
			options: [],
			callback: async (event) => {
				var cmd = '81017E01020001FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		tally_action: {
			name: 'Tally Lamp',
			options: [
				{
					id: 'tally_lamp',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.tally_lamp).toString()
				var cmd = '81017E010A00' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		freeze_action: {
			name: 'Freeze',
			options: [
				{
					id: 'freeze',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },
					{ id: '22', label: 'Preset On' }, { id: '23', label: 'Preset Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.freeze).toString()
				var cmd = '81010462' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		auto_tracking_action: {
			name: 'Auto Tracking',
			options: [
				{
					id: 'auto_tracking',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.auto_tracking).toString()
				var cmd = '8101047D' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		tracking_control_action: {
			name: 'Tracking Control Mode',
			options: [
				{
					id: 'tracking_control',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: 'A4',
					choices: [{ id: 'A0', label: 'Full Body' }, { id: 'A1', label: 'Upper Body' },
					{ id: 'A2', label: 'Tracking Point' }, { id: 'A3', label: 'Switch' }, { id: 'A4', label: 'Presenter Mode' },
					{ id: 'A5', label: 'Zone Mode' },{ id: 'A6', label: 'Hybrid Mode' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.tracking_control).toString()
				var cmd = '8101043F01' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		autozoom_action: {
			name: 'Auto Zoom',
			options: [
				{
					id: 'auto_zoom',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.auto_zoom).toString()
				var cmd = '810104A0' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		effective_tracking_action: {
			name: 'Effective Tracking Area',
			options: [
				{
					id: 'effective_tracking',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.effective_tracking).toString()
				var cmd = '810104A1' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		rtmp_action: {
			name: 'RTMP',
			options: [
				{
					id: 'rtmp',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.rtmp).toString()
				var cmd = '810104A2' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		video_mode_action: {
			name: 'Video Mode',
			options: [
				{
					id: 'video_mode',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '00', label: 'IP+Stream' }, { id: '01', label: 'USB Only' },
					{ id: '02', label: 'NDI Only' }, { id: '03', label: 'Streaming Only' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.video_mode).toString()
				var cmd = '810104A3' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		presets_affect_action: {
			name: 'Preset Affects PTZ & Focus',
			options: [
				{
					id: 'presets_affect',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.presets_affect).toString()
				var cmd = '810104A5' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		relative_zoom_action: {
			name: 'Relative Zoom Ratio',
			options: [
				{
					id: 'relative_zoom',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.relative_zoom).toString()
				var cmd = '810104A6' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		auto_tilt_action: {
			name: 'Auto Tilt',
			options: [
				{
					id: 'auto_tilt',
					type: 'dropdown',
					label: 'Select Configuration Type',
					default: '02',
					choices: [{ id: '02', label: 'On' }, { id: '03', label: 'Off' },],
				},
			],
			callback: async (event) => {
				var selected = (event.options.auto_tilt).toString()
				var cmd = '810104A7' + selected + 'FF'
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
		custom_action: {
			name: 'Custom Command',
			options: [
				{
					id: 'custom',
					type: 'textinput',
					label: 'Type custom hex command',
				},
			],
			callback: async (event) => {
				var userInput = (event.options.custom).toString()
				var cmd = userInput
				//console.log(cmd)
				self.sendCommand(cmd)
			},
		},
	})
}