// Calculadora simples utilizando switch

let numero1 = 10;
let numero2 = 0;
let operacao = "+"

switch (operacao) {
    case "+":
        console.log(numero1 + numero2)
        break;
    case "-":
        console.log(numero1 - numero2)
        break;
    case "*":
        console.log(numero1 * numero2)
        break;
    case "/":
        console.log(numero1 / numero2)
        break;
    default:
        console.log("Operação inválida")
}