
export function updateScoreDisplay(score) {
  const scoreEl = document.getElementById("score");
  if (scoreEl) {
    scoreEl.textContent = `Score: ${score}`;
  }
}


export function renderCards(cards) {
  const cardsEl = document.getElementById("cards");
  if (cardsEl) {
    cardsEl.textContent = "Cards: " + cards.join(" ");
  }
}


export function showGameResult(result) {
  const messageEl = document.getElementById("message");

  if (!messageEl) return;

  if (result === "win") {
    messageEl.textContent = "You win!";
  } else if (result === "lose") {
    messageEl.textContent = "You lose!";
  } else {
    messageEl.textContent = "Keep playing...";
  }
}