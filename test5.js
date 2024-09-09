async function test5(){

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

  
// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "even" : "odd";
}
// Loop 10 times
for (i = 0; i < 10; i++) {
// Generate a random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;

// Check if the number is even or odd
     result = checkEvenOrOdd(randomNumber);

    console.log("Random number " + (i + 1) + ": " + randomNumber + " is " + result + ".");
}



}
    test5()
    