async function onbdcpodiumgenbcp(){

      // init Variables and log libs
      pathx = process.env.HOME + '/Projects/BCP_Tests/';
      dotenv.config({ path: pathx });
  
      const {By,Key,Builder, until} = require("selenium-webdriver");
      const { get } = require("selenium-webdriver/http");
      require("chromedriver");
      var mysql = require('mysql');
      const util = require('util');
      const fs = require('fs');
      const fsPromises = fs.promises;

// Variables
    x = "n"
// Generate a random number between 1 and 100

    ransel1 = Math.floor(Math.random() * 100) / 2;
    x = ranchar.substr(ransel1);

//if statements

    if ("n" == x) {
        x = "even"
    }
    if ("n"!= x) {
        x = "odd"
    }

    
}
