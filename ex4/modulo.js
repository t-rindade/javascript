import PromptSync from "prompt-sync";
let prompt = PromptSync();

export function exercicio1() {
  console.log("\nCódigo LOGIN");

  let user = prompt("Usuário: ");
  let pass = prompt("Senha: ");

  if (user == "admin" && pass == "senha123") {
    console.log("\nLogin bem-sucedido!");
  } else {
    console.log("\nUsuário e/ou senha errados!");
  }
}

export function exercicio2() {
  console.log("\nCódigo WEEK");

  let dia = parseInt(prompt("Dia da semana: "));

  switch (dia) {
    case 1:
      console.log("Segunda-feira");
      break;
    case 2:
      console.log("Terça-feira");
      break;
    case 3:
      console.log("Quarta-feira");
      break;
    case 4:
      console.log("Quinta-feira");
      break;
    case 5:
      console.log("Sexta-feira");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;

    default:
      console.log("Valores possíveis (1 - 7)");
      break;
  }
}

export function exercicio3() {
  console.log("\nCódigo CRESCENT");

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
}

export function exercicio4() {
  console.log("\nCódigo IDADE");

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
}

export function exercicio5() {
  console.log("\nCódigo DESCONTO");

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
}

export function exercicio6() {
  console.log("\nCódigo IMC");

  let peso = parseFloat(prompt("Peso em KG: "));
  let altura = parseFloat(prompt("Altura em metros: "));

  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log("Abaixo do peso!");
  } else if (imc > 18.5 && imc < 24.9) {
    console.log("Peso normal!");
  } else if (imc > 18.5 && imc < 24.9) {
    console.log("Peso normal!");
  } else if (imc > 25 && imc < 29.9) {
    console.log("Sobrepeso!");
  } else if (imc > 30 && imc < 34.9) {
    console.log("Obesidade grau 1!");
  } else if (imc > 35 && imc < 39.9) {
    console.log("Obesidade grau 2!");
  } else if (imc >= 40) {
    console.log("Obesidade grau 3!");
  } else {
    console.log("Insira um valor válido!");
  }
}
