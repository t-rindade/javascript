let prompt = require("prompt-sync")();

let num = 1;
let soma = 0;

while (num <= 100) {
  soma = soma + num;
  console.log(soma);

  num += 1;
}
