let prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do funcionário: ");
let cargo = prompt("Digite o cargo do funcionário: ");
let salario = parseFloat(prompt("Digite o salario do funcionário: "));

aumento = salario * 0.1;

if (salario < 1000) {
  salario = salario + aumento;
}

console.log(`Nome: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salario: ${salario}`);
