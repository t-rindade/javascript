console.log("Exemplo notas");
let prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));

let media = (nota1 + nota2) / 2;

console.log("Média: " + media);
