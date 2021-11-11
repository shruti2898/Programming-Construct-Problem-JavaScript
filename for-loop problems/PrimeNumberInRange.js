//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
const low = prompt("Enter lower limit of range: ");
const high = prompt("Enter higher limit of range: ");

console.log(`\nPrime numbers from ${low} to ${high} are: `);
for(let i = low; i<=high;i++){
    let flag = true;
    for(let j =2;j<=i/2;j++)
    {
        if(i%j == 0 && i !=1)
        {
         flag = false;
         break;
        }
    }
    if(flag && i !=1){
        console.log(`${i}`);
    }
}
