// Crie um cadastro de um produto

const produto = {
    nome: "Notebook",
    preco: 2500,
    estoque: 10,
    fabricante: {
        nome: "Dell",
        pais: "Brasil",
        anoFundacao: 1984,
    }
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.fabricante.nome);

produto.preco = 2300;

console.log(produto.preco);