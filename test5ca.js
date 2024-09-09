async function test5ca(){
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //                                                                                                                                           //
   // Script Name: test5ca.js                                                                                                                    //
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
    const checkEvenOrOdd = number => (number % 2 === 0 ? "even" : "odd");
    
    // Function to generate a random number between 1 and 100
    const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    
    // Function to append data to CSV file
    const appendDataToCSV = (filename, data) => {
        fs.appendFileSync(filename, data, (err) => {
            if (err) console.error("Error:", err);
        });
    };
    
    // Function to generate CSV data
    const generateCSVData = () => {
        let outputline = "Random number,Result\n";
        let evenCount = 0;
        let oddCount = 0;
    
        for (let i = 0; i < 10; i++) {
            const randomNumber = generateRandomNumber();
            const result = checkEvenOrOdd(randomNumber);
            outputline += `${randomNumber},${result}\n`;
    
            result === "even" ? evenCount++ : oddCount++;
        }
    
        outputline += `\nTotal even numbers,${evenCount}\nTotal odd numbers,${oddCount}\n`;
        return outputline;
    };
    
    // Main function
    const generateCSV = () => {
        const filename = "PARITYCHECK.csv";
        const csvData = generateCSVData();
        
        if (!fs.existsSync(filename)) {
            // If file does not exist, create it and write header
            fs.writeFileSync(filename, "Random number,Result\n", (err) => {
                if (err) console.error("Error:", err);
            });
        }
    
        // Append data to CSV file
        appendDataToCSV(filename, csvData);
        console.log(`Results have been appended to ${filename}`);
    };
    
    // Call the main function
    generateCSV();

      



      
}
   test5ca()