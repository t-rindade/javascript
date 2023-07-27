function calc(event) {
  event.preventDefault();
  console.log("Função calcular");
  let user = getValues();
  let imcC = calcIMC(user.altura, user.peso);
  let sitIMC = classificarIMC(imcC);

  console.log(sitIMC);

  user = organizarDados(user, imcC, sitIMC);

  cadastrarUser(user);
  carregarUser();
}

function getValues() {
  let nomeRecebido = document.getElementById("nome").value.trim();
  let alturaRecebido = document.getElementById("altura").value;
  let pesoRecebido = document.getElementById("peso").value;

  let dadosUser = {
    nome: nomeRecebido,
    altura: alturaRecebido,
    peso: pesoRecebido,
  };

  console.log(dadosUser);

  return dadosUser;
}

function calcIMC(altura, peso) {
  // let peso = document.getElementById("peso").value;
  // let altura = document.getElementById("altura").value;
  let imc = peso / (altura * altura);

  console.log(imc);

  return imc;
}

// function classificarIMC(imc) {
//   let situacao;

//   if (imc < 18.5) {
//     situacao == "Abaixo do peso";
//   } else if (imc > 18.5 && imc < 24.99) {
//     situacao == "Peso normal";
//   } else if (imc > 25 && imc < 29.99) {
//     situacao == "Sobrepeso";
//   } else if (imc > 30) {
//     situacao == "Obesidade";
//   }

//   console.log(situacao);

//   return situacao;
// }

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc > 18.5 && imc < 24.99) {
    return "Peso normal";
  } else if (imc > 25 && imc < 29.99) {
    return "Sobrepeso";
  } else if (imc > 30) {
    return "Obesidade";
  }
}

function organizarDados(user, imcC, sitIMC) {
  //date-time
  // let dataHora = Date.now();
  // let dataHora = new Date().toISOString();

  let dataHora = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "long",
    date: "short",
  }).format(Date.now());

  console.log(dataHora);

  let udata = {
    ...user,
    imc: imcC,
    sitIMC: classificarIMC,
    dataCadastro: dataHora,
  };

  return udata;
}

function cadastrarUser(user) {
  let listaUser = [];
  // localStorage.setItem("nomeUser", "Biel");

  if (localStorage.getItem("userCadastrado") != null) {
    listaUser = JSON.parse(localStorage.getItem("userCadastrado"));
  }

  listaUser.push(user);

  localStorage.setItem("userCadastrado", JSON.stringify(listaUser));
}

function carregarUser() {
  let listaCarregada = [];

  if (localStorage.getItem("userCadastrado") != null) {
    listaCarregada = JSON.parse(localStorage.getItem("userCadastrado"));
  }

  if (listaCarregada.length == 0) {
    let tabela = document.getElementById("corpo-tabela");

    tabela.innerHTML = "Nenhum usuário cadastrado!";
  }

  console.log(listaCarregada);
}

window.addEventListener("DOMContentLoaded", () => carregarUser());
