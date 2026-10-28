// Some apenas os números que são múltiplos de 3 e mostre o total no console.

let numeros = [3, 5, 6, 8, 9, 10, 12];
let multiplosDe3 = [];

numeros.forEach((multiplos) => {
    const numeros2 = multiplos % 3;
    if (numeros2 === 0) {
        multiplosDe3.push(multiplos);
    }
})

console.log(`O números que são multiplos de 3 são: ${multiplosDe3} .`);