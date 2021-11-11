//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
const number = prompt("Enter number: ");

let fact = 1;

for(let i = 1; i<=number;i++){
    fact = fact * i;
}
console.log(`Factorial of ${number} is ${fact}`);
