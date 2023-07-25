const pessoa = {
    nome: 'Marcos',
    idade: 27,
    cidade: 'Bonito',
    profissao: 'Dev'
}

const endereco = {
    rua: 'Rua Maneira',
    numero: '567',
    bairro: 'Jardim Camburi'
}

const objetoFundido = {
    ...pessoa,
    ...endereco
}

console.log(objetoFundido)