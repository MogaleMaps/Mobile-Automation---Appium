 # Author 
 
 - Johnson Mogale Mapaela
 - I have attached a video of the tests executing in the the direcorty : Global Kinetic Appium\videoexecutingtest\2021-07-13_13-13-19.mp4
 
 # Pre-Requisites
	- Android SDK (Android Studio with SDK).
	- JDK (Java Development Kit).
	- Appium Client for Windows.
	- IDE and testing framework of choice. In my case , I have used node.js and Mocha test framework.
	- Download node_modules for my solution at : https://drive.google.com/drive/folders/1xe3V-B8fdSJsmBuMrjz3FtNSrEhHcXMv?usp=sharing
 # Setup and Installation.

	- Download and install Android SDK. After installation, you will need to set the “ANDROID_HOME” in the environment variables
	- Download and install JAVA. After installation, you will need to set the “JAVA_HOME” in the environment variables
	- Run Appium and click "start server". 
 # Running_Appium
 
	Note: So that we can install the desired application, fill in the desired capabilities for testing reasons.

	- platformName – "Android"
	- platformVersion – "11"
	- deviceName – "Pixel_3a_API_30_x86" Or your device name
	- app – "Path to APK"
	- Click Start Session and you should see the app and be able to inspect it . 
	
	N.B Used Appium to locate webelements as I struggled when using the "androiduiautomator" tool. (xml error was being thrown).

 # Dependencies required for running Mocha

I used webdriverio testing utility as it improves interaction with the mobile web, native and hybrid applications

	- In command prompt/Terminal, please run the following:
		* npm install appium-uiautomator2-driver
		* npm install mocha
		* npm install chai
		* npm install chai-as-promised
		* npm install wd
		* npm install wdio-appium-service 
		* npm install webdriverio@4.8.0 --save --force
		* npm install wdio-mocha-framework
		
  # Running the Test

Command line/Terminal, Please enter: 
	- npx mocha .\mytest.js --timeout 5000
	
   # Closing
	- Enjoyed working with Appium
	- Keen on learning ways to automate mobile through other frameworks
	- Keen on learning better ways of assersion and binary storage(s).
	- Please provide feedback (positive and negative) - I use this for self-documentation and improvement