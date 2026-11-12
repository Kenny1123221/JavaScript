/* Crie um cadastro de uma pessoa 
Tarefas:
1. Mostre o nome da pessoa.
2. Mostre sua profissão.
3. Mostre sua cidade e seu estado.
4. Altere a cidade da pessoa.
5. Mostre o endereço atualizado. */

const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Fullstack",
    endereco: {
        rua: "Avenida dev 123",
        cidade: "cariacica",
        estado: "Espírito Santo",
    }
};

pessoa.endereco.cidade = "Vila Velha";

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.endereco.cidade);
console.log(pessoa.endereco.estado);

