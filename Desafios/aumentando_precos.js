// Criar uma nova array umentando todos os preços em R$5.

let precos = [10, 20, 30, 40, 50];

const precosAumentados = precos.map((preco) => {
    return preco + 5
})

console.log(precosAumentados);
console.log(precos);