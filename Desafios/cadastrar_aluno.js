// Faça o cadastro de um aluno

const aluno = {
    nome: "Maria",
    idade: 17,
    curso: {
        nome: "Informática",
        duracao: "2 anos",
    },
    notas: {
        nota1: 2,
        nota2: 4,
        nota3: 3,
    }
};

console.log(aluno.nome);
console.log(aluno.curso.nome);
console.log(aluno.curso.duracao);

if (aluno.notas.nota1 + aluno.notas.nota2 + aluno.notas.nota3 >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}