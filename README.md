# companion-module-aver-ptz
A [Bitfocus](https://github.com/bitfocus) Companion version 3.x.x module.

The purpose of this module is for managing [AVER](https://averusa.com/products/ptz-camera/) Pan, Tilt, Zoom (PTZ) camera models that can be controlled using VISCA commands over IP. 

## Install dependencies for development:

**Environment:**
Install NPM, Yarn, and Bitfocus Companion.

**Steps:**
1. Create a new folder named <code>companion-module-dev</code>.
2. Clone and unzip the branch into the <code>companion-module-dev</code> folder.
3. In a command prompt/terminal, navigate to the unzipped folder, type <code>yarn</code> to download dependency files.
4. Launch Companion and modify the Developer modules path to <code>companion-module-dev</code>.
5. The module appears in “Add Connection” search as “Aver” or "PTZ"

## Testing VISCA over IP with camera:

Use the open-source [PacketSender](https://packetsender.com/) software for testing VISCA commands directly with the camera. Refer to the AVER document for VISCA commands of models PTZ310/PTZ330, TR530/320, TR311HN, TR311, TR313, TR331, and TR333 [^1][^2]. Even if a specific model isn’t mentioned, the commands might still work.

**With PacketSender:**
1. Configure settings: 
```
Name: Camera 1 Preset 1
Address: Camera IP Address
HEX: 01 00 00 09 00 00 00 00 81 01 04 3F 02 01 FF
Port: 52381
Type: UDP
```
2. Click “Send” to load/recall preset 1 (presuming it’s saved on the camera). 

[^1]: https://www.averusa.com/pro-av/downloads/control-codes/AVer%20Pro-AV%20PTZ%20Visca%20over%20IP-UDP%20and%20RS-232%20Guide%20v2.pdf
[^2]: https://averusa.com/pro-av/downloads/control-codes/TR310_311HN_311_313_333_311HWV2_313V2_323NV2_333V2_ControlCodes.pdf

See [HELP.md](./HELP.md) and [LICENSE](./LICENSE)