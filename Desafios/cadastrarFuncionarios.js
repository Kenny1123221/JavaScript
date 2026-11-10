/* Crie um array chamado funcionarios contendo 4 objetos.

Cada funcionário deve possuir:
- nome
- idade
- salario
- cargo
Utilize forEach() para percorrer todos os funcionários. */

const funcionarios = [
    {
        nome: "Carlos",
        cargo: "Desenvolvedor",
        salario: 2500,
    },
    {
        nome: "Matheus",
        cargo: "Designer",
        salario: 3000,
    },
    {
        nome: "João",
        cargo: "Analista",
        salario: 2800,
    },
    {
        nome: "Lucas",
        cargo: "Gerente",
        salario: 3500,
    }
];

funcionarios.forEach((funcionario) => {
    console.log(funcionario.nome, funcionario.cargo);
});

console.log("====================================================");

funcionarios.forEach((funcionario) => {
    if (funcionario.salario > 2000) {
        console.log("O funcionario " + funcionario.nome + " possui o salario de " + funcionario.salario + " e o cargo de " + funcionario.cargo);
    } else {
        console.log("O funcionario " + funcionario.nome + " possui o salario de " + funcionario.salario + " e o cargo de " + funcionario.cargo)
    }
})