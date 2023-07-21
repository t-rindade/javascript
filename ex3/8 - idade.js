let prompt = require("prompt-sync")();

let idade = 0;

while (idade < 18) {
  let idade = parseInt(prompt("Idade: "));
  if (idade >= 18) {
    console.log("maior");
    break;
  }
}
