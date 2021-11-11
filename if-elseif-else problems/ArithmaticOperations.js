//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
let a = prompt("Value of a: ");
let b = prompt("Value of b: ");
let c = prompt("Value of c: ");

let operation1 = eval(`${a} + ${b} * ${c}`);
let operation2 = eval(`${a}  % ${b}  + ${c}`);
let operation3 = eval(`${c} + ${a}  / ${b} `);
let operation4 = eval(`${a}  * ${b}  + ${c}`);

let max = operation1;
if(operation2>max && operation2>operation3 && operation2>operation4){
    max = operation2;
}
else if(operation3>max && operation3>operation2 && operation3>operation4){
    max = operation3;
}
else if(operation4>max && operation4>operation2 && operation4>operation3){
    max = operation4;
}
else{
    max = operation1;
}
console.log(`Maximum is : ${max}`);

let min = operation1;
if(min>operation2 && operation3>operation2 && operation4>operation2){
    min = operation2;
}
else if(min>operation3 && operation2>operation3 && operation4>operation3){
    min = operation3;
}
else if(min>operation4 && operation2>operation4 && operation3>operation4){
    min = operation4;
}
else{
    min = operation1;
}
console.log(`Minimum is : ${min}`);