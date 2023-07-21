let prompt = require("prompt-sync")();

let num = 0;
let mod = 0;

while (num <= 20) {
  mod = num % 2;

  if (mod == 0) {
    console.log(num);
  }

  num++;
}
