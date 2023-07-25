const pessoa = {
    nome: "Jubileu",
    idade: 11,
    altura: 1.50,
    temCNH: false,
    apelidos: ["Jubileuvisky", "Ju", "Jubi"]
}


const mensagemCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH"

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${mensagemCNH} e os seguintes apelidos:`)

for (apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}