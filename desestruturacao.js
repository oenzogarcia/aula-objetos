const pessoa = {
    nome: 'Marcos',
    idade: 27,
    cidade: 'Bonito',
    profissao: 'Dev'
}

const { nome, idade, ...demais } = pessoa

console.log(demais)