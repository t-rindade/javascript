import PromptSync from "prompt-sync";
let prompt = PromptSync();

import {
  exercicio1,
  exercicio2,
  exercicio3,
  exercicio4,
  exercicio5,
  exercicio6,
} from "./modulo.js";

function menu(exercicio) {
  console.log("Selecione uma opção: ");
  console.log("1 - login");
  console.log("2 - week");
  console.log("3 - crescent");
  console.log("4 - idade");
  console.log("5 - desconto");
  console.log("6 - imc");
  console.log("7 - sair");
  exercicio = parseInt(prompt("> "));

  switch (exercicio) {
    case 1:
      exercicio1();
      prompt("\nPressione qualquer tecla para voltar ao menu!");
      menu();
      break;

    case 2:
      exercicio2();
      prompt("\nPressione qualquer tecla para voltar ao menu!");
      menu();
      break;

    case 3:
      exercicio3();
      prompt("\nPressione qualquer tecla para voltar ao menu!");
      menu();
      break;

    case 4:
      exercicio4();
      prompt("\nPressione qualquer tecla para voltar ao menu!");
      menu();
      break;

    case 5:
      exercicio5();
      prompt("\nPressione qualquer tecla para voltar ao menu!");
      menu();
      break;

    case 6:
      exercicio6();
      prompt("\nPressione qualquer tecla para voltar ao menu!");
      menu();
      break;

    case 7:
      process.exit();
      break;

    default:
      menu();
      break;
  }
}

menu();
