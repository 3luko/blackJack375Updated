/**
 * Format currency
 */
export function formatCurrency(amount) {
    return amount.toString();
}

/**
 * Update betting display
 */
export function updateBettingDisplay(balanceEl, betEl, resultEl, balance, bet, result) {
    balanceEl.textContent = formatCurrency(balance);
    betEl.textContent = formatCurrency(bet);
    resultEl.textContent = result;
}

/**
 * Update win/loss display
 */
export function updateWinLossDisplay(winEl, lossEl, wins, losses) {
    winEl.textContent = wins;
    lossEl.textContent = losses;
}

/**
 * Update history UI
 */
export function updateHistoryList(historyList, history) {
    if (!historyList) return;

    historyList.innerHTML = "";

    history.slice(-3).reverse().forEach(entry => {
        const item = document.createElement("li");
        item.textContent = `${entry.result.toUpperCase()} | Bet: $${entry.bet} | Total: $${entry.total}`;
        historyList.appendChild(item);
    });
}