// Calculadora de juros
// (J = P * i * n)
// J = Juros
// P = Principal
// i = taxa de juros
// n = número de períodos


const principal = 2000;
const taxaJuros = 0.03;  // Igual a 3%
const numeroPeriodos = 12;

const juros = principal * taxaJuros * numeroPeriodos;

console.log(`Juros no periodo de ${numeroPeriodos} meses é de R$ ${juros} reais.`);