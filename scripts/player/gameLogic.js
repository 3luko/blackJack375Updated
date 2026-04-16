
export function calculateScore(cards) {
  return cards.reduce((total, card) => total + card, 0);
}


export function checkWinCondition(score) {
  if (score === 21) return "win";
  if (score > 21) return "lose";
  return "continue";
}


export function resetGame() {
  return {
    cards: [],
    score: 0,
    isAlive: true
  };
}