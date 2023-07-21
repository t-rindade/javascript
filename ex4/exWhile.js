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
    case "1" && "login":
      exercicio1();
      break;

    case "2" && "week":
      exercicio2();
      break;

    case "3" && "crescent":
      exercicio3();
      break;

    case "4" && "idade":
      exercicio4();
      break;

    case "5" && "desconto":
      exercicio5();
      break;

    case "6" && "imc":
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
