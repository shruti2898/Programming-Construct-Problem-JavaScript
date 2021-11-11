let countHeads =0;
let countTails =0;

while(countHeads<11 || countTails<11){
    let value = Math.random();
    if (value < 0.5){
        countHeads++;
    } 
    else{
        countTails++;
    } 

    if(countHeads == 11 || countTails ==11){
       break;
    }
}
console.log(`Total Tail Wins: ${countTails} \nTotal Head Wins:  ${countHeads}`);