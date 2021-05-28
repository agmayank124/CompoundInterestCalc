const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const time = document.getElementById("time");
const btn = document.getElementById("btn");
const answer = document.getElementById("answer");

const invalid = () => {
  answer.style.color = "#fff";
  answer.style.fontSize = "4rem";
  answer.innerText = "😓 Invalid Input! 😓";
  alert("Fill all the fields");
};
const calculate = () => {
  if (amount.value != "" && rate.value != "" && time.value != "") {
    let total = amount.value * Math.pow(1 + rate.value / 100, time.value);
    answer.innerHTML = `AMOUNT : &#8377; ${total.toFixed(2)}`;
    answer.style.color = "#4bcffa";
    answer.style.fontSize = "8rem";
  } else {
    invalid();
  }
};
btn.addEventListener("click", calculate);
