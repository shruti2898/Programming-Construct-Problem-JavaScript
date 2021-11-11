//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();

function checkPrimeNumber(number){
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
        console.log(`${number} is not prime number`);
    }
    else{
        console.log(`${number} is a prime number`);
        checkPalindrome(number);
    }
}

function checkPalindrome(number){
    let reversedNumber = 0;
    let temp = number;
    while(temp>0){
        let digit = temp % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        temp =  Math.floor(temp/10);
    }
    if(number == reversedNumber){
        console.log(`${number} is a palindrome number`);
    }
    else{
        console.log(`${number} is not a palindrome number`);
    }
}


let number = prompt("Enter number: ");

checkPrimeNumber(number);
