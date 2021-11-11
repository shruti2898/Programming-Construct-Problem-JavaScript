//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
console.log("Unit Conversion\n\nSelect an option:\n1. Feet to Inch \n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n");
const option = prompt("Option: ");
const number = prompt("Enter number: ");

switch (Number(option)){
    case 1:
        console.log(`${number} ft = ${number*12} inch`);
        break;
    case 2:
        console.log(`${number} ft = ${number*0.3048} meter`);
        break;
    case 3:
        console.log(`${number} inch = ${number*0.0833} ft`);
        break;
    case 4:
        console.log(`${number} meter = ${number*3.28084} ft`);
        break;
    default:
        console.log("\nInvalid Option");
        break;
}