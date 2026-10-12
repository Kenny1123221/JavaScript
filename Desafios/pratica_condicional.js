// PRATICA 1

const nota1 = 8;
const nota2 = 5;

const calculo = (nota1 + nota2) / 2;

if (calculo >= 7) {
    console.log("Você foi aprovado!");
    console.log(`Sua média foi: ${calculo}`);
} else {
    console.log("Você foi reprovado!");
    console.log(`Sua média foi: ${calculo}`);
}

// PRATICA 2

const produtoValor = 400;
const freteGratis = true;

if (produtoValor >= 500 && freteGratis) {
    console.log("Parabéns! Você granhou frete grátis!");
} else {
    console.log("Você não ganhou frete grátis! O frete ficará no valor de R$ 50,00 reais.");
}