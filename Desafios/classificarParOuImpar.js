/*
  Algoritmo para classificar numero par ou ímpar
  Escreva uma função que receba um número e retorne "Par" se o
  número for par e "Ímpar" se o número for ímpar.
*/

function parImpar(numero) {
    if (numero % 2 === 0) {
        return `Esse número é par!`
    } else {
        return `Esse número é ímpar!`
    }
}

console.log(parImpar(5));