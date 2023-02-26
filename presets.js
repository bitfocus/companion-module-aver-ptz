const { combineRgb } = require('@companion-module/base')

module.exports = function (self) {

// Variables for Base64 image data do not edit
var image_up = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIFJREFUKM+90EEKgzAQRmFDFy49ghcp5FquVPBighcRegHBjWDJ68D8U6F7m00+EnhkUlW3ru6rdyCV0INQzSg1zFLLKmU2aeCQQMEEJXIQORRsTLNyKJhNm3IoaPBg4mQorp2Mh1+00kKN307o/bZrpt5O/FlPU/c75X91/fPd6wPRD1eHyHEL4wAAAABJRU5ErkJggg==';

var image_down = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIlJREFUKM/F0DEOwyAMBVAjDxk5Qo7CtdiClIv1KJF6gUpZIhXxY2zTDJ2benoS8LFN9MsKbYjxF2XRS1UZ4bCeGFztFmNqphURpidm146kpwFvLDYJpPQtLSLNoySyP2bRpoqih2oSFW8K3lYAxmJGXA88XMnjeuDmih7XA8vXvNeeqX6U6aY6AacbWAQNWOPUAAAAAElFTkSuQmCC';

var image_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUKM+1kTEOgCAQBM9Q2JjwA/mJPA2fxlN4giWF8TRBBhMpbKSaZie3i8gPb4Y8FNZKGm8YIAONkNWacIruQLejy+gyug1dQhfRqZa0v6gYA6QfqSWapZnto1B6XdUuFaVHoJunr2MD21nIdJYUEhLYfoGmP777BKKIXC0eYSD5AAAAAElFTkSuQmCC';

var image_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHhJREFUKM+10LERgCAMQFE4CktHcBRWcRMYzVEcwdKCI+od+fGksVCq3/AuiXOfvZnaNXzRClVrEKtMLdSqP2RTRQAFMAFGwAlw7MAk0sAzGnhVoerLKg/F5Pv4NoFNZZNGpk9sxJYeLsDdL5T7S8IFOM/R3OZ+fQeQZV9pMy+bVgAAAABJRU5ErkJggg==';

var image_up_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABhlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+X02G5AAAAgXRSTlMAAte32QZhZx7d+TywDTf8/d5VstYPOxULNvKmSY8TFBrxyeGCluJeELQ5uw7ULND4BedlKuv2P/vDA8UgCk30WO41s8+5X8dABAz6QhHVaR156JpPnihSfTJDNOMBm4bzSICqr23NsRjcGRbtjTCS2lzsOmyu9+WLKb2fTL8+RPDhqO4yAAABfElEQVRYw+3WZW/CUBQG4AO0FBsOwwcMm7sLc3d3d3e388/HGGs7lpD0tsm+9P3S5CT3SdPec+8BkCNHzv9FAVAAEABYdQDkA7jo9GNUIDMBzstb5vr0/Gx8Z35zOjI36R2xbu+619eWa2xCoK0FClF5h1cWxDHEwilEOyLlQc8hokoAlMRcESBh7siQlJBWKkijNaHuPrWBED9iYiDQ7Pv1D4Z4/DXyFo2JgeAghQEkEgAvT6IgNo/PIUmgd62oj80mqEIpINoXRkmg2j2UBDIWVXKLTSXEUIOF/xbV5aRQsJvvUOoqMqjZZ+c7FcX8ThYCtTbxHV0fkEGDA73D3Dpzi/6rWEYAdSn579PZ/t3IBJChkef0dLRlHXdkJ6TSmSnmiYPq1LQIiGHX9BvZYinJ7/+R6q1czUG0j9KSOTxDc6UhshZhMIQrS78mncwZtzErrNcYL6V2Zd0tJ6i7QFtAYPcvHv25W6J+/Y3BrRA/x6WGuGN5mpUjhyyfsGtrpKE95HoAAAAASUVORK5CYII=';

var image_down_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABXFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9jYfXuAAAAc3RSTlMAQ98Ox1j9gAtRNTqBPfgu9p/MTQ+G1Qfx7Y0VBYyJgjkGd3ysU+Zz1IQvMM20PgwBp8Mi4TSUiDvlPxylsaF2WfcjJh0S+wLzQLmY4l/ovX3ra1rPLAOSKa4RUEvgcZwbFHqPzodGbX7qPMvCtsEq1laguT+HEwAAAVlJREFUWMPt1sduwkAQgOGxDfFCIITe0nvvvZHee++992TeX4pJQIC9hPWaQ6T41x6skfY7WGPJAGZm/6qgZjIH4AMgOp2Lq32batTkdW/trPt9+qC70DVmSKS2BXF7A1fX9DDnN2FUSpe8y5hID3SZuJMmrcwmoSFm5vD0BDWSNTnCUmZoD1PZtJCDGfIgRUpBMjPkR4rEAwUtFIkHAkKRuCCaxAdRJE5IK/FCGumWF1JLEW5ILfFD2ST9UBaJA6JLPBCQ57xAJcp5NQbtSgBReJSsH8QI5No8ODo+u397ecL3T35IGhcRA4jig8E9qmjAX2OGnAV5ggrxr0ELOaByVmg6B1TGvEYyTvxcKUaMv/ii7xN/VAZYY2dfSHkkPOYY7Kpf7OmLzLfGPIFGd6izWrRUjdYt9Xfo+ULsLpgRKqGtGyadAEIUmnuhXSAwMAXD5j+omZlZRl+X30CWTm2dHwAAAABJRU5ErkJggg==';

var image_up_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABLFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9PVkEkAAAAY3RSTlMAAQ/6Uc0OEAvHTzL7TcudsMHvdwnfUwMcG8UGiIfTrIkg9QI+/ZTDe460km73LNovCo1vQUuR4Lwk45/OK+3UERTkekziZlSK8QQnoOsFaaXmLqOylvPZLYDRZTUWUpiTDfAuEmiSAAABUklEQVRYw+3WZ2+DMBAG4EtTygrQ7NHsJt1777333vv+/38o6gIMSo0dqf3AK1lIZ/mRjPEJgCBBgvxtQr8WqDKbCiWUG1AnYXU7C7UJqKQSR5oKQwqIPphsYW24nEPjJCYXilf9F+G+qeTmThTP5w8X8gK9NLqOGMGPhD8fdXtBkGihlmlsmF5aqK2xg9FmQe3/DupuEhTpoT41z/V1HVHfxWRRo/6ORBfyjILx9mRo+2MDlS3ggF5q4uP9qzmVNjfOA+EDdDLcWA8IW6FJEJPkCbFI3hCDZEFVPsmC7mQuyYJ0iUuyIAG4JDvEJTkgHskJcUgExC6RECmxQ4REDa24ILsU6wL/rfYHskmX9C87Pfi9aA5cUmnRx/kffDmncSCkat7X342KSzOIuesNR1WSl7GU8Xfbbs9Gyoo0TvRp6Tie8d2TOsyx51UMEiQIS94B13oTqqYgGGoAAAAASUVORK5CYII=';

var image_down_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABg1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8aT76cAAAAgHRSTlMAafwJfflezc+3WA7Z5Rk6PAvpBNE73kJT89QxZ48czNIv9A1DnI3qKQUaymjT4a7HdVuGf85LR20CVHr+tLBlA0GvYSTYZEnbAcazNPX4yB4GrAgnmL6Bcj4qIVKIe8kdVadIEe27B90bOG/3Er1rYJq1wibyh+4Q5CMzRllMXDo5euMAAAGfSURBVFjD7dblUwJBGAbw5aSlBJRGQERBkLC7u7u7u7veP90jDnaEcdhjP+k9X5h9Zu43O7PLe4eQECH/KGsIaUooOEcLK75LpehH628idSrE+nMANfyQ3MY2BRm0C6mM462tUwJAJtVyUB1WmsoSFZEk46D6TBcYS3UKPpCYawxD5VxHImVD/RHIxMQbGintkGQcppkcOkuutQPYfkDfmjck556ZTSydve2YY5UWk0Mww672VPh+XFqCU8tA+whtL+KOpa+bF3Rh8B4ymDNaSnSzG9IPIpsL34/HTPZfS58auMPYuYNMWcQXOsD3U9ZDOkZkkCvqwSIqUI2WfEDmgiQxRANiIp8GKtDLO6/Znw19oOdXhKoROtEUBr1F5Y9f4dt1XygqKgh6YqcHwMQkQBWICr1H6czTgrpoQde0IGnekJEWNEwLMv/GPDDB/M/fDioVeLYA5GqoYt+xNRY4toJkCiBUG7vTEVxJu2Z549RbqXQuba7uVDZWO66mgw6d7kYaEPvvCb+REIp/srGzLP4aa0n8zKFkKUSIkD+Qb9QrYMvxAbaBAAAAAElFTkSuQmCC';
const presets = {}
presets['pt_up_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_up,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0301',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_down_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_down,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0302',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_left_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_left,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0103',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_right_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_right,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0203',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_up_left_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_up_left,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0101',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_up_right_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_up_right,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0201',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_down_left_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_down_left,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0102',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_down_right_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: 'auto',
        pngalignment: "center:center",
        png64: image_down_right,
        //color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0202',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use
                        pan_tilt: '0303',
                        pan_speed: 1,
                        tilt_speed: 1,
                    },
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['zoom_in_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Zoom In',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'zoom_in_action',
                    options: {
                        // options values to use
                        zoom_in: '3',
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'zoom_stop_action',
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['zoom_out_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Zoom Out',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'zoom_out_action',
                    options: {
                        // options values to use
                        zoom_out: '3',
                    },
                },
            ],
            up: [
                {
                    // add an action on up press
                    actionId: 'zoom_stop_action',
                },
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_auto_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus Auto',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'focus_action',
                    options: {
                        // options values to use
                        focus: '3802',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_op_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus OP',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'focus_action',
                    options: {
                        // options values to use
                        focus: '1801',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['exposure_fauto_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Exposure Full Auto',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'auto_exposure_action',
                    options: {
                        // options values to use
                        auto_exposure: '00',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_autob_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB Auto B',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wb_action',
                    options: {
                        // options values to use
                        white_balance: '3500',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_autow_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB Auto W',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wb_action',
                    options: {
                        // options values to use
                        white_balance: '3504',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_indoor_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB Indoor',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wb_action',
                    options: {
                        // options values to use
                        white_balance: '3501',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_outdoor_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB Outdoor',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wb_action',
                    options: {
                        // options values to use
                        white_balance: '3502',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_1_push_wb_mode_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: '1 push WB mode',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wb_action',
                    options: {
                        // options values to use
                        white_balance: '3503',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_1_push_trigger_preset'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: `My button`, // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: '1 push trigger',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wb_action',
                    options: {
                        // options values to use
                        white_balance: '1005',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
self.setPresetDefinitions(presets)
}