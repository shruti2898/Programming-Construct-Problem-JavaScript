//Reading input from console using prompt-sync NodeJS Module
const input = require("prompt-sync")();

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

let number = parseInt(input("Enter Number:  "));
checkPalindrome(number);