// Verificador de numeros utiluzando IF, ELSE IF e ELSE dentro de uma função anonima

let verificarNumero = function (numero) {
    if (numero >= 1) {
        return ("Número positivo.");
    } else if (numero <= -1) {
        return ("Número negativo.");
    } else {
        return ("O número é zero.")
    }
}

console.log(verificarNumero(0));