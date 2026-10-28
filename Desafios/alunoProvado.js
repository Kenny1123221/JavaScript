// Verificar se o aluno está aprovado, se ficou de recuperação ou foi reprovado.

let notas = [9, 6, 4, 8, 5, 7, 3];

notas.forEach((nota) => {
    if (nota >= 7) {
        console.log("Parabéns, você foi aprovado. Sua nota: " + nota)
    } else if (nota >= 5 && 7) {
        console.log("Você está de recuperação. Sua nota: " + nota)
    } else {
        console.log("Você está de reprovado! Sua nota: " + nota)
    }
})