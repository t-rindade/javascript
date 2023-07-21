let prompt = require("prompt-sync")();

let animal = prompt("Digite o nome do animal: ");

switch (animal) {
  case "gato":
    console.log("miau!");
    break;

  case "cachorro":
    console.log("auau!");
    break;

  case "vaca":
    console.log("muuuu!");
    break;

  case "papagaio":
    console.log("Voce foi a culpa desse amor se acabar...");
    // console.log("https://www.youtube.com/watch?v=3pIvIvx5nSg");
    break;

  default:
    console.log("Conheço não!");
    break;
}
