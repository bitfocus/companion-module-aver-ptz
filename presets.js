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

/*
   A collection of preset variables commonly used for creating a preset

   An example:
   
   var mypreset = new templateElements()
   mypreset.key = 'my_unique_name'
   mypreset.category = 'My Category'
   mypreset.text = 'My Button text'

   Insert key value inside an object to include options from the action button
   
   mypreset.downAction = {"actionId" : "my-action", "options" : {"brightness" : 100, "foo" : "bar"}}

   For creating presets that iterate through a number range available as preset buttons, see below:

   mypreset.numberCounterID = 'num' // id of the number type that contains a min and max range of numbers

   The other templateElements variables are optional
*/
var templateElements = function  (){
        this.key // unique key, or name, for each preset
        this.category // preset category
        this.text // text of the button
        this.name // alt text when the mouse hovers over the button
        this.downAction // use an object with key value pairs, include the id and options from the action button
        this.upAction // use an object with key value pairs, include the id and options from the action button
        this.feedback // use an object with key value pairs, include the id, options, and style from the defined feedback
        this.numberCounterID // use the option ID number type to iterate the entire range of numbers
        this.pngalignment // png alignment
        this.png64 // the icon to display on the button
        this.size // text size
        this.color // text color, used with combineRgb
        this.bgcolor // background color of the button, used with combineRgb
}

/*
   A template for creating standard Companion presets
   
   presetTemplate function definitions 
   obj: the presets object
   range_start: for iterating a range of presets generally start with 0, for a single preset use 0
   range_end: for iterating a range of presets end with the maximum, for a single preset use 0
   elements: the name of the variable used to create templateElements

   To create more advanced presets use the Companion presets template from the wiki for the structure
*/
function presetTemplate (obj, range_start, range_end, elements){
    let objKey, objCategory, objText, objName, objSize
    let objPngAlignment, objPng64, objColor, objBGColor

    objKey = elements.key//
    objCategory = elements.category
    objText = elements.text
    objName = elements.name ? elements.name : 'My Button'
    objSize = elements.size ? elements.size : '14'
    objPngAlignment = elements.pngalignment
    objPng64 = elements.png64
    objColor = elements.color ? elements.color : combineRgb(255, 255, 255)
    objBGColor = elements.bgcolor ? elements.bgcolor : combineRgb(0, 0, 0)

    for(let counter = range_start; counter <= range_end; counter++){
        let options = {}, down = [], up = [], feedbacks = []
        let objDownAction = elements.downAction
        // Down is mostly present with all presets so additional if statements are not needed
        if(elements.numberCounterID){
            options[elements.numberCounterID] = counter // add an incrementing value
            //Combine existing options and counter option with spread
            if(objDownAction.options){
                options = {...objDownAction.options, ...options}
            }
            objDownAction = {...objDownAction, options}
            objKey = elements.key + counter.toString() // give each key a unique name using the counter as a suffix
            objText = elements.text + ' ' + counter.toString() // add the counter to the text
        }
        down.push(objDownAction)
       
        // Up
        if(elements.upAction){ 
            up.push(elements.upAction)
        }
       
        // Feedbacks
        if(elements.feedback){
            feedbacks.push(elements.feedback)
        }
       
        // preset structure
        obj[objKey] = {
            type: 'button', // This must be 'button' for now
            category: objCategory, // This groups presets into categories in the ui. Try to create logical groups to help users find presets
            name: objName, // A name for the preset. Shown to the user when they hover over it
            style: {
                // This is the minimal set of style properties you must define
                text: objText,
                size: objSize,
                pngalignment: objPngAlignment,
                png64: objPng64,
                color:  objColor,
                bgcolor: objBGColor,
            },
            steps: [
                {
                    down,
                    up,
                },
            ],
            feedbacks, // You can add some presets from your module here
        }
        //console.log(obj[objKey].steps[0].down[0].options)
        //console.log(obj[objKey].steps[0].up)
    }
    return obj
}
module.exports = function (self) {
const presets = {}

/*********************
 Exposure
*********************/
const auto_exposure_bright = new templateElements()
auto_exposure_bright.key = 'auto_exposure_bright'
auto_exposure_bright.category = 'Exposure'
auto_exposure_bright.text = 'Auto Exposure Bright'
auto_exposure_bright.downAction = {"actionId" : 'auto_exposure_action', "options" : {"auto_exposure" : '0D'}}
presetTemplate(presets, 0, 0, auto_exposure_bright)

const auto_exposure_full_auto = new templateElements()
auto_exposure_full_auto.key = 'auto_exposure_full_auto'
auto_exposure_full_auto.category = 'Exposure'
auto_exposure_full_auto.text = 'Auto Exposure Full Auto'
auto_exposure_full_auto.downAction = {"actionId" : 'auto_exposure_action', "options" : {"auto_exposure" : '00'}}
presetTemplate(presets, 0, 0, auto_exposure_full_auto)

const auto_exposure_iris_priority = new templateElements()
auto_exposure_iris_priority.key = 'auto_exposure_iris_priority'
auto_exposure_iris_priority.category = 'Exposure'
auto_exposure_iris_priority.text = 'Auto Exposure Iris Priority'
auto_exposure_iris_priority.size = 'auto'
auto_exposure_iris_priority.downAction = {"actionId" : 'auto_exposure_action', "options" : {"auto_exposure" : '0B'}}
presetTemplate(presets, 0, 0, auto_exposure_iris_priority)

const auto_exposure_manual = new templateElements()
auto_exposure_manual.key = 'auto_exposure_manual'
auto_exposure_manual.category = 'Exposure'
auto_exposure_manual.text = 'Auto Exposure Manual'
auto_exposure_manual.downAction = {"actionId" : 'auto_exposure_action', "options" : {"auto_exposure" : '03'}}
presetTemplate(presets, 0, 0, auto_exposure_manual)

const auto_exposure_shutter_priority = new templateElements()
auto_exposure_shutter_priority.key = 'auto_exposure_shutter_priority'
auto_exposure_shutter_priority.category = 'Exposure'
auto_exposure_shutter_priority.text = 'Auto Exposure Shutter Priority'
auto_exposure_shutter_priority.size = 'auto'
auto_exposure_shutter_priority.downAction = {"actionId" : 'auto_exposure_action', "options" : {"auto_exposure" : '0A'}}
presetTemplate(presets, 0, 0, auto_exposure_shutter_priority)

const gain_up = new templateElements()
gain_up.key = 'gain_up'
gain_up.category = 'Exposure'
gain_up.text = 'Gain +'
gain_up.downAction = {"actionId" : 'gain_action', "options" : {"gain" : '02'}}
presetTemplate(presets, 0, 0, gain_up)

const gain_down = new templateElements()
gain_down.key = 'gain_down'
gain_down.category = 'Exposure'
gain_down.text = 'Gain -'
gain_down.downAction = {"actionId" : 'gain_action', "options" : {"gain" : '03'}}
presetTemplate(presets, 0, 0, gain_down)

const blue_gain_up = new templateElements()
blue_gain_up.key = 'blue_gain_up'
blue_gain_up.category = 'Exposure'
blue_gain_up.text = 'Blue Gain +'
blue_gain_up.downAction = {"actionId" : 'blue_gain_action', "options" : {"blue_gain" : '0402'}}
presetTemplate(presets, 0, 0, blue_gain_up)

const blue_gain_down = new templateElements()
blue_gain_down.key = 'blue_gain_down'
blue_gain_down.category = 'Exposure'
blue_gain_down.text = 'Blue Gain -'
blue_gain_down.downAction = {"actionId" : 'blue_gain_action', "options" : {"blue_gain" : '0403'}}
presetTemplate(presets, 0, 0, blue_gain_down)

const red_gain_up = new templateElements()
red_gain_up.key = 'red_gain_up'
red_gain_up.category = 'Exposure'
red_gain_up.text = 'Red Gain +'
red_gain_up.downAction = {"actionId" : 'red_gain_action', "options" : {"red_gain" : '0302'}}
presetTemplate(presets, 0, 0, red_gain_up)

const red_gain_down = new templateElements()
red_gain_down.key = 'red_gain_down'
red_gain_down.category = 'Exposure'
red_gain_down.text = 'Red Gain -'
red_gain_down.downAction = {"actionId" : 'red_gain_action', "options" : {"red_gain" : '0303'}}
presetTemplate(presets, 0, 0, red_gain_down)

const exposure_comp_up = new templateElements()
exposure_comp_up.key = 'exposure_comp_up'
exposure_comp_up.category = 'Exposure'
exposure_comp_up.text = 'Exposure Comp +'
exposure_comp_up.downAction = {"actionId" : 'exposure_comp_action', "options" : {"exposure_comp" : '02'}}
presetTemplate(presets, 0, 0, exposure_comp_up)

const exposure_comp_down = new templateElements()
exposure_comp_down.key = 'exposure_comp_down'
exposure_comp_down.category = 'Exposure'
exposure_comp_down.text = 'Exposure Comp -'
exposure_comp_down.downAction = {"actionId" : 'exposure_comp_action', "options" : {"exposure_comp" : '03'}}
presetTemplate(presets, 0, 0, exposure_comp_down)

const iris_up = new templateElements()
iris_up.key = 'iris_up'
iris_up.category = 'Exposure'
iris_up.text = 'Iris +'
iris_up.downAction = {"actionId" : 'iris_action', "options" : {"iris" : '02'}}
presetTemplate(presets, 0, 0, iris_up)

const iris_down = new templateElements()
iris_down.key = 'iris_down'
iris_down.category = 'Exposure'
iris_down.text = 'Iris -'
iris_down.downAction = {"actionId" : 'iris_action', "options" : {"iris" : '03'}}
presetTemplate(presets, 0, 0, iris_down)

const shutter_up = new templateElements()
shutter_up.key = 'shutter_up'
shutter_up.category = 'Exposure'
shutter_up.text = 'Shutter +'
shutter_up.downAction = {"actionId" : 'shutter_action', "options" : {"shutter" : '02'}}
presetTemplate(presets, 0, 0, shutter_up)

const shutter_down = new templateElements()
shutter_down.key = 'shutter_down'
shutter_down.category = 'Exposure'
shutter_down.text = 'Shutter -'
shutter_down.downAction = {"actionId" : 'shutter_action', "options" : {"shutter" : '03'}}
presetTemplate(presets, 0, 0, shutter_down)

/*********************
 Lens
*********************/

const auto_zoom_on = new templateElements()
auto_zoom_on.key = 'auto_zoom_on'
auto_zoom_on.category = 'Lens'
auto_zoom_on.text = 'Auto Zoom On'
auto_zoom_on.downAction = {"actionId" : 'autozoom_action', "options" : {"auto_zoom" : '02'}}
presetTemplate(presets, 0, 0, auto_zoom_on)

const auto_zoom_off = new templateElements()
auto_zoom_off.key = 'auto_zoom_off'
auto_zoom_off.category = 'Lens'
auto_zoom_off.text = 'Auto Zoom Off'
auto_zoom_off.downAction = {"actionId" : 'autozoom_action', "options" : {"auto_zoom" : '03'}}
presetTemplate(presets, 0, 0, auto_zoom_off)

const focus_auto = new templateElements()
focus_auto.key = 'focus_auto'
focus_auto.category = 'Lens'
focus_auto.text = 'Focus Auto'
focus_auto.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '3802'}}
presetTemplate(presets, 0, 0, focus_auto)

const focus_far = new templateElements()
focus_far.key = 'focus_far'
focus_far.category = 'Lens'
focus_far.text = 'Focus Far'
focus_far.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '0802'}}
focus_far.upAction = {"actionId" : 'focus_action', "options" : {"focus" : '0800'}}
presetTemplate(presets, 0, 0, focus_far)

const focus_far_var = new templateElements()
focus_far_var.key = 'focus_far_var'
focus_far_var.category = 'Lens'
focus_far_var.text = 'Focus Far (var)'
focus_far_var.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '082', "far" : 3}}
focus_far_var.upAction = {"actionId" : 'focus_action', "options" : {"focus" : '0800'}}
presetTemplate(presets, 0, 0, focus_far_var)

const focus_manual = new templateElements()
focus_manual.key = 'focus_manual'
focus_manual.category = 'Lens'
focus_manual.text = 'Focus Manual'
focus_manual.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '3803'}}
presetTemplate(presets, 0, 0, focus_manual)

const focus_near = new templateElements()
focus_near.key = 'focus_near'
focus_near.category = 'Lens'
focus_near.text = 'Focus Near'
focus_near.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '0803'}}
focus_near.upAction = {"actionId" : 'focus_action', "options" : {"focus" : '0800'}}
presetTemplate(presets, 0, 0, focus_near)

const focus_near_var = new templateElements()
focus_near_var.key = 'focus_near_var'
focus_near_var.category = 'Lens'
focus_near_var.text = 'Focus Near (var)'
focus_near_var.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '083', "near" : 3}}
focus_near_var.upAction = {"actionId" : 'focus_action', "options" : {"focus" : '0800'}}
presetTemplate(presets, 0, 0, focus_near_var)

const focus_op = new templateElements()
focus_op.key = 'focus_op'
focus_op.category = 'Lens'
focus_op.text = 'Focus 1 push'
focus_op.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '1801'}}
presetTemplate(presets, 0, 0, focus_op)

const focus_stop = new templateElements()
focus_stop.key = 'focus_stop'
focus_stop.category = 'Lens'
focus_stop.text = 'Focus Stop'
focus_stop.downAction = {"actionId" : 'focus_action', "options" : {"focus" : '0800'}}
presetTemplate(presets, 0, 0, focus_stop)

const relative_zoom_on = new templateElements()
relative_zoom_on.key = 'relative_zoom_on'
relative_zoom_on.category = 'Lens'
relative_zoom_on.text = 'Relative Zoom On'
relative_zoom_on.downAction = {"actionId" : 'relative_zoom_action', "options" : {"relative_zoom" : '02'}}
presetTemplate(presets, 0, 0, relative_zoom_on)

const relative_zoom_off = new templateElements()
relative_zoom_off.key = 'relative_zoom_off'
relative_zoom_off.category = 'Lens'
relative_zoom_off.text = 'Relative Zoom Off'
relative_zoom_off.downAction = {"actionId" : 'relative_zoom_action', "options" : {"relative_zoom" : '03'}}
presetTemplate(presets, 0, 0, relative_zoom_off)

const zoom_in = new templateElements()
zoom_in.key = 'zoom_in'
zoom_in.category = 'Lens'
zoom_in.text = 'Zoom In'
zoom_in.downAction = {"actionId" : 'zoom_in_action', "options" : {"zoom_in" : '3'}}
zoom_in.upAction = {"actionId" : 'zoom_stop_action'}
presetTemplate(presets, 0, 0, zoom_in)

const zoom_out = new templateElements()
zoom_out.key = 'zoom_out'
zoom_out.category = 'Lens'
zoom_out.text = 'Zoom Out'
zoom_out.downAction = {"actionId" : 'zoom_out_action', "options" : {"zoom_out" : '3'}}
zoom_out.upAction = {"actionId" : 'zoom_stop_action'}
presetTemplate(presets, 0, 0, zoom_out)

/*********************
 Pan/Tilt
*********************/

const pt_up = new templateElements()
pt_up.key = 'pt_up'
pt_up.category = 'Pan/Tilt'
pt_up.png64 = image_up
pt_up.pngalignment = "center:center"
pt_up.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0301', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_up.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_up)

const pt_down = new templateElements()
pt_down.key = 'pt_down'
pt_down.category = 'Pan/Tilt'
pt_down.png64 = image_down
pt_down.pngalignment = "center:center"
pt_down.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0302', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_down.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_down)

const pt_left = new templateElements()
pt_left.key = 'pt_left'
pt_left.category = 'Pan/Tilt'
pt_left.png64 = image_left
pt_left.pngalignment = "center:center"
pt_left.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0103', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_left.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_left)

const pt_right = new templateElements()
pt_right.key = 'pt_right'
pt_right.category = 'Pan/Tilt'
pt_right.png64 = image_right
pt_right.pngalignment = "center:center"
pt_right.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0203', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_right.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_right)

const pt_up_left = new templateElements()
pt_up_left.key = 'pt_up_left'
pt_up_left.category = 'Pan/Tilt'
pt_up_left.png64 = image_up_left
pt_up_left.pngalignment = "center:center"
pt_up_left.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0101', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_up_left.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_up_left)

const pt_up_right = new templateElements()
pt_up_right.key = 'pt_up_right'
pt_up_right.category = 'Pan/Tilt'
pt_up_right.png64 = image_up_right
pt_up_right.pngalignment = "center:center"
pt_up_right.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0201', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_up_right.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_up_right)

const pt_down_left = new templateElements()
pt_down_left.key = 'pt_down_left'
pt_down_left.category = 'Pan/Tilt'
pt_down_left.png64 = image_down_left
pt_down_left.pngalignment = "center:center"
pt_down_left.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0102', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_down_left.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_down_left)

const pt_down_right = new templateElements()
pt_down_right.key = 'pt_down_right'
pt_down_right.category = 'Pan/Tilt'
pt_down_right.png64 = image_down_right
pt_down_right.pngalignment = "center:center"
pt_down_right.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0202', "pan_speed" : 10, "tilt_speed" : 10 }}
pt_down_right.upAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '0303', "pan_speed" : 1, "tilt_speed" : 1}}
presetTemplate(presets, 0, 0, pt_down_right)

const auto_tilt_on = new templateElements()
auto_tilt_on.key = 'auto_tilt_on'
auto_tilt_on.category = 'Pan/Tilt'
auto_tilt_on.text = 'Auto Tilt On'
auto_tilt_on.downAction = {"actionId" : 'auto_tilt_action', "options" : {"auto_tilt" : '02'}}
presetTemplate(presets, 0, 0, auto_tilt_on)

const auto_tilt_off = new templateElements()
auto_tilt_off.key = 'auto_tilt_off'
auto_tilt_off.category = 'Pan/Tilt'
auto_tilt_off.text = 'Auto Tilt Off'
auto_tilt_off.downAction = {"actionId" : 'auto_tilt_action', "options" : {"auto_tilt" : '03'}}
presetTemplate(presets, 0, 0, auto_tilt_off)

const pt_home = new templateElements()
pt_home.key = 'pt_home'
pt_home.category = 'Pan/Tilt'
pt_home.text = 'Home'
pt_home.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '04'}}
presetTemplate(presets, 0, 0, pt_home)

const pt_reset = new templateElements()
pt_reset.key = 'pt_reset'
pt_reset.category = 'Pan/Tilt'
pt_reset.text = 'Reset'
pt_reset.downAction = {"actionId" : 'pan_tilt_action', "options" : {"pan_tilt" : '05'}}
presetTemplate(presets, 0, 0, pt_reset)

/*********************
 Auto Zoom/Tilt Set Preset
*********************/

const auto_zt = new templateElements()
auto_zt.key = 'auto_tilt_zoom_set_preset_'
auto_zt.category = 'Auto Zoom/Tilt Set Preset'
auto_zt.text = 'Auto Z/T Set PSet'
auto_zt.numberCounterID = "num"
auto_zt.downAction = {"actionId" : 'auto_zoom_tilt_set_preset_action'}
presetTemplate(presets, 0, 255, auto_zt)

/*********************
 Multi-presenter Set Preset
*********************/

const multipresenter = new templateElements()
multipresenter.key = 'multi_presenter_set_preset_'
multipresenter.category = 'Multi-presenter Set Preset'
multipresenter.text = 'MP Set PSet'
multipresenter.numberCounterID = "num"
multipresenter.downAction = {"actionId" : 'multi_presenter_set_preset_action'}
presetTemplate(presets, 0, 255, multipresenter)

/*********************
 Camera Recall Preset
*********************/

const camera_recall = new templateElements()
camera_recall.key = 'recall_preset_'
camera_recall.category = 'Camera Recall Preset'
camera_recall.text = 'Recall PSet'
camera_recall.numberCounterID = "num"
camera_recall.downAction = {"actionId" : "preset_action", "options" : {"preset" : "02"}}
presetTemplate(presets, 0, 255, camera_recall)

/*********************
 Camera Set Preset
*********************/

const camera_set = new templateElements()
camera_set.key = 'set_preset_'
camera_set.category = 'Camera Set Preset'
camera_set.text = 'Set PSet'
camera_set.numberCounterID = "num"
camera_set.downAction = {"actionId" : "preset_action", "options" : {"preset" : "01"}}
presetTemplate(presets, 0, 255, camera_set)

/*********************
 Profile Read
*********************/

const profile_read = new templateElements()
profile_read.key = 'profile_read_'
profile_read.category = 'Profile Read'
profile_read.text = 'Profile Read'
profile_read.numberCounterID = "num"
profile_read.downAction = {"actionId" : 'profile_action', "options" : {"profile" : '01'}}
presetTemplate(presets, 1, 5, profile_read)

/*********************
 Profile Save
*********************/

const profile_save = new templateElements()
profile_save.key = 'profile_save_'
profile_save.category = 'Profile Save'
profile_save.text = 'Profile Save'
profile_save.numberCounterID = "num"
profile_save.downAction = {"actionId" : 'profile_action', "options" : {"profile" : '02'}}
presetTemplate(presets, 1, 5, profile_save)

/*********************
 System
*********************/

const backlight_on = new templateElements()
backlight_on.key = 'backlight_on'
backlight_on.category = 'System'
backlight_on.text = 'Backlight On'
backlight_on.downAction = {"actionId" : 'backlight_action', "options" : {"backlight" : '02'}}
presetTemplate(presets, 0, 0, backlight_on)

const backlight_off = new templateElements()
backlight_off.key = 'backlight_off'
backlight_off.category = 'System'
backlight_off.text = 'Backlight Off'
backlight_off.downAction = {"actionId" : 'backlight_action', "options" : {"backlight" : '03'}}
presetTemplate(presets, 0, 0, backlight_off)

const bright_up = new templateElements()
bright_up.key = 'bright_up'
bright_up.category = 'System'
bright_up.text = 'Brightness +'
bright_up.downAction = {"actionId" : 'bright_action', "options" : {"bright" : '02'}}
presetTemplate(presets, 0, 0, bright_up)

const bright_down = new templateElements()
bright_down.key = 'bright_down'
bright_down.category = 'System'
bright_down.text = 'Brightness -'
bright_down.downAction = {"actionId" : 'bright_action', "options" : {"bright" : '03'}}
presetTemplate(presets, 0, 0, bright_down)

const custom_command = new templateElements()
custom_command.key = 'custom_command'
custom_command.category = 'System'
custom_command.text = 'Custom Command'
custom_command.downAction = {"actionId" : 'custom_action', "options" : {"custom" : ''}}
presetTemplate(presets, 0, 0, custom_command)

const freeze_on = new templateElements()
freeze_on.key = 'freeze_on'
freeze_on.category = 'System'
freeze_on.text = 'Freeze On'
freeze_on.downAction = {"actionId" : 'freeze_action', "options" : {"freeze" : '02'}}
presetTemplate(presets, 0, 0, freeze_on)

const freeze_off = new templateElements()
freeze_off.key = 'freeze_off'
freeze_off.category = 'System'
freeze_off.text = 'Freeze Off'
freeze_off.downAction = {"actionId" : 'freeze_action', "options" : {"freeze" : '03'}}
presetTemplate(presets, 0, 0, freeze_off)

const freeze_preset_on = new templateElements()
freeze_preset_on.key = 'freeze_preset_on'
freeze_preset_on.category = 'System'
freeze_preset_on.text = 'Freeze Preset On'
freeze_preset_on.downAction = {"actionId" : 'freeze_action', "options" : {"freeze" : '22'}}
presetTemplate(presets, 0, 0, freeze_preset_on)

const freeze_preset_off = new templateElements()
freeze_preset_off.key = 'freeze_preset_off'
freeze_preset_off.category = 'System'
freeze_preset_off.text = 'Freeze Preset Off'
freeze_preset_off.downAction = {"actionId" : 'freeze_action', "options" : {"freeze" : '23'}}
presetTemplate(presets, 0, 0, freeze_preset_off)

const menu_enter = new templateElements()
menu_enter.key = 'menu_enter'
menu_enter.category = 'System'
menu_enter.text = 'Menu Enter'
menu_enter.downAction = {"actionId" : 'menu_enter_action'}
presetTemplate(presets, 0, 0, menu_enter)

const menu_action = new templateElements()
menu_action.key = 'menu_action'
menu_action.category = 'System'
menu_action.text = 'Menu On/Off'
menu_action.downAction = {"actionId" : 'menu_action'}
presetTemplate(presets, 0, 0, menu_action)

const on_screen_display = new templateElements()
on_screen_display.key = 'on_screen_display'
on_screen_display.category = 'System'
on_screen_display.text = 'On Screen Display'
on_screen_display.downAction = {"actionId" : 'osd_action'}
presetTemplate(presets, 0, 0, on_screen_display)

const preset_affects_ptz_zoom_on = new templateElements()
preset_affects_ptz_zoom_on.key = 'preset_affects_ptz_zoom_on'
preset_affects_ptz_zoom_on.category = 'System'
preset_affects_ptz_zoom_on.text = 'Presets Affect PTZ & Zoom On'
preset_affects_ptz_zoom_on.size = 'auto'
preset_affects_ptz_zoom_on.downAction = {"actionId" : 'presets_affect_action', "options" : {"presets_affect": '02'}}
presetTemplate(presets, 0, 0, preset_affects_ptz_zoom_on)

const preset_affects_ptz_zoom_off = new templateElements()
preset_affects_ptz_zoom_off.key = 'preset_affects_ptz_zoom_off'
preset_affects_ptz_zoom_off.category = 'System'
preset_affects_ptz_zoom_off.text = 'Presets Affect PTZ & Zoom Off'
preset_affects_ptz_zoom_off.size = 'auto'
preset_affects_ptz_zoom_off.downAction = {"actionId" : 'presets_affect_action', "options" : {"presets_affect": '03'}}
presetTemplate(presets, 0, 0, preset_affects_ptz_zoom_off)

const rtmp_on = new templateElements()
rtmp_on.key = 'rtmp_on'
rtmp_on.category = 'System'
rtmp_on.text = 'RTMP On'
rtmp_on.downAction = {"actionId" : 'rtmp_action', "options" : {"rtmp": '02'}}
presetTemplate(presets, 0, 0, rtmp_on)

const rtmp_off = new templateElements()
rtmp_off.key = 'rtmp_off'
rtmp_off.category = 'System'
rtmp_off.text = 'RTMP Off'
rtmp_off.downAction = {"actionId" : 'rtmp_action', "options" : {"rtmp": '03'}}
presetTemplate(presets, 0, 0, rtmp_off)

const video_mode_ip_stream = new templateElements()
video_mode_ip_stream.key = 'video_mode_ip_stream'
video_mode_ip_stream.category = 'System'
video_mode_ip_stream.text = 'VM IP+Stream'
video_mode_ip_stream.downAction = {"actionId" : 'video_mode_action', "options" : {"video_mode" : '00'}}
presetTemplate(presets, 0, 0, video_mode_ip_stream)

const video_mode_ndi = new templateElements()
video_mode_ndi.key = 'video_mode_ndi'
video_mode_ndi.category = 'System'
video_mode_ndi.text = 'VM NDI'
video_mode_ndi.downAction = {"actionId" : 'video_mode_action', "options" : {"video_mode" : '02'}}
presetTemplate(presets, 0, 0, video_mode_ndi)

const video_mode_stream = new templateElements()
video_mode_stream.key = 'video_mode_stream'
video_mode_stream.category = 'System'
video_mode_stream.text = 'VM Streaming'
video_mode_stream.downAction = {"actionId" : 'video_mode_action', "options" : {"video_mode" : '03'}}
presetTemplate(presets, 0, 0, video_mode_stream)

const video_mode_usb = new templateElements()
video_mode_usb.key = 'video_mode_usb'
video_mode_usb.category = 'System'
video_mode_usb.text = 'VM USB'
video_mode_usb.downAction = {"actionId" : 'video_mode_action', "options" : {"video_mode" : '01'}}
presetTemplate(presets, 0, 0, video_mode_usb)

const tally_lamp_on = new templateElements()
tally_lamp_on.key = 'tally_lamp_on'
tally_lamp_on.category = 'System'
tally_lamp_on.text = 'Tally Lamp On'
tally_lamp_on.downAction = {"actionId" : 'tally_action', "options" : {"tally_lamp" : '02'}}
presetTemplate(presets, 0, 0, tally_lamp_on)

const tally_lamp_off = new templateElements()
tally_lamp_off.key = 'tally_lamp_off'
tally_lamp_off.category = 'System'
tally_lamp_off.text = 'Tally Lamp Off'
tally_lamp_off.downAction = {"actionId" : 'tally_action', "options" : {"tally_lamp" : '03'}}
presetTemplate(presets, 0, 0, tally_lamp_off)

const wide_dynamic_range_on = new templateElements()
wide_dynamic_range_on.key = 'wide_dynamic_range_on'
wide_dynamic_range_on.category = 'System'
wide_dynamic_range_on.text = 'Wide Dynamic Range On'
wide_dynamic_range_on.downAction = {"actionId" : 'wdr_action', "options" : {"wdr" : '02'}}
presetTemplate(presets, 0, 0, wide_dynamic_range_on)

const wide_dynamic_range_off = new templateElements()
wide_dynamic_range_off.key = 'wide_dynamic_range_off'
wide_dynamic_range_off.category = 'System'
wide_dynamic_range_off.text = 'Wide Dynamic Range Off'
wide_dynamic_range_off.downAction = {"actionId" : 'wdr_action', "options" : {"wdr" : '03'}}
presetTemplate(presets, 0, 0, wide_dynamic_range_off)

/*********************
 Tracking
*********************/

const audio_frame_mode = new templateElements()
audio_frame_mode.key = 'audio_frame_mode'
audio_frame_mode.category = 'Tracking'
audio_frame_mode.text = 'Audio Frame Mode'
audio_frame_mode.downAction = {"actionId" : 'audio_tracking_action', "options" : {"audio_tracking" : '05'}}
presetTemplate(presets, 0, 0, audio_frame_mode)

const audio_preset_tracking = new templateElements()
audio_preset_tracking.key = 'audio_preset_tracking'
audio_preset_tracking.category = 'Tracking'
audio_preset_tracking.text = 'Audio Preset Tracking Mode'
audio_preset_tracking.downAction = {"actionId" : 'audio_tracking_action', "options" : {"audio_tracking" : '06'}}
presetTemplate(presets, 0, 0, audio_preset_tracking)

const audio_tracking_mode = new templateElements()
audio_tracking_mode.key = 'audio_tracking_mode'
audio_tracking_mode.category = 'Tracking'
audio_tracking_mode.text = 'Audio Tracking Mode'
audio_tracking_mode.downAction = {"actionId" : 'audio_tracking_action', "options" : {"audio_tracking" : '04'}}
presetTemplate(presets, 0, 0, audio_tracking_mode)

const auto_tracking_on = new templateElements()
auto_tracking_on.key = 'auto_tracking_on'
auto_tracking_on.category = 'Tracking'
auto_tracking_on.text = 'Auto Tracking On'
auto_tracking_on.downAction = {"actionId" : 'auto_tracking_action', "options" : {"auto_tracking" : '02'}}
presetTemplate(presets, 0, 0, auto_tracking_on)

const auto_tracking_off = new templateElements()
auto_tracking_off.key = 'auto_tracking_off'
auto_tracking_off.category = 'Tracking'
auto_tracking_off.text = 'Auto Tracking Off'
auto_tracking_off.downAction = {"actionId" : 'auto_tracking_action', "options" : {"auto_tracking" : '03'}}
presetTemplate(presets, 0, 0, auto_tracking_off)

const auto_tracking_v1_on = new templateElements()
auto_tracking_v1_on.key = 'auto_tracking_v1_on'
auto_tracking_v1_on.category = 'Tracking'
auto_tracking_v1_on.text = 'Auto Tracking V1 On'
auto_tracking_v1_on.downAction = {"actionId" : 'auto_tracking_v1_action', "options" : {"auto_tracking_v1" : '02'}}
presetTemplate(presets, 0, 0, auto_tracking_v1_on)

const auto_tracking_v1_off = new templateElements()
auto_tracking_v1_off.key = 'auto_tracking_v1_off'
auto_tracking_v1_off.category = 'Tracking'
auto_tracking_v1_off.text = 'Auto Tracking V1 Off'
auto_tracking_v1_off.downAction = {"actionId" : 'auto_tracking_v1_action', "options" : {"auto_tracking_v1" : '03'}}
presetTemplate(presets, 0, 0, auto_tracking_v1_off)

const effective_tracking_on = new templateElements()
effective_tracking_on.key = 'effective_tracking_on'
effective_tracking_on.category = 'Tracking'
effective_tracking_on.text = 'Effective Tracking Area On'
effective_tracking_on.downAction = {"actionId" : 'effective_tracking_action', "options" : {"effective_tracking" : '02'}}
presetTemplate(presets, 0, 0, effective_tracking_on)

const effective_tracking_off = new templateElements()
effective_tracking_off.key = 'effective_tracking_off'
effective_tracking_off.category = 'Tracking'
effective_tracking_off.text = 'Effective Tracking Area Off'
effective_tracking_off.downAction = {"actionId" : 'effective_tracking_action', "options" : {"effective_tracking" : '03'}}
presetTemplate(presets, 0, 0, effective_tracking_off)

const frame_tracking_auto = new templateElements()
frame_tracking_auto.key = 'frame_tracking_auto'
frame_tracking_auto.category = 'Tracking'
frame_tracking_auto.text = 'Auto Framing Mode'
frame_tracking_auto.downAction = {"actionId" : 'frame_tracking_action', "options" : {"frame_tracking" : '02'}}
presetTemplate(presets, 0, 0, frame_tracking_auto)

const frame_tracking_manual = new templateElements()
frame_tracking_manual.key = 'frame_tracking_manual'
frame_tracking_manual.category = 'Tracking'
frame_tracking_manual.text = 'Manual Framing Mode'
frame_tracking_manual.downAction = {"actionId" : 'frame_tracking_action', "options" : {"frame_tracking" : '03'}}
presetTemplate(presets, 0, 0, frame_tracking_manual)

const frame_tracking_start = new templateElements()
frame_tracking_start.key = 'frame_tracking_start'
frame_tracking_start.category = 'Tracking'
frame_tracking_start.text = 'Framing Start'
frame_tracking_start.downAction = {"actionId" : 'frame_tracking_action', "options" : {"frame_tracking" : '00'}}
presetTemplate(presets, 0, 0, frame_tracking_start)

const multi_presenter_on = new templateElements()
multi_presenter_on.key = 'multi_presenter_on'
multi_presenter_on.category = 'Tracking'
multi_presenter_on.text = 'Multi-presenter On'
multi_presenter_on.downAction = {"actionId" : 'multi_presenter_action', "options" : {"multi_presenter" : '02'}}
presetTemplate(presets, 0, 0, multi_presenter_on)

const multi_presenter_off = new templateElements()
multi_presenter_off.key = 'multi_presenter_off'
multi_presenter_off.category = 'Tracking'
multi_presenter_off.text = 'Multi-presenter Off'
multi_presenter_off.downAction = {"actionId" : 'multi_presenter_action', "options" : {"multi_presenter" : '03'}}
presetTemplate(presets, 0, 0, multi_presenter_off)

const tracking_control_mode_hybrid = new templateElements()
tracking_control_mode_hybrid.key = 'tracking_control_mode_hybrid'
tracking_control_mode_hybrid.category = 'Tracking'
tracking_control_mode_hybrid.text = 'Tracking Hybrid'
tracking_control_mode_hybrid.downAction = {"actionId" : 'tracking_control_action', "options" : {"tracking_control" : 'A6'}}
presetTemplate(presets, 0, 0, tracking_control_mode_hybrid)

const tracking_control_mode_full_body = new templateElements()
tracking_control_mode_full_body.key = 'tracking_control_mode_full_body'
tracking_control_mode_full_body.category = 'Tracking'
tracking_control_mode_full_body.text = 'Tracking Full Body'
tracking_control_mode_full_body.downAction = {"actionId" : 'tracking_control_action', "options" : {"tracking_control" : 'A0'}}
presetTemplate(presets, 0, 0, tracking_control_mode_full_body)

const tracking_control_mode_multipresenter = new templateElements()
tracking_control_mode_multipresenter.key = 'tracking_control_mode_multipresenter'
tracking_control_mode_multipresenter.category = 'Tracking'
tracking_control_mode_multipresenter.text = 'Tracking Multipresenter'
tracking_control_mode_multipresenter.downAction = {"actionId" : 'tracking_control_action', "options" : {"tracking_control" : 'A3'}}
presetTemplate(presets, 0, 0, tracking_control_mode_multipresenter)

const tracking_control_mode_presenter = new templateElements()
tracking_control_mode_presenter.key = 'tracking_control_mode_presenter'
tracking_control_mode_presenter.category = 'Tracking'
tracking_control_mode_presenter.text = 'Tracking Presenter'
tracking_control_mode_presenter.downAction = {"actionId" : 'tracking_control_action', "options" : {"tracking_control" : 'A4'}}
presetTemplate(presets, 0, 0, tracking_control_mode_presenter)

const tracking_control_mode_tracking_point = new templateElements()
tracking_control_mode_tracking_point.key = 'tracking_control_mode_tracking_point'
tracking_control_mode_tracking_point.category = 'Tracking'
tracking_control_mode_tracking_point.text = 'Tracking Point'
tracking_control_mode_tracking_point.downAction = {"actionId" : 'tracking_control_action', "options" : {"tracking_control" : 'A2'}}
presetTemplate(presets, 0, 0, tracking_control_mode_tracking_point)

const tracking_control_mode_upper_body = new templateElements()
tracking_control_mode_upper_body.key = 'tracking_control_mode_upper_body'
tracking_control_mode_upper_body.category = 'Tracking'
tracking_control_mode_upper_body.text = 'Tracking Upper Body'
tracking_control_mode_upper_body.downAction = {"actionId" : 'tracking_control_action', "options" : {"tracking_control" : 'A1'}}
presetTemplate(presets, 0, 0, tracking_control_mode_upper_body)

const tracking_control_mode_zone = new templateElements()
tracking_control_mode_zone.key = 'tracking_control_mode_zone'
tracking_control_mode_zone.category = 'Tracking'
tracking_control_mode_zone.text = 'Tracking Zone'
tracking_control_mode_zone.downAction = {"actionId" : 'tracking_control_action', "options" : {"tracking_control" : 'A5'}}
presetTemplate(presets, 0, 0, tracking_control_mode_zone)

/*********************
 'White Balance'
*********************/

const wb_auto = new templateElements()
wb_auto.key = 'wb_auto'
wb_auto.category = 'White Balance'
wb_auto.text = 'WB Auto'
wb_auto.downAction = {"actionId" : 'wb_action', "options" : {"white_balance" : '3500'}}
presetTemplate(presets, 0, 0, wb_auto)

const wb_atw = new templateElements()
wb_atw.key = 'wb_atw'
wb_atw.category = 'White Balance'
wb_atw.text = 'WB ATW'
wb_atw.downAction = {"actionId" : 'wb_action', "options" : {"white_balance" : '3504'}}
presetTemplate(presets, 0, 0, wb_atw)

const wb_indoor = new templateElements()
wb_indoor.key = 'wb_indoor'
wb_indoor.category = 'White Balance'
wb_indoor.text = 'WB Indoor'
wb_indoor.downAction = {"actionId" : 'wb_action', "options" : {"white_balance" : '3501'}}
presetTemplate(presets, 0, 0, wb_indoor)

const wb_outdoor = new templateElements()
wb_outdoor.key = 'wb_outdoor'
wb_outdoor.category = 'White Balance'
wb_outdoor.text = 'WB Outdoor'
wb_outdoor.downAction = {"actionId" : 'wb_action', "options" : {"white_balance" : '3502'}}
presetTemplate(presets, 0, 0, wb_outdoor)

const wb_1_push_wb_mode = new templateElements()
wb_1_push_wb_mode.key = 'wb_1_push_wb_mode'
wb_1_push_wb_mode.category = 'White Balance'
wb_1_push_wb_mode.text = '1 push WB mode'
wb_1_push_wb_mode.downAction = {"actionId" : 'wb_action', "options" : {"white_balance" : '3503'}}
presetTemplate(presets, 0, 0, wb_1_push_wb_mode)

const wb_1_push_trigger = new templateElements()
wb_1_push_trigger.key = 'wb_1_push_trigger'
wb_1_push_trigger.category = 'White Balance'
wb_1_push_trigger.text = '1 push trigger'
wb_1_push_trigger.downAction = {"actionId" : 'wb_action', "options" : {"white_balance" : '1005'}}
presetTemplate(presets, 0, 0, wb_1_push_trigger)

self.setPresetDefinitions(presets)
}