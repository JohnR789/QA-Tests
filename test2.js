async function test2(){
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                             //
    // Script Name: test2                                                                         //
    // Written By: John Rollins 03/13/24                                                               //
    // Script Purpose:  This script will add a staff member, search and then verify added staff.                                                          //
    // Input files:                                                                                //
    // Output file:                                                                                //
    //                                                                                             //                
    ///////////////////////////////////////////////////////////////////////////////////////////////
       
    // Libraries 
    const dotenv = require("dotenv");
    pathx = process.env.HOME + '/Projects/BCP_Tests/.env';
    dotenv.config({ path: pathx });
    const {By,Key,Builder, until} = require("selenium-webdriver");
    const { get } = require("selenium-webdriver/http");
    const { Driver } = require("selenium-webdriver/chrome");require("chromedriver"); 
    var mysql = require('mysql');
    const util = require('util');
    const fs = require('fs');
    const fsPromises = fs.promises;
        
    // Variables

    var firstname = process.argv[2];
    var lastname = process.argv[3];
    //lastname = "higgins"; or All
 
    url ="https://paul.overnightbdc.com/";
    username = "";
    //
    //
    password = ";
    staff1 = "joe,fisher";
    staff2 = "boe,littleton";
    staff3 = "riley,higgins";
    worktitle = "QA Automation Engineer";
    phonenumber = "603-728-9098";
    emailaddress = "joe.fisher@bettercarpeople.com"; 
    engagementaddress = "jfischer@bettercarpeople.com"
    ranchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzqwertyudfrqawdfvcxzuhiewdhujeygkhbfpoljkcvnxcbyk"
    //Login to Browser  
       
 // wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.sleep(1200);
 
    //username field
    await driver.findElement(By.id("loginU2")).sendKeys(username);
    await driver.sleep(1200);
 
    //Password field
    await driver.findElement(By.id("loginP2")).sendKeys(password);
    await driver.sleep(1200);
 
    //hit check-in button
    await driver.findElement(By.id("loginS2")).click();
 
    //then click the staff button
    xp ='/html/body/div[2]/nav/ul/li[5]/a';
    await driver.sleep(1200);
    await driver.findElement(By.xpath(xp)).click();
    await driver.sleep(1200);

    
   strx = [staff1,staff2,staff3];
    for (var z = 0; z < strx.length;z++) {
    try {
        staffarray = strx[z].split(",");
        }
       catch(NoSuchElemntException)
       {
       break;
       }
    //click the add staff member button
        xp ='/html/body/div[2]/div[2]/div/div/section/div/div/div/div/div[2]/div[1]/a';
        await driver.sleep(1200);
        await driver.findElement(By.xpath(xp)).click();
        await driver.sleep(1200);
 
        //then enter all fields in an array form
       //then enter all fields
        //xpth doesnt quotes  xp= would have quotes

        await driver.sleep(1200);
        await driver.findElement(By.id("fname")).sendKeys(staffarray[0]);
        await driver.sleep(1200);

        //randomize last name
        ransel1 = Math.floor(Math.random() * 10);
        ransel2 = Math.floor(Math.random() * 10);
        ransel3 = Math.floor(Math.random() * 10);
        ransel4 = Math.floor(Math.random() * 10);
        ransel5 = Math.floor(Math.random() * 10);
        ransel6 = Math.floor(Math.random() * 10);
        rantxt = ranchar.substr(ransel1,1) + ranchar.substr(ransel2,1) + ranchar.substr(ransel3,1) + ranchar.substr(ransel4,1) + ranchar.substr(ransel5,1);
        staffarray [1] = staffarray[1] + rantxt;
        await driver.findElement(By.id("lname")).sendKeys(staffarray[1]);
        await driver.sleep(1200);
        await driver.findElement(By.id("title")).sendKeys(worktitle);
        await driver.sleep(1200);
        await driver.findElement(By.id("phone")).sendKeys(phonenumber);
        await driver.sleep(1200);
        await driver.findElement(By.id("email")).sendKeys(emailaddress);
        await driver.sleep(1200);
   

        //email settings tab for required field
        await driver.findElement(By.id("email-settings-tab")).click();
        await driver.sleep(1200);
        await driver.findElement(By.id("engagementEmail")).sendKeys(engagementaddress);
        await driver.sleep(1200);
 
        //then hit the save button
 
        xp ='/html/body/div[2]/div[2]/div/div/section/div/div/div/form/div[2]/div/button';
        await driver.findElement(By.xpath(xp)).click();
        await driver.sleep(1200);
 
        //find joe fisher in staff list to verify record added
        //put into a while loop
        //dynamic attribute
        x = 1;
        await driver.sleep(1200);
        while(true) {
            try {   
                xp = '/html/body/div[2]/div[2]/div/div/section/div/div/div/div/div[1]/div/table/tbody/tr[' + x + ']/td[2]';
                xp1 = '/html/body/div[2]/div[2]/div/div/section/div/div/div/div/div[1]/div/table/tbody/tr[' + x + ']/td[1]';
                await driver.sleep(1000);
                screenlastname = await driver.findElement(By.xpath(xp)).getText();
                screenfirstname = await driver.findElement(By.xpath(xp1)).getText();
                if(screenfirstname == staffarray[0] && screenlastname == staffarray[1]) {
                    console.log("Test passed with firstname, lastname", staffarray[0], staffarray[1]);
                    break;
                }   
                x++;
            }    
            catch(NoSuchElemntException) {
                console.log("Test Failed");
                break;
            }
        }
    }
    // Close/End Script

    await driver.quit();
    process.exit();
    }  
    test2()
