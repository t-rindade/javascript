let prompt = require("prompt-sync")();

let x = parseInt(prompt("Insira o valor de X: "));
let y = parseInt(prompt("Insira o valor de Y: "));
let z = parseInt(prompt("Insira o valor de Z: "));

// 1 > 2 > 3

if (y > x && z > y) {
  console.log("Ordem crescente!");
} else if (y < x && z < y) {
  console.log("Ordem decrescente!");
} else {
  console.log("Insira um valor válido (crescente/decrescente)");
}
