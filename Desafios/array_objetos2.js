/* > Crie um carrinho de compras com lista de produtos onde cada produto tem um nome e preço:
   > Calcule o total do carrinho 
*/

const carrinho = [
    {
        produto: "Ventilador",
        preco: 50
    },
    {
        produto: "Cama",
        preco: 350
    },
    {
        produto: "Mesa",
        preco: 150
    },
    {
        produto: "Armario",
        preco: 220
    }
]

// let totalCarrinho = 0;

// carrinho.forEach((carrinhos) => {
//     totalCarrinho += carrinhos.preco
// });

// console.log(totalCarrinho);



// Função para ser chamada a qualquer momento
function calcularTotalCarrinho(carrinho) {
    let total = 0;
    let totalProdutos = carrinho.length

    carrinho.forEach((produto) => {
        total += produto.preco
    })

    return `Seu carrinho tem ${totalProdutos} itens e o total do carrinho ficou ${total}`
}

const totalCarrinho = calcularTotalCarrinho(carrinho)

console.log(totalCarrinho);


const produtos = [
    { nome: "Iphone 15 Pro Max", preco: 8900 },
    { nome: "Capinha Iphone", preco: 150 },
]

const totalcarrinho2 = calcularTotalCarrinho(produtos)
console.log(totalcarrinho2);