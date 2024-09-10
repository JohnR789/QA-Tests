async function test4c(){
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                                       //
    // Script Name: test4c                                                                                   //
    // Written By: John Rollins 03/13/24                                                                     //
    // Script Purpose: This script will generate random grades, then write a grade report to an output file. //
    // Input files:                                                                                          //
    // Output file:                                                                                          //
    //                                                                                                       //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Libraries
    pathx = process.env.HOME + '/Projects/BCP_Tests/';
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
    var grade1 = parseInt(process.argv[4]);
    var grade2 = parseInt(process.argv[5]);
    var grade3 = parseInt(process.argv[6]);
    var fileIO = process.argv[7];
console.log(grade1);
console.log(grade2);
console.log(grade3);

    //local variables
 
    firstname = "Asta";
    lastname = "Rollins";
    grade1 = 72;
    grade2 = 97;
    grade3 = 100;
    lettergrade = "no grade"
    
    //O for output or A for Append
    
    // output log results file

    var dt = new Date()
      var dateString =
          dt.getFullYear() + "-" +
          ("0" + (dt.getMonth()+1)).slice(-2) + "-" +
          ("0" +  dt.getDate()).slice(-2) + " " +
          ("0" +  dt.getHours()).slice(-2) + ":" +
          ("0" +  dt.getMinutes()).slice(-2) + ":" +
          ("0" +  dt.getSeconds()).slice(-2);

          var logfile =  process.env.GRADEREPORT2 + '.csv';

    console.log(logfile);
    
          if(fileIO == "O") {
            PriorFileOut = logfile;
            outputline = "====================================================================================================================================" + "\n";
            fs.writeFileSync(logfile,outputline, function(err) {
                if(err) return console.error(err);
                });
            outputline = "                                                  Grade Report                                                                      " + "\n";
            fs.appendFileSync(logfile, outputline, function(err) {
                if(err) return console.error(err);
                });
            outputline = "====================================================================================================================================" + "\n";
            fs.appendFileSync(logfile, outputline, function(err) {
                if(err) return console.error(err);
                });
            outputline = " Student                                            Average                                                                  Grade  " + "\n";
            fs.appendFileSync(logfile, outputline, function(err) {
                if(err) return console.error(err);
                });
            outputline = "====================================================================================================================================" + "\n";
            fs.appendFileSync(logfile, outputline, function(err) {
                if(err) return console.error(err);
                });



        }

        
    //calculate grade add (g1 + g2 + g3)/3 
   
    gradeavg = (grade1 + grade2 + grade3) / 3;


    //gradeavg = 75;

  console.log("before while loop");
  console.log("before gradepoint avg");

    while(true) {

    if (gradeavg >= 95) {
        lettergrade = "A"
        break;
    }
    if (gradeavg >= 90 && gradeavg < 95) {
        lettergrade = "A-"
        break;
    }
    if (gradeavg >= 85 && gradeavg < 90) {
        lettergrade = "B+"
        break;
    }
    if (gradeavg >= 80 && gradeavg < 85) {
        lettergrade = "B-"
        break;
    }
    if (gradeavg >= 75 && gradeavg < 80) {
        lettergrade = "C+"
        break;
    }
    if (gradeavg >= 70 && gradeavg < 75) {
        lettergrade = "C-"
        break;
    }
    if (gradeavg >= 65 && gradeavg < 70) {
        lettergrade = "D+"
        break;
    }
    if (gradeavg >= 60 && gradeavg < 65) {
        lettergrade = "D-"
        break;
    }
    if (gradeavg <= 60) {
        lettergrade = "F"
        break;
    }
}

     gradeavgrnd = Math.round(gradeavg*100)/100;

    outputline = " " + firstname + " " + lastname + "                                        " + gradeavgrnd + "                                                                      " + lettergrade + "\n";
    console.log(outputline);
    fs.appendFileSync(logfile, outputline, function(err) {
    if(err) return console.error(err);
    });
    
 

    
  
}
    test4c()