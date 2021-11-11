//Reading input from console using prompt-sync NodeJS Module
const prompt = require("prompt-sync")();
let day = prompt("Enter day: ");
let month = prompt("Enter month: ");

if((month=="march" && day>=20 && day<=31) ||(month=="april" && day>=1 && day<=30) || (month=="may" && day>=1 && day<=31)||(month=="june" && day>=1 && day<=20))
{
    console.log("True");
}
else
{
    console.log("False");
}