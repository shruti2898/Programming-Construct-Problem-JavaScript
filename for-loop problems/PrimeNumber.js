//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
const number = prompt("Enter number: ");

let flag = true;
for(let i =2;i<=number/2;i++)
{
    if(number%i == 0 && number !=1)
    {
     flag = false;
     break;
    }
}
if(!flag || number ==1){
    console.log(`${number} is not a prime number.`);
}
else{
    console.log(`${number} is a prime number.`);
}