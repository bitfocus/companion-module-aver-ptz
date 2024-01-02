const { combineRgb } = require('@companion-module/base')

// icons attributed to https://github.com/bitfocus/companion/blob/05c37a108bc515d3983e2be9cea73c3145719e26/module-legacy/lib/resources/icons.js
// Variables for Base64 image data do not edit
var image_up = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIFJREFUKM+90EEKgzAQRmFDFy49ghcp5FquVPBighcRegHBjWDJ68D8U6F7m00+EnhkUlW3ru6rdyCV0INQzSg1zFLLKmU2aeCQQMEEJXIQORRsTLNyKJhNm3IoaPBg4mQorp2Mh1+00kKN307o/bZrpt5O/FlPU/c75X91/fPd6wPRD1eHyHEL4wAAAABJRU5ErkJggg==';

var image_down = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIlJREFUKM/F0DEOwyAMBVAjDxk5Qo7CtdiClIv1KJF6gUpZIhXxY2zTDJ2benoS8LFN9MsKbYjxF2XRS1UZ4bCeGFztFmNqphURpidm146kpwFvLDYJpPQtLSLNoySyP2bRpoqih2oSFW8K3lYAxmJGXA88XMnjeuDmih7XA8vXvNeeqX6U6aY6AacbWAQNWOPUAAAAAElFTkSuQmCC';

var image_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUKM+1kTEOgCAQBM9Q2JjwA/mJPA2fxlN4giWF8TRBBhMpbKSaZie3i8gPb4Y8FNZKGm8YIAONkNWacIruQLejy+gyug1dQhfRqZa0v6gYA6QfqSWapZnto1B6XdUuFaVHoJunr2MD21nIdJYUEhLYfoGmP777BKKIXC0eYSD5AAAAAElFTkSuQmCC';

var image_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHhJREFUKM+10LERgCAMQFE4CktHcBRWcRMYzVEcwdKCI+od+fGksVCq3/AuiXOfvZnaNXzRClVrEKtMLdSqP2RTRQAFMAFGwAlw7MAk0sAzGnhVoerLKg/F5Pv4NoFNZZNGpk9sxJYeLsDdL5T7S8IFOM/R3OZ+fQeQZV9pMy+bVgAAAABJRU5ErkJggg==';

var image_up_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABhlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+X02G5AAAAgXRSTlMAAte32QZhZx7d+TywDTf8/d5VstYPOxULNvKmSY8TFBrxyeGCluJeELQ5uw7ULND4BedlKuv2P/vDA8UgCk30WO41s8+5X8dABAz6QhHVaR156JpPnihSfTJDNOMBm4bzSICqr23NsRjcGRbtjTCS2lzsOmyu9+WLKb2fTL8+RPDhqO4yAAABfElEQVRYw+3WZW/CUBQG4AO0FBsOwwcMm7sLc3d3d3e388/HGGs7lpD0tsm+9P3S5CT3SdPec+8BkCNHzv9FAVAAEABYdQDkA7jo9GNUIDMBzstb5vr0/Gx8Z35zOjI36R2xbu+619eWa2xCoK0FClF5h1cWxDHEwilEOyLlQc8hokoAlMRcESBh7siQlJBWKkijNaHuPrWBED9iYiDQ7Pv1D4Z4/DXyFo2JgeAghQEkEgAvT6IgNo/PIUmgd62oj80mqEIpINoXRkmg2j2UBDIWVXKLTSXEUIOF/xbV5aRQsJvvUOoqMqjZZ+c7FcX8ThYCtTbxHV0fkEGDA73D3Dpzi/6rWEYAdSn579PZ/t3IBJChkef0dLRlHXdkJ6TSmSnmiYPq1LQIiGHX9BvZYinJ7/+R6q1czUG0j9KSOTxDc6UhshZhMIQrS78mncwZtzErrNcYL6V2Zd0tJ6i7QFtAYPcvHv25W6J+/Y3BrRA/x6WGuGN5mpUjhyyfsGtrpKE95HoAAAAASUVORK5CYII=';

var image_down_right = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABXFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9jYfXuAAAAc3RSTlMAQ98Ox1j9gAtRNTqBPfgu9p/MTQ+G1Qfx7Y0VBYyJgjkGd3ysU+Zz1IQvMM20PgwBp8Mi4TSUiDvlPxylsaF2WfcjJh0S+wLzQLmY4l/ovX3ra1rPLAOSKa4RUEvgcZwbFHqPzodGbX7qPMvCtsEq1laguT+HEwAAAVlJREFUWMPt1sduwkAQgOGxDfFCIITe0nvvvZHee++992TeX4pJQIC9hPWaQ6T41x6skfY7WGPJAGZm/6qgZjIH4AMgOp2Lq32batTkdW/trPt9+qC70DVmSKS2BXF7A1fX9DDnN2FUSpe8y5hID3SZuJMmrcwmoSFm5vD0BDWSNTnCUmZoD1PZtJCDGfIgRUpBMjPkR4rEAwUtFIkHAkKRuCCaxAdRJE5IK/FCGumWF1JLEW5ILfFD2ST9UBaJA6JLPBCQ57xAJcp5NQbtSgBReJSsH8QI5No8ODo+u397ecL3T35IGhcRA4jig8E9qmjAX2OGnAV5ggrxr0ELOaByVmg6B1TGvEYyTvxcKUaMv/ii7xN/VAZYY2dfSHkkPOYY7Kpf7OmLzLfGPIFGd6izWrRUjdYt9Xfo+ULsLpgRKqGtGyadAEIUmnuhXSAwMAXD5j+omZlZRl+X30CWTm2dHwAAAABJRU5ErkJggg==';

var image_up_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABLFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9PVkEkAAAAY3RSTlMAAQ/6Uc0OEAvHTzL7TcudsMHvdwnfUwMcG8UGiIfTrIkg9QI+/ZTDe460km73LNovCo1vQUuR4Lwk45/OK+3UERTkekziZlSK8QQnoOsFaaXmLqOylvPZLYDRZTUWUpiTDfAuEmiSAAABUklEQVRYw+3WZ2+DMBAG4EtTygrQ7NHsJt1777333vv+/38o6gIMSo0dqf3AK1lIZ/mRjPEJgCBBgvxtQr8WqDKbCiWUG1AnYXU7C7UJqKQSR5oKQwqIPphsYW24nEPjJCYXilf9F+G+qeTmThTP5w8X8gK9NLqOGMGPhD8fdXtBkGihlmlsmF5aqK2xg9FmQe3/DupuEhTpoT41z/V1HVHfxWRRo/6ORBfyjILx9mRo+2MDlS3ggF5q4uP9qzmVNjfOA+EDdDLcWA8IW6FJEJPkCbFI3hCDZEFVPsmC7mQuyYJ0iUuyIAG4JDvEJTkgHskJcUgExC6RECmxQ4REDa24ILsU6wL/rfYHskmX9C87Pfi9aA5cUmnRx/kffDmncSCkat7X342KSzOIuesNR1WSl7GU8Xfbbs9Gyoo0TvRp6Tie8d2TOsyx51UMEiQIS94B13oTqqYgGGoAAAAASUVORK5CYII=';

var image_down_left = 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAMAAAAk2e+/AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABg1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8aT76cAAAAgHRSTlMAafwJfflezc+3WA7Z5Rk6PAvpBNE73kJT89QxZ48czNIv9A1DnI3qKQUaymjT4a7HdVuGf85LR20CVHr+tLBlA0GvYSTYZEnbAcazNPX4yB4GrAgnmL6Bcj4qIVKIe8kdVadIEe27B90bOG/3Er1rYJq1wibyh+4Q5CMzRllMXDo5euMAAAGfSURBVFjD7dblUwJBGAbw5aSlBJRGQERBkLC7u7u7u7veP90jDnaEcdhjP+k9X5h9Zu43O7PLe4eQECH/KGsIaUooOEcLK75LpehH628idSrE+nMANfyQ3MY2BRm0C6mM462tUwJAJtVyUB1WmsoSFZEk46D6TBcYS3UKPpCYawxD5VxHImVD/RHIxMQbGintkGQcppkcOkuutQPYfkDfmjck556ZTSydve2YY5UWk0Mww672VPh+XFqCU8tA+whtL+KOpa+bF3Rh8B4ymDNaSnSzG9IPIpsL34/HTPZfS58auMPYuYNMWcQXOsD3U9ZDOkZkkCvqwSIqUI2WfEDmgiQxRANiIp8GKtDLO6/Znw19oOdXhKoROtEUBr1F5Y9f4dt1XygqKgh6YqcHwMQkQBWICr1H6czTgrpoQde0IGnekJEWNEwLMv/GPDDB/M/fDioVeLYA5GqoYt+xNRY4toJkCiBUG7vTEVxJu2Z549RbqXQuba7uVDZWO66mgw6d7kYaEPvvCb+REIp/srGzLP4aa0n8zKFkKUSIkD+Qb9QrYMvxAbaBAAAAAElFTkSuQmCC';

function cameraPresetTemplate (obj, number, type){
    let presetKey, presetCategory, presetText, presetActionId, presetIdnumber
    switch (type){
        case("recall"):
            presetKey = 'recall_preset_'
            presetCategory = 'Camera Recall Preset'
            presetText = 'Recall PSet '
            presetActionId = 'preset_action'
            presetIdnumber = '02'
            break;
        case("set"):
            presetKey = 'set_preset_'
            presetCategory = 'Camera Set Preset'
            presetText = 'Set PSet '
            presetActionId = 'preset_action'
            presetIdnumber = '01'
            break;
        case("multipresenter"):
            presetKey = 'multi_presenter_set_preset_'
            presetCategory = 'Multi-presenter Set Preset'
            presetText = 'MP Set PSet '
            presetActionId = 'multi_presenter_set_preset_action'
            presetIdnumber = ''
            break;
        case("auto_zt"):
            presetKey = 'auto_tilt_zoom_set_preset_'
            presetCategory = 'Auto Zoom/Tilt Set Preset'
            presetText = 'Auto Z/T Set PSet '
            presetActionId = 'auto_zoom_tilt_set_preset_action'
            presetIdnumber = ''
            break;
        default:
            console.log("error", "problem with Camera Preset template type argument")
            break;
    }
    for(let i = 0; i <= number; i++){
        obj[presetKey + i.toString()] = {
            type: 'button', // This must be 'button' for now
            category: presetCategory, // This groups presets into categories in the ui. Try to create logical groups to help users find presets
            name: 'My button', // A name for the preset. Shown to the user when they hover over it
            style: {
                // This is the minimal set of style properties you must define
                text: presetText + i.toString(),
                size: '14',
                color:  combineRgb(255, 255, 255),
                //bgcolor: combineRgb(0, 0, 0),
            },
            steps: [
                {
                    down: [
                        {
                            // add an action on down press
                            actionId: presetActionId,
                            options: {
                                // options values to use from options id; eg: options_id: 'value'
                                preset: presetIdnumber,
                                num: i,
                            },
                        },
                    ],
                    up: [],
                },
            ],
            feedbacks: [], // You can add some presets from your module here
        }
    }
    return obj
}
module.exports = function (self) {
const presets = {}
presets['auto_exposure_bright'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Exposure Bright',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        auto_exposure: '0D',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_exposure_full_auto'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Exposure Full Auto',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        auto_exposure: '00',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_exposure_iris_priority'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Exposure Iris Priority',
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
                        // options values to use from options id; eg: options_id: 'value'
                        auto_exposure: '0B',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_exposure_manual'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Exposure Manual',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        auto_exposure: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_exposure_shutter_priority'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Exposure Shutter Priority',
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
                        // options values to use from options id; eg: options_id: 'value'
                        auto_exposure: '0A',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['gain_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Gain +',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'gain_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        gain: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['gain_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Gain -',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'gain_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        gain: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['blue_gain_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Blue Gain +',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'blue_gain_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        blue_gain: '0402',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['blue_gain_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Blue Gain -',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'blue_gain_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        blue_gain: '0403',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['red_gain_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Red Gain +',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'red_gain_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        red_gain: '0302',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['red_gain_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Red Gain -',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'red_gain_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        red_gain: '0303',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['exposure_comp_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Exposure Comp +',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'exposure_comp_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        exposure_comp: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['exposure_comp_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Exposure Comp -',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'exposure_comp_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        exposure_comp: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['iris_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Iris +',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'iris_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        iris: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['iris_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Iris -',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'iris_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        iris: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['shutter_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Shutter +',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'shutter_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        shutter: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_zoom_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Zoom On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'autozoom_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        auto_zoom: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_zoom_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Zoom Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'autozoom_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        auto_zoom: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_auto'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus Auto',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        focus: '3802',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_far'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus Far',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        focus: '0802',
                    },
                },
            ],
            up: [ 
                {
                    actionId: 'focus_action',
                    options: {
                        focus: '0800'
                    }
                }
            ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_manual'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus Manual',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        focus: '3803',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_near'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus Near',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        focus: '0803',
                    },
                },
            ],
            up: [
                {
                    actionId: 'focus_action',
                    options: {
                        focus: '0800'
                    }
                }
             ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_op'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus 1 push',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        focus: '1801',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['focus_stop'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Focus Stop',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        focus: '0800',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['relative_zoom_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Relative Zoom On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'relative_zoom_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        relative_zoom: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['relative_zoom_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Relative Zoom Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'relative_zoom_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        relative_zoom: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['zoom_in'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Zoom In',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['zoom_out'] = {
    type: 'button', // This must be 'button' for now
    category: 'Lens', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Zoom Out',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_left'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_right'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_up_left'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_up_right'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_down_left'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['pt_down_right'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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
                        // options values to use from options id; eg: options_id: 'value'
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
presets['auto_tilt_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Tilt On',
        size: '14',
        color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'auto_tilt_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        auto_tilt: '02',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_tilt_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Tilt Off',
        size: '14',
        color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'auto_tilt_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        auto_tilt: '03',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_home'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Home',
        size: '14',
        color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        pan_tilt: '04',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['pt_reset'] = {
    type: 'button', // This must be 'button' for now
    category: 'Pan/Tilt', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Reset',
        size: '14',
        color: combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'pan_tilt_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        pan_tilt: '05',
                        pan_speed: 10,
                        tilt_speed: 10,
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
cameraPresetTemplate(presets, 255, "auto_zt")
cameraPresetTemplate(presets, 255, "multipresenter")
cameraPresetTemplate(presets, 255, "recall")
cameraPresetTemplate(presets, 255, "set")
presets['backlight_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Backlight On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'backlight_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        backlight: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['backlight_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Backlight Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'backlight_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        backlight: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['bright_up'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Brightness +',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'bright_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        bright: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['bright_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Brightness -',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'bright_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        bright: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['custom_command'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Custom Command',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'custom_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        custom: '',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['freeze_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Freeze On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'freeze_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        freeze: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['freeze_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Freeze Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'freeze_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        freeze: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['freeze_preset_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Freeze Preset On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'freeze_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        freeze: '22',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['freeze_preset_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Freeze Preset Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'freeze_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        freeze: '23',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['menu_enter'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Menu Enter',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'menu_enter_action',
                    options: { },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['menu_action'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Menu On/Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'menu_action',
                    options: { },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['on_screen_display'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'On Screen Display',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'osd_action',
                    options: { },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['preset_affects_ptz_zoom_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Presets Affect PTZ & Zoom On',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'presets_affect_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        presets_affect: '02',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['preset_affects_ptz_zoom_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Presets Affect PTZ & Zoom Off',
        size: 'auto',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'presets_affect_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        presets_affect: '03',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['rtmp_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'RTMP On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'rtmp_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        rtmp: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['rtmp_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'RTMP Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'rtmp_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        rtmp: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['video_mode_ip_stream'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'VM IP+Stream',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'video_mode_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        video_mode: '00',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['video_mode_ndi'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'VM NDI',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'video_mode_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        video_mode: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['video_mode_stream'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'VM Streaming',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'video_mode_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        video_mode: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['video_mode_usb'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'VM USB',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'video_mode_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        video_mode: '01',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tally_lamp_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tally Lamp On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tally_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tally_lamp: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tally_lamp_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tally Lamp Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tally_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tally_lamp: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wide_dynamic_range_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Wide Dynamic Range On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wdr_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        wdr: '02',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wide_dynamic_range_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'System', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Wide Dynamic Range Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'wdr_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        wdr: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['audio_frame_mode'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Audio Frame Mode',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'audio_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        audio_tracking: '05',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['audio_preset_tracking'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Audio Preset Tracking Mode',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'audio_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        audio_tracking: '06',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['audio_tracking_mode'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Audio Tracking Mode',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'audio_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        audio_tracking: '04',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_tracking_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Tracking On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'auto_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        auto_tracking: '02',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['auto_tracking_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Tracking Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'auto_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        auto_tracking: '03',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['effective_tracking_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Effective Tracking Area On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'effective_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        effective_tracking: '02',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['effective_tracking_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Effective Tracking Area Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'effective_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        effective_tracking: '03',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['frame_tracking_auto'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Auto Framing Mode',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'frame_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        frame_tracking: '02',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['frame_tracking_manual'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Manual Framing Mode',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'frame_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        frame_tracking: '03',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['frame_tracking_start'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Framing Start',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'frame_tracking_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        frame_tracking: '00',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['multi_presenter_on'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Multi-presenter On',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'multi_presenter_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        multi_presenter: '02',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['multi_presenter_off'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Multi-presenter Off',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'multi_presenter_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        multi_presenter: '03',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tracking_control_mode_hybrid'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tracking Hybrid',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tracking_control_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tracking_control: 'A6',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tracking_control_mode_full_body'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tracking Full Body',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tracking_control_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tracking_control: 'A0',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tracking_control_mode_multipresenter'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tracking Multipresenter',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tracking_control_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tracking_control: 'A3',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tracking_control_mode_presenter'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tracking Presenter',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tracking_control_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tracking_control: 'A4',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tracking_control_mode_tracking_point'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tracking Point',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tracking_control_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tracking_control: 'A2',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tracking_control_mode_upper_body'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tracking Upper Body',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tracking_control_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tracking_control: 'A1',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['tracking_control_mode_zone'] = {
    type: 'button', // This must be 'button' for now
    category: 'Tracking', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Tracking Zone',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'tracking_control_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        tracking_control: 'A5',
                    },
                },
            ],
            up: [],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['shutter_down'] = {
    type: 'button', // This must be 'button' for now
    category: 'Exposure', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'Shutter -',
        size: '14',
        color:  combineRgb(255, 255, 255),
        //bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
        {
            down: [
                {
                    // add an action on down press
                    actionId: 'shutter_action',
                    options: {
                        // options values to use from options id; eg: options_id: 'value'
                        shutter: '03',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_auto'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB Auto',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        white_balance: '3500',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_atw'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB ATW',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        white_balance: '3504',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_indoor'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB Indoor',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        white_balance: '3501',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_outdoor'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: 'WB Outdoor',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        white_balance: '3502',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_1_push_wb_mode'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: '1 push WB mode',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
                        white_balance: '3503',
                    },
                },
            ],
            up: [ ],
        },
    ],
    feedbacks: [], // You can add some presets from your module here
}
presets['wb_1_push_trigger'] = {
    type: 'button', // This must be 'button' for now
    category: 'White Balance', // This groups presets into categories in the ui. Try to create logical groups to help users find presets
    name: 'My button', // A name for the preset. Shown to the user when they hover over it
    style: {
        // This is the minimal set of style properties you must define
        text: '1 push trigger',
        size: '14',
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
                        // options values to use from options id; eg: options_id: 'value'
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