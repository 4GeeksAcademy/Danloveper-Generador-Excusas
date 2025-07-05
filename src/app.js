import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function select_random(len) {
  return Math.floor(Math.random() * len);
}

window.onload = function () {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  document.getElementById("excuse").innerHTML = `${who[select_random(who.length)]} ${action[select_random(action.length)]} ${what[select_random(what.length)]} ${when[select_random(when.length)]}`;
  console.log("Hello Rigo from the console!");
};
