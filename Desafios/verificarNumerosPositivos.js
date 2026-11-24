/*
  Verificar se todos os números são positivos
  Este desafio recebe três números como parametro da função e
  verifica se todos são positivos.
  Se todos forem positivos, retorna verdadeiro; caso contrário,
  retorna falso.
*/


function verificarNumeros(numero1, numero2, numero3) {
    if (numero1 > 1 && numero2 > 1 && numero3 > 1) {
        return `True`
    } else {
        return `False`
    }

}

console.log(verificarNumeros(-2, 4, 6));
