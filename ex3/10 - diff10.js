let prompt = require("prompt-sync")();

let num = 1;

while (num != 0) {
  let num = parseInt(prompt("Digite um número: "));
  if (num == 0) {
    console.log("Valor correto!");
    break;
  }
}
