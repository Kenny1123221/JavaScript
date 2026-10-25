/*
# Desafio 1-
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", ""backend", "mobile")

-> Você precisa remover o cargo "backend" da lista de cargos pois não está mais disponivel na empresa.
*/

let cargos = ["fullstack", "frontend", "backend", "mobile"]

let posicaoBackend = cargos.indexOf("infra");  // Vai dizer em qual local está.

if (posicaoBackend !== -1) {
    cargos.splice(posicaoBackend, 1)
    console.log("removendo cargo backend, ele está na posição: " + posicaoBackend)
    console.log(cargos);
    return;
}

if (posicaoBackend === -1) {
    console.log("Esse item não foi encontrado na lista de cargos!")
    console.log(cargos);
}


/*
## Desafio 2 -
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
qual a posição em que esse nome está na sua lista.
-> Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista.
*/

let alunos = ["Alice", "Lucas", "Carol", "David"];
let estaNaLista = alunos.indexOf("Henrique");

if (estaNaLista !== -1) {
    console.log(`O nome Henrique está na posição: ` + estaNaLista)
} else {
    console.log(`O nome Henrique não está foi encontrado na lista.`)
    console.log(alunos);
}



/*
## Desafio 3
Crie um array com esses numeros: [5, 15, 23, 2]
- Você deve devolver qual é a soma de todos esses numeros usando forEach
*/

let numeros = [5, 15, 23, 2];
let somaTotal = 0;

numeros.forEach((numero) => {
    somaTotal += numero;
})

// console.log(`A soma total da lista é: ${somaTotal}`);

/*
## Desafio 4
Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]
- Você deve devolver um array com todos os numeros que são multiplos de 3
*/

let numero = [6, 12, 5, 9, 14, 27];

numeros.forEach((valor) => {
    const numeros = valor % 3;
    if (numeros === 0) {
        console.log(`O número ${valor} é múltiplo de 3`)
    }
})

/*
## Desafio 5
Filtrar palavras com mais de 5 letras usando forEach
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

- Você deve devolver um array com todas palavras que possuem mais de 5 letras.
*/

let nomes = ["gato", "cachorro", "elefante", "peixe", "leão"];

let palavrasMaiores = [];

nomes.forEach((palavra) => {
    if (palavra.length > 5) {
        palavrasMaiores.push(palavra);
    }
})

console.log("Palavras maiores que 5 letras são: " + palavrasMaiores);