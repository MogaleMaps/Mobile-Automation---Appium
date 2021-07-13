/*

Author : Johnson Mogale Mapaela
Language: javascript and Mocha Framework

Lesson to be learnt after this activity

Notes: - I did basic page navigate and clicks of elements that are displayed on the audio player.
       - I could assert using "expect" in order to make sure correct results are displayed. 
       - Increase page waits after clicking the play button. 
*/ 



var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./helpers/desiredCapabilities').options;

var client = webdriverio.remote(config);

describe('Universal Music Player  - Testing', function () {

    before(function () {
        this.timeout(50000);
        return client.init();

    });

    
    describe("Play Music by Genre", function () {
        this.timeout(15000);
     
        it("Should Click on Genre", function(){
            return client.click('android=new UiSelector().resourceId("com.instantappsample.uamp:id/title")');
           

        });
        it("Should Click on Rock", function(){
            return client.click('android=new UiSelector().text("Rock")');
                    
        });
        it("Should play song: 'Home' on Rock", function(){
            return client.click('android=new UiSelector().text("Home")');
        
        });
         
       it("Should pause the song", function(){
       
            return client.click('android=new UiSelector().resourceId("com.instantappsample.uamp:id/play_pause")');

        });
      it("Should maximise song screen", function(){
            return client.click('android=new UiSelector().resourceId("com.instantappsample.uamp:id/content")');
        
        });
    

        });
        after(function() {
          return client.end();
        });
    });