// Mostre somente numeros pares de 1 a 20 utilizando FOR.

for (let i = 1; i <= 20; i++) {
    let resultado = i % 2;
    if (resultado === 0) {
        console.log(`Número par: ` + i)
    }
}


console.log("=========================================");

// Mostre somente numeros ímpar de 1 a 20 utilizando FOR.

for (let i = 1; i <= 20; i++) {
    let resultado = i % 3;
    if (resultado === 0) {
        console.log(`Número ímpar: ` + i)
    }
}