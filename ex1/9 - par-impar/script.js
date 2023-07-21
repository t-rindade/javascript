let prompt = require("prompt-sync")();

let x = parseFloat(prompt("Digite o número de X: "));

let mod = x % 2;

if (mod == 0) {
  console.log("Número digitado é PAR!");
} else {
  console.log("Número digitado é IMPAR!");
}
