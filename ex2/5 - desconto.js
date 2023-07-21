let prompt = require("prompt-sync")();

let valortotal = parseFloat(prompt("Valor da compra: "));
let desconto;

if (valortotal < 100) {
  console.log("Sem desconto para você!");
} else if (valortotal > 100.01 && valortotal < 200) {
  desconto = valortotal * 0.1;
  valortotal -= desconto;
  console.log(`Desconto de 10%: ${valortotal}`);
} else if (valortotal > 200) {
  desconto = valortotal * 0.2;
  valortotal -= desconto;
  console.log(`Desconto de 20%: ${valortotal}`);
} else {
  console.log("Insira um valor válido!");
}
