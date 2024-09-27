// blackjack.js
let cardOne = Math.floor(Math.random()*13)+1;
let cardTwo = Math.floor(Math.random()*13)+1;
let cardThree = Math.floor(Math.random()*13)+1;
let cardFour = Math.floor(Math.random()*13)+1;
let cardFive = Math.floor(Math.random()*13)+1;

let playercard = [Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1];
let dealercard = [Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1,Math.floor(Math.random()*13)+1];
var playersum=0;
var dealersum=0;
var playerwin = false;
var dealerwin = false;
var draw = false;


for(let i=0; i<7; i++){
    if(playersum<21){ //21점이하면 플레이어 계속 카드뽑기
        playersum=playersum+playercard[i];
        
    }

    if(dealersum<17){ //17점이하면 딜러 계속 카드뽑기
        dealersum=dealersum+dealercard[i];
    }


}

if(playersum==21){ //player가 21점일시 승리
    playerwin = true;
} 

if(playersum>21 && dealersum<22){
    dealerwin=true;
    
}

else if(dealersum>21 && playersum <22){
    playerwin=true;
    
}
else if(dealersum>21 && playersum>21){
    draw=true;
}


if(playersum == dealersum){
    draw=true;
}



if(draw){
    console.log("draw");
    console.log("플레이어 카드합: " + playersum);
    console.log("딜러 카드합:  " + dealersum);
    playerwin=false;
    dealerwin=false;
}


if(playerwin){
    console.log("player win");
    console.log("플레이어 카드합: " + playersum);
    console.log("딜러 카드합:  " + dealersum);

}
else if(dealerwin){
    console.log("dealer win");
    console.log("플레이어 카드합: " + playersum);
    console.log("딜러 카드합:  " + dealersum);
}





/*
let sum = cardOne + cardTwo;


let cardOneBank = Math.floor(Math.random()*13)+1;
let cardTwoBank = Math.floor(Math.random()*13)+1;
let cardThreeBank = 6;
let cardFourBank = 4;

sum += cardThree;

console.log(cardOne);



if (sum > 21) {
console.log('You lost');
}
console.log(`You have ${sum} points`);
let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
console.log('You win');
} 

else {
console.log('Bank wins');
}
*/