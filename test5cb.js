async function test5cb(){
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //                                                                                                                                           //
   // Script Name: test5b.js                                                                                                                    //
   // Written By: John Rollins 06/10/2024                                                                                                       //
   // Script Purpose: This script will generate a random number, determines parity in a loop up to 10, then defines total parity difference.    //
   // Input files: tests database, Shell Arg                                                                                                    //
   // Output file: podbcp general date/timestamp                                                                                                //
   //                                                                                                                                           //                
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
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
    
   // Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}

async function generateCSV() {
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    const outputFilename = `PARITYCHECK_${currentDate}.csv`;

    let outputline = "Random number,Result\n";

    // Loop 10 times
    for (let i = 0; i < 10; i++) {
        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Check if the number is even or odd
        const result = checkEvenOrOdd(randomNumber);

        

        // Append data to CSV string in tabular format
        outputline += `${randomNumber},${result}\n`;
    }

    // Write data to CSV file
    try {
        fs.appendFileSync(outputFilename, outputline);
        console.log(`Results have been appended to ${outputFilename}`);
    } catch (err) {
        console.error("Error:", err);
    }
}

generateCSV();

}
test5cb()
