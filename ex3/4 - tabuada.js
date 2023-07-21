let prompt = require("prompt-sync")();

let num = parseInt(prompt("Número de X: "));
let mult = 1;
let result;

for (mult; mult <= 10; mult++) {
  result = num * mult;
  console.log(`${num} x ${mult} = ${result}`);
}
