let count = 0;
const button = document.querySelector(".flip-button");
const card = document.querySelector(".card");

button.addEventListener("click", () => {
  count++;
  card.classList.toggle("is-flipped");
  count % 2 === 0
    ? (button.textContent = "카드 뒤집기")
    : (button.textContent = "카드 뒤집기 완료");
});
