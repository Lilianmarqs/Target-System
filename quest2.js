// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número: ", function (numero) {
    let soma = 0;
    let anterior = 0; 
    let proximo = 1;

    for(let i = 0; i < numero; i++){
        soma = anterior + proximo;
        anterior = proximo;
        proximo = soma;

    }

    if(numero == soma || numero == anterior || numero == proximo){
        console.log("O número informado está na sequência de fibonacci ")
    } else { 
        console.log("O número informado não está na sequência de fibonacci")
    }
  rl.close();
});


