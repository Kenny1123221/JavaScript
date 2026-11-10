// Praticar propriedades e valores

const produto = {
    nome: "Notebook",
    preco: 2300,
    estoque: 15,
    categoria: "Eletrônicos"
}

console.log("O produto é um " + produto.nome + ", e seu valor é de R$" + produto.preco + " reais.");

produto.marca = "Samsung"

console.log("A sua marca é " + produto.marca);