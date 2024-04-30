const button = document.querySelector(".voting-result-button");
const results = document.querySelectorAll(".voting-result");

button.addEventListener("click", () => {
  results.forEach((result) => {
    if (result.hasAttribute("hidden")) {
      result.removeAttribute("hidden");
    } else {
      result.setAttribute("hidden", "");
    }
  });
});
