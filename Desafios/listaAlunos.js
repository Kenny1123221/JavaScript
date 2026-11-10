/* Crie um array contendo 4 objetos, cada objeto deve possuir:
NOME
IDADE
NOTA
 Utilize o ForEache para percorrer o array e mostrar o nome e a nota de cada aluno, e utilize
 IF e ELSE para verificar quem foi aprovado e quem foi reprovado.*/

const alunos = [
    {
        nome: "Carlos",
        idade: 15,
        nota: 7.5
    },
    {
        nome: "Matheus",
        idade: 16,
        nota: 4
    },
    {
        nome: "João",
        idade: 14,
        nota: 6
    },
    {
        nome: "Lucas",
        idade: 17,
        nota: 8
    }
];

alunos.forEach((aluno) => {
    if (aluno.nota >= 7) {
        console.log(aluno.nome + " foi aprovado! Sua nota foi de " + aluno.nota);
    } else {
        console.log(aluno.nome + " foi reprovado! Sua nota foi de " + aluno.nota);
    }
});
