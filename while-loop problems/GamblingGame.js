let totalMoney = 100;
let betWinning = 0;
let betLosing = 0;
let playedTimes = 0;
while(totalMoney>0 && totalMoney<200){
    let gamePlay = Math.floor(Math.random() * 10) % 2;
    
    if(gamePlay == 1){
        totalMoney++;
        betWinning++;
    }
    else{
        totalMoney--;
        betLosing++;
    }
    playedTimes++;
}

if(totalMoney==0){
    console.log(`You lost the game by losing bet ${betLosing} out of ${playedTimes} times. Current balance is ${totalMoney}`);
}
else{
    console.log(`You won the game by winnig bet ${betWinning} out of ${playedTimes}  times. Current balance is ${totalMoney}`);
}