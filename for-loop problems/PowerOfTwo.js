//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")()
const n = prompt("Enter the value for N: ");
let baseNumber = 2;

for(let i =0 ; i<= n; i++){
    console.log(`2^${i}   : ${Math.pow(baseNumber, i)}`)
}
