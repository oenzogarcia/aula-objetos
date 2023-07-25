const pessoa = {
    nome: "Enzo",
    altura: 1.83,
    peso: 84,
    idade: 23
}

pessoa.peso = 84.70
pessoa['altura'] = 1.84

console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}kg.`)