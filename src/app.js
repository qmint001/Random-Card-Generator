/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function changeCard() {
  const suites = ["♦", "♥", "♠", "♣"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  //center.getElementsByClassName.color = "red";
  const randomCardIndex = Math.floor(Math.random() * cards.length);
  const randomCardValue = cards[randomCardIndex];

  const center = document.querySelector("#number");
  center.innerText = randomCardValue;

  const randomSuiteIndex = Math.floor(Math.random() * suites.length);
  const randomSuiteValue = suites[randomSuiteIndex];

  const topSuite = document.querySelector("#topsuite");
  const bottomSuite = document.querySelector("#bottomsuite");

  topSuite.innerText = randomSuiteValue;
  bottomSuite.innerText = randomSuiteValue;
  if (randomSuiteIndex <= 1) {
    topSuite.style.color = "red";
    bottomSuite.style.color = "red";
  }
}
window.onload = function() {
  changeCard();
  //write your code here

  // const btn = document.createElement("button");
  //btn.style.backgoundColor = "red";
  //btn.style.color = "white";
  //btn.style.fontSize = "50px";
  //btn.innerText = "Draw";

  //btn.addEventListener("click", fn);

  //document.body.appendChild(btn);
};
