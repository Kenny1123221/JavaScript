/* > Crie uma lista de contatos onde deve ter o nome da pessoa e o telefone
   > Como encontrar um nome dentro da lista de contatos pesquisando pelo nome?
*/

const contatos = [
    { nome: "Rafael", telefone: "9999 - 9876" },
    { nome: "Carlos", telefone: "9955 - 5532" },
    { nome: "Rogério", telefone: "9977 - 8167" },

]

// let pesquisa = "Rogério"

// contatos.forEach((contato) => {
//     if (contato.nome === pesquisa) {
//         console.log(contato.telefone);
//     }
// });


function buscaContato(nomePessoa, listaContatos) {
    if (!nomePessoa) {
        console.log("O nome da pessoa é obrigatório!");
        return "";
    }

    const contatoPessoa = listaContatos.find((contato) => {
        return contato.nome === nomePessoa
    })

    if (!contatoPessoa) {
        return "Ops, parece que essa pessoa não está na lista de contatos!"
    }

    return `O ${nomePessoa} tem o telefone: ${contatoPessoa.telefone}`
}

const pessoa1 = buscaContato("Rafael", contatos)
console.log(pessoa1);