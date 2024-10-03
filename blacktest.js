function getRandomCard() {
    const card = Math.floor(Math.random() * 13) + 1;
    return card > 10 ? 10 : card; // J, Q, K는 10으로 처리
}

function calculateSum(cards) {
    let sum = cards.reduce((total, card) => total + card, 0);
    return sum;
}

let playerCards = [getRandomCard(), getRandomCard()];
let dealerCards = [getRandomCard(), getRandomCard()];

let playerSum = calculateSum(playerCards);
let dealerSum = calculateSum(dealerCards);

let playerWin = false;
let dealerWin = false;
let draw = false;

// 플레이어의 카드 합이 21보다 작을 경우 추가 카드 뽑기
while (playerSum < 21) {
    let drawCard = confirm(`현재 카드 합은 ${playerSum}입니다. 추가 카드를 뽑겠습니까?`);
    
    if (drawCard) {
        playerCards.push(getRandomCard());
        playerSum = calculateSum(playerCards);
    } else {
        break; // 추가 카드를 뽑지 않으면 종료
    }
}

// 딜러의 카드 합이 17 이상이 될 때까지 카드 뽑기
while (dealerSum < 17) {
    dealerCards.push(getRandomCard());
    dealerSum = calculateSum(dealerCards);
}

// 승패 결정
if (playerSum === 21) {
    playerWin = true;
} else if (playerSum > 21) {
    dealerWin = true;
} else if (dealerSum > 21 || playerSum > dealerSum) {
    playerWin = true;
} else if (dealerSum > playerSum) {
    dealerWin = true;
} else if (dealerSum === playerSum) {
    draw = true;
}

// 결과 출력
if (draw) {
    console.log("Draw");
} else if (playerWin) {
    console.log("Player wins");
} else if (dealerWin) {
    console.log("Dealer wins");
}

console.log("플레이어 카드: " + playerCards.join(', '));
console.log("플레이어 카드합: " + playerSum);
console.log("딜러 카드: " + dealerCards.join(', '));
console.log("딜러 카드합: " + dealerSum);