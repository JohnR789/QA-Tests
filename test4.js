async function test4(){
    // Libraries
    pathx = process.env.HOME + '/Projects/BCP_Tests/'
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

   //firstname = "Asta";
    //lastname = "Rollins";
    //grade1 = 82;
    //grade2 = 68;
    //grade3 = 75;
    //lettergrade = "no grade"
    
    //O for output or A for Append


    //calculate grade add (g1 + g2 + g3)/3 
   
    gradeavg = (grade1 + grade2 + grade3) / 3;
    //gradeavg = 75;

  


 

    if (gradeavg >= 95) {
        lettergrade = "A"
    }
    if (gradeavg >= 90 && gradeavg < 95) {
        lettergrade = "A-"
    }
    if (gradeavg >= 85 && gradeavg < 90) {
        lettergrade = "B+"
    }
    if (gradeavg >= 80 && gradeavg < 85) {
        lettergrade = "B-"
    }
    if (gradeavg >= 75 && gradeavg < 80) {
        lettergrade = "C+"
    }
    if (gradeavg >= 70 && gradeavg < 75) {
        lettergrade = "C-"
    }
    if (gradeavg >= 65 && gradeavg < 70) {
        lettergrade = "D+"
    }
    if (gradeavg >= 60 && gradeavg < 65) {
        lettergrade = "D-"
    }
    if (gradeavg <= 60) {
        lettergrade = "F"
    }

    outputline = (firstname + " " + lastname + " " + gradeavg + " " + lettergrade);
    console.log(outputline);


     
}
    test4()