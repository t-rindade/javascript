let prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número: "));

while (num >= 0) {
  console.log(num);
  num--;
}
