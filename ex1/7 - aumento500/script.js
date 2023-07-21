let prompt = require("prompt-sync")();

let salario = parseFloat(prompt("Digite o salario do funcionário: "));

aumento = salario * 0.3;

if (salario < 500) {
  salario += aumento;
  console.log(`Salário (com aumento): R$${salario}`);
} else {
  console.log("Não tem direito ao aumento!");
}
