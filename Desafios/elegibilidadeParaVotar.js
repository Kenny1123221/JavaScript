/*
    Crie uma função que verifique se uma pessoa é elegível para
    votar. 
    A pessoa precisa ter 18 anos ou mais para votar, além disso,
    vamos incluir uma verificação para ver se a pessoa tem menos de
    75 anos, assumindo que acima dessa idade, o voto é facultativo.
    - Com base na idade fornecida deverá retornar "Elegível para
    votar", caso seja maior que 75 retornar "Voto facultativo" ou caso
    seja menor de 18 retornar "Não elegível para votar"
*/

const idade = 5;

function verificarIdade() {
    if (idade >= 18 && idade <= 75) {
        console.log("Elegível para votar.")
    } else if (idade < 17) {
        console.log("Não elegível para votar.")
    } else {
        console.log("Voto facultativo.")
    }
}

console.log(verificarIdade());