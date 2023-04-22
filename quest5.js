// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite uma frase: ", function reverterString(str){
    let novaString = "";
    for(let i = str.length; i >= 0; i--) {
        novaString += str[i];
    }
    console.log(novaString);
} ) 