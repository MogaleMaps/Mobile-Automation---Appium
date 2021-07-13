exports.options = {
    desiredCapabilities :{
        platformName: "android", //Operating System
        plantformVersion:"11", // Version
        appPackage:"com.instantappsample.uamp", //run aapt dump badging path/to/your.apk on Command Prompt to find it labled under package
        appActivity:"com.example.android.uamp.ui.MusicPlayerActivity",// labled under launchable -activity
        automationName:"uiautomator2",
        avdReadyTimeout:"30000",
        deviceName:"Pixel_3a_API_30_x86"

    },
    host:"localhost",
    port:4723
};