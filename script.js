//object

//1°questão: 
// Crie um objeto chamado perfilInstagram com as seguintes
//propriedades: username, bio, seguidores (um número) e estaAtivo (0 ou 1).
// Exiba no console uma mensagem formatada utilizando template literals:
// O usuário @[username] possui [seguidores] seguidores. Em seguida, simule que o usuário ganhou 150 novos seguidores: atualize o valor da propriedade seguidores 
// e exiba o objeto atualizado no console com um novo log.

let perfilInstagram={
    username: "Isaac",
    bio:"O mais incrível",
    seguidores:"300",
    estaAtivo: 1,

}

console.log(`O usúario@${perfilInstagram.username} tem ${perfilInstagram.seguidores}seguidores`)

perfilInstagram.seguidores = perfilInstagram.seguidores + 150

console.log(`O usuario@${perfilInstagram.username} ganhou novos seguidores. Número atual de seguidores: ${perfilInstagram.seguidores}`)
