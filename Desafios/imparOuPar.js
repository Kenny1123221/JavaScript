// Percorra o array e informe se cada número é par ou ímpar.

let numeros = [1, 2, 7, 10, 13, 16, 21];

numeros.forEach((divisor) => {
    const numero = divisor % 2;
    if (numero === 0) {
        console.log(`Número par: ${divisor}`)
    } else {
        console.log(`Número ímpar: ${divisor}`)
    }
})