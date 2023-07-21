let prompt = require("prompt-sync")();

let user = prompt("Usuário: ");
let pass = prompt("Senha: ");

if (user == "admin" && pass == "senha123") {
  console.log("\nLogin bem-sucedido!");
} else {
  console.log("\nUsuário e/ou senha errados!");
}
