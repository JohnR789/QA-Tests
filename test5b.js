async function test5b(){
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //                                                                                                                                                                         //
   // Script Name: test5b.js                                                                                                                                                  //
   // Written By: John Rollins 06/10/2024                                                                                                                                     //
   // Script Purpose: This script will generate a random number, determines parity in a loop up to 10, then defines total parity difference, then writes to an outputfile.    //
   // Input files: tests database, Shell Arg                                                                                                                                  //
   // Output file: podbcp general date/timestamp                                                                                                                              //
   //                                                                                                                                                                         //                
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    // init Variables and log libs
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

//var randomNumber = (process.argv[2]);
        
// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}
// Write data to CSV file
var logfile = process.env.PARITYCHECK + '.csv';
    outputline = "Random number                        Result" + "\n";
        fs.writeFile(logfile, outputline, (err) => {
         if (err) throw err;
        console.log('Results have been saved to ' + logfile);
         });
         oddCount = 0;
         evenCount = 0;
    // Append total counts to CSV string in tabular format
    outputline += "\nTotal even numbers:" + evenCount + "\n";
    outputline += "Total odd numbers:" + oddCount;   

 oddCount = 0;
 evenCount = 0;

// Loop 10 times
for (i = 0; i < 10; i++) {
// Generate a random number between 1 and 100
     randomNumber = Math.floor(Math.random() * 100) + 1;

// Check if the number is even or odd
     result = checkEvenOrOdd(randomNumber);

    console.log("Random number " + (i + 1) + ": " + randomNumber + " is " + result + ".");
    
// parity count
    if (result === "even") {
        evenCount++;
    } else {
        oddCount++;
    }
}
// Display total parity counts
console.log("Total even numbers: " + evenCount);
console.log("Total odd numbers: " + oddCount);


}
   test5b()
