//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
console.log(`Temperature Conversion\n\nSelect an option: \n1. Celcius to Farenheit\n2. Farenheit to Celcius\n`);
const option = prompt("Option: ");

function celciusToFarenheit(temp){
    if(temp>=0 && temp<=100){
        console.log(`Temp in Farenheit is ${(temp * 9/5) + 32}`);
    }
    else{
        console.log(`Temperature should be within Freezing Point(0C) and Boiling Point(100C) of water.`);
    }
}

function farenheitToCelcius(temp){
    if(temp>=32 && temp<=212){
        console.log(`Temp in Farenheit is ${(temp -32) * 5/9}`);
    }
    else{
        console.log(`Temperature should be within Freezing Point(32F) and Boiling Point(212F) of water.`);
    }
}

switch (Number(option)) {
    case 1:
        let degC = prompt("Temp in Celcius: ");
        celciusToFarenheit(degC);
        break;
    case 2:
        let degF = prompt("Temp in Farenheit: ");
        farenheitToCelcius(degF);
        break;
    default:
        console.log("\nInvalid Option");
        break;
}