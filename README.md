# companion-module-aver-ptz
A [Bitfocus](https://github.com/bitfocus) Companion version 3.0.0 module.

The purpose of this module is for controlling [AVER](https://averusa.com/products/ptz-camera/) Pan, Tilt, Zoom (PTZ) camera models that support VISCA commands over IP. The primary difference with VISCA commands and VISCA over IP are the IP packet headers.

Testing VISCA over IP commands include using an open source software [PacketSender](https://packetsender.com/). The VISCA commands for models PTZ310/PTZ330, TR530/320 and TR311HN / TR311 / TR313 / TR331 / TR333 can be located within the AVER document[^1]. While the AVER document may not include a specific model at the time it was written the VISCA commands may still work.

For example, using PacketSender, enter the below entries to configure the fields:

```
Name: Camera 1 Preset 1
Address: Camera IP Address
HEX: 01 00 00 09 00 00 00 00 81 01 04 3F 02 01 FF
Port: 52381
Type: UDP
```
Click send and the camera should now use preset 1 (presuming preset 1 has been saved on the camera).

[^1]: https://www.averusa.com/pro-av/downloads/control-codes/AVer%20Pro-AV%20PTZ%20Visca%20over%20IP-UDP%20and%20RS-232%20Guide%20v2.pdf

See [HELP.md](./HELP.md) and [LICENSE](./LICENSE)