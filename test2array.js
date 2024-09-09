async function test2b(){
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // //
    // Script Name: test2 //
    // Written By: John Rollins 03/13/24 //
    // Script Purpose: This script will add a staff member, search and then verify added staff. //
    // Input files: //
    // Output file: //
    // //
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
   
    
    var lastname = process.argv[3];
    //lastname = "higgins";
    //lastname = "All";
    console.log (firstname, lastname)
    url ="https://paul.overnightbdc.com/";
    username = "";
    //
    //
    password = "";
    staff1 = "joe,fisher,QA Automation Engineer,603-728-9098,joe.fisher@bettercarpeople.com,jfischer@bcp.com";
    staff2 = "boe,littleton,QA production manager,860-564-9075,boe.littleton@bettercarpeople.com,bittleton@bcp.com";
    staff3 = "riley,higgins,HR manager,640-845-2534,riley.higgins@bettercarpeople.com,rhiggin@bcp.com";
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
    
    //array
    strx = [staff1,staff2,staff3];
    
    // if all or person
    if (lastname == "All") {
    b = 0;
    };
 if (lastname != "All") {
        for (var f = 0; f < strx.length;f++) {
        staffarray = strx[f].split(",");
        if(lastname == staffarray[1]) {
        b = f;
        }
    }
};
    
    for (var z = b; z < strx.length;z++) {
        try {
        staffarray = strx[z].split(",");
//then enter all fields
//click the add staff member button
        xp ='/html/body/div[2]/div[2]/div/div/section/div/div/div/div/div[2]/div[1]/a';
        await driver.sleep(800);
        await driver.findElement(By.xpath(xp)).click();
        await driver.sleep(800);
        await driver.findElement(By.id("fname")).sendKeys(staffarray[0]);
        await driver.sleep(800);
        ransel1 = Math.floor(Math.random() * 10);
        ransel2 = Math.floor(Math.random() * 10);
        ransel3 = Math.floor(Math.random() * 10);
        ransel4 = Math.floor(Math.random() * 10);
        ransel5 = Math.floor(Math.random() * 10);
        ransel6 = Math.floor(Math.random() * 10);
        rantxt = ranchar.substr(ransel1,1) + ranchar.substr(ransel2,1) + ranchar.substr(ransel3,1) + ranchar.substr(ransel4,1) + ranchar.substr(ransel5,1);
        staffarray [1] = staffarray[1] + rantxt;
        await driver.findElement(By.id("lname")).sendKeys(staffarray[1]);
        await driver.sleep(800);
        await driver.findElement(By.id("title")).sendKeys(staffarray[2]);
        await driver.sleep(800);
        await driver.findElement(By.id("phone")).sendKeys(staffarray[3]);
        await driver.sleep(800);
        await driver.findElement(By.id("email")).sendKeys(staffarray[4]);
        await driver.sleep(800);
        await driver.findElement(By.id("email-settings-tab")).click();
        await driver.sleep(800);
        await driver.findElement(By.id("engagementEmail")).sendKeys(staffarray[5]);
        await driver.sleep(800);
//then hit the save button
        xp ='/html/body/div[2]/div[2]/div/div/section/div/div/div/form/div[2]/div/button';
        await driver.findElement(By.xpath(xp)).click();
        await driver.sleep(500);
        }
        catch(NoSuchElemntException){
        console.log("Test Failed at array");
        }
    {
    
}
//find joe fisher in staff list to verify record added
//put into a while loop
    x = 1;
    await driver.sleep(300);
    while(true) {
        try {
            xp = '/html/body/div[2]/div[2]/div/div/section/div/div/div/div/div[1]/div/table/tbody/tr[' + x + ']/td[2]';
            xp1 = '/html/body/div[2]/div[2]/div/div/section/div/div/div/div/div[1]/div/table/tbody/tr[' + x + ']/td[1]';
            await driver.sleep(300);
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
                if (lastname != "All") {
                z = strx.length;
        }
    }
    // Close/End Script
    await driver.quit();
    process.exit();
 }
    test2b()
