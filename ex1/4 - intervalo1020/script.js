let prompt = require("prompt-sync")();
let x = parseInt(prompt("Digite o número de X: "));

if (x >= 10 && x <= 20) {
  console.log("Este número está entre 10 e 20 - " + x);
} else {
  console.log("Não está entre 10 e 20 - " + x);
}
