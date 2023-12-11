const wynik = document.querySelector("#wynik");
const button = document.querySelectorAll("button");

console.log(wynik);
console.log(button);

const liczby = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const znaki = ["+", "-", "/", "x", "%", "+/-", "AC"];

let num1 = "";
let num2 = "";
let znak = "";

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (evt) {
    if (liczby.includes(button[i].value)) {
      if (!znak) {
        num1 += button[i].value;
        wynik.innerHTML = num1;
        console.log(`num1 = ${num1}`);
      } else {
        num2 += button[i].value;
        wynik.innerHTML = `${num1} ${znak} ${num2} `;
        console.log(`num2 = ${num2}`);
      }
    }
  });
}
