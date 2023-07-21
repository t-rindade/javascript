let prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Nota 1: "));
let nota2 = parseFloat(prompt("Nota 2: "));
let nota3 = parseFloat(prompt("Nota 3: "));
let nota4 = parseFloat(prompt("Nota 4: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media > 7.0) {
  console.log("APROVADO!");
} else if (media < 7.0 && media > 5.0) {
  console.log("RECUPERAÇÃO");
} else if (media < 5.0) {
  console.log("REPROVADO!");
} else {  
  console.log("Digite um valor válido!");
}
