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

let answer;

do {
  console.log("\n1 - login");
  console.log("2 - week");
  console.log("3 - crescent");
  console.log("4 - idade");
  console.log("5 - desconto");
  console.log("6 - imc");
  console.log("7 - sair");

  answer = prompt("> ");

  switch (answer) {
    case "1":
      exercicio1();
      break;

    case "2":
      exercicio2();
      break;

    case "3":
      exercicio3();
      break;

    case "4":
      exercicio4();
      break;

    case "5":
      exercicio5();
      break;

    case "6":
      exercicio6();
      break;

    // case "7":
    //   process.exit();
    //   break;

    default:
      console.log("\nVocê não escolheu nenhum exercício");
      break;
  }
} while (answer != "sair" && answer != "7");
