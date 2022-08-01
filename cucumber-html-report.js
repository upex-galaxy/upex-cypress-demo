const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "reports", // ** Path of .json file
    reportPath: "./reports",
    
})