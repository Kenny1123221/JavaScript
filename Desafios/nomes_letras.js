// transformar nomes em letras maiúsculas.

let nomes = ["ana", "carlos", "maria", "pedro"];

const nomesMaiusculos = nomes.map((nome) => {
    return nome.toUpperCase()
})
console.log(nomesMaiusculos);
console.log(nomes);