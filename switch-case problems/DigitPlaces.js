let x = Math.floor(Math.random() * 10);
let number = Math.pow(10, x);
console.log(number);
switch (number){
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Hundreds of Thousands");
        break;
    case 1000000:
        console.log("Million");
        break;
    case 10000000:
        console.log("Ten Million");
        break;
    case 100000000:
        console.log("Hundreds of Millions");
        break;
    default:
        console.log("Billion");
        break;
}