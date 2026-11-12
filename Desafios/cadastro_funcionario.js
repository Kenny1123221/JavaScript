/* Cri o cadastro de um funcionário
Tarefas:
1. Mostre o nome e o cargo do funcionário.
2. Mostre o nome do departamento.
3. Mostre o responsável pelo departamento.
4. Utilize if/else para verificar se o salário é maior que R$ 3.000.
5. Altere o email e o salário do funcionário. */

const funcionario = {
    nome: "Carlos",
    cargo: "Desenvolvedor",
    salario: 2500,
    departamento: {
        nome: "TI Soluções",
        responsavel: "João",
    },
    contato: {
        email: "Carloschefia441@gmail.com",
        telefone: "27 99999-9999",
    }
};

console.log(funcionario.nome);
console.log(funcionario.departamento.nome);

if (funcionario.salario > 3000) {
    console.log("Salário acima de R$ 3.000");
} else {
    console.log("Salário abaixo de R$ 3.000");
}

funcionario.contato.email = "carlincomputaria@gmail.com";
funcionario.salario = 3500;

console.log(funcionario.contato.email);
console.log(funcionario.salario);