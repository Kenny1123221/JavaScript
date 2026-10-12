const valorCompra = 50;

if (valorCompra >= 200) {
    console.log("Você ganhou 20% de desconto!");
} else if (valorCompra >= 100 && valorCompra < 200) {
    console.log("Você ganhou 10% de desconto!");
} else {
    console.log("Você não ganhou desconto.");
}