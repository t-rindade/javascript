let prompt = require("prompt-sync")();

let x = parseFloat(prompt("Digite o número de X: "));
let y = parseFloat(prompt("Digite o número de Y: "));

if (x > y) {
  console.log(`Maior número: ${x}`);
} else if (y > x) {
  console.log(`Maior número: ${y}`);
} else {
  console.log("Digite um valor válido!");
}
