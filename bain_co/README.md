# Bain & Co - online problem solving assessment

## steps to run the project
### `clone the repo`
### `go to the folder where package.json is and run npm install`

## Available Scripts
command to run the app
### `npm run app`

command test with coverage
### `npm run testc`

command test without coverage
### `npm run test`



## code structure
### entry point app.js in root dir
    holds main calling routine, entry point to app
### utils folder has utilty function files like to do calculation and print results
    calculation.js - contains logic for calculating BMI, getting risk and category associated
    consts.js - contains enums for risks and categories
    print.js - logic to display records to cosole

### data folder
    bmi_cat.js - holds list of categories
    bmi_data.js - holds patienst data like gender, height, weight
    bmi_health_risks.js - holds list of health risks
    bmi_range.js - holds bmi range for checking against

### coverage folder
    holds the result for test coverage

### app folder
    update.js - holds logic for manipulating actual data with 3 needed columns and calculation calls to get those results 
