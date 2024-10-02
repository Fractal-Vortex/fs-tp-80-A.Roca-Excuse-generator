/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const getRandom = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const getExcuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(
  what
)} ${getRandom(when)}`;

let documento = document.getElementById("data");

documento.innerHTML = getExcuse;
