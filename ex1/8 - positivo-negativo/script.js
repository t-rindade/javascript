let prompt = require("prompt-sync")();

let x = parseInt(prompt("Digite o número de X: "));

if (x > 0) {
  console.log("Positivo");
} else if (x < 0) {
  console.log("Negativo");
} else {
  console.log("Digite um NÚMERO válido!");
}
