async function test5c(){
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                           //
// Script Name: test5c.js                                                                                                                    //
// Written By: John Rollins 06/10/2024                                                                                                       //
// Script Purpose: This script will generate a random number, determines parity in a loop up to 10, then defines total parity difference.    //
// Input files: tests database, Shell Arg                                                                                                    //
// Output file: podbcp general date/timestamp                                                                                                //
//                                                                                                                                           //                
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
    // init Variables and log libs
    pathx = process.env.HOME + '/Projects/BCP_Tests/';
    dotenv.config({ path: pathx });
    const {By,Key,Builder, until} = require("selenium-webdriver");
    const { get } = require("selenium-webdriver/http");
    const { Driver } = require("selenium-webdriver/chrome");require("chromedriver");
    var mysql = require('mysql');
    const util = require('util');
    const fs = require('fs');
    const fsPromises = fs.promises;
          
// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}

oddCount = 0;
evenCount = 0;

outputline = "Random number                        Result" + "\n"; 
            
// Loop 10 times
for (i = 0; i < 10; i++) {
    // Generate a random number between 1 and 100
     randomNumber = Math.floor(Math.random() * 100) + 1;

    // Check if the number is even or odd
     result = checkEvenOrOdd(randomNumber);

     console.log("Random number " + (i + 1) + ": " + randomNumber + " is " + result + ".");
    
    // Parity count
    if (result === "even") {
        evenCount++;
    } else {
        oddCount++;
    }
pad = "                                    ";
// Append data 
outputline += randomNumber + pad + result + "\n";
}

// Display total counts
console.log("Total even numbers: " + evenCount);
console.log("Total odd numbers: " + oddCount);

// Append total counts 
outputline += "\nTotal even numbers:" + evenCount + "\n";
outputline += "Total odd numbers:" + oddCount + "\n" + "\n";

// Append data again
var logfile = process.env.GRADEREPORT2 + '.csv';
fs.appendFileSync(logfile, outputline, (err) => {
    if (err) throw err;
    console.log('Results have been saved to ' + logfile);
    });


}
   test5c()
