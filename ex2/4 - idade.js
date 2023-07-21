let prompt = require("prompt-sync")();

let ano = parseInt(prompt("Insira o ano do seu nascimento: "));

let idade = 2023 - ano;

console.log(`\nIdade: ${idade}`);

if (idade >= 18) {
  console.log("Maior de idade, já pode ser preso!");
} else if (idade <= 0) {
  console.log("Insira o ANO de nascimento correto!");
} else {
  console.log("Insira o ANO de nascimento correto!");
}
