const diceBtn = document.querySelector(".dice-container");
const adviceNumber = document.querySelector(".advice__number");
const quote = document.querySelector(".quote");

diceBtn.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => changeInfo(data));

  function changeInfo(info) {
    adviceNumber.innerText = "Advice " + "#" + info.slip.id;
    quote.innerText = info.slip.advice;
  }
});
