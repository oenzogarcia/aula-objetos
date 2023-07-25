
const produtos = [
    {
        nome: "Caipirinha",
        preço: 2000,
        quantidadeComprada: 2
    },

    {
        nome: "Red Label",
        preço: 20000,
        quantidadeComprada: 1
    },

    {
        nome: "Heineken",
        preço: 1200,
        quantidadeComprada: 4
    }

]

const cartaoCliente = {
    nome: "Leorio",
    idade: 27,
    produtos
}


let totalDaComanda = 0

for (let produto of produtos) {
    totalDaComanda += (produto.preço * produto.quantidadeComprada)
}




console.log(`Caro ${cartaoCliente.nome}, sua conta deu um total de R$ ${(totalDaComanda / 100).toFixed(2)}.`)
// Caro Leorio, sua conta deu um total de R$ 288.00.



console.log(cartaoCliente.nome) // Leorio
console.log(cartaoCliente.idade) // 25 
console.log(cartaoCliente.produtos[0].nome) // Caipirinha 
console.log(`${(cartaoCliente.produtos[2].preço / 100)} reais.`) // 12 reais.
