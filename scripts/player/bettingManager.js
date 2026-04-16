let playerMoney = 1000;
let currentBet = 0;
let gameHistory = [];
let lastResult = "Place a bet to deal.";
let winCount = 0;
let lossCount = 0;

/**
 * Initialize player balance
 */
export function setInitialBalance(amount) {
    playerMoney = amount;
}

/**
 * Place a bet
 */
export function placeBet(amount) {
    if (amount <= 0 || amount > playerMoney) return false;

    currentBet = amount;
    playerMoney -= amount;
    lastResult = `Bet placed: $${amount}`;
    return true;
}

/**
 * Finalize round results
 */
export function finalizeBet(result) {
    const settledBet = currentBet;

    if (result === "win") {
        playerMoney += settledBet * 2;
        winCount++;
        lastResult = `Win! Paid $${settledBet * 2}.`;
    } else if (result === "tie") {
        playerMoney += settledBet;
        lastResult = `Tie. Returned $${settledBet}.`;
    } else {
        lossCount++;
        lastResult = `Loss. Lost $${settledBet}.`;
    }

    gameHistory.push({
        result,
        bet: settledBet,
        total: playerMoney
    });

    currentBet = 0;
}

/**
 * Getters
 */
export function getMoney() { return playerMoney; }
export function getBet() { return currentBet; }
export function getHistory() { return gameHistory; }
export function getLastResult() { return lastResult; }
export function getWinCount() { return winCount; }
export function getLossCount() { return lossCount; }