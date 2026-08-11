//Crie um array de objetos chamado bibliotecaJogos, onde cada jogo possui titulo,genero, preco e zerado (boolean). Adicione pelo menos 4 jogos.
// Escreva um laço de repetição para encontrar e exibir: O título de todos os jogos que o aluno já zerou(zerado === true).
//O valor total gasto na biblioteca (a soma do precode todos os jogos).


let bibliotecaJogos = [
  { titulo: "The Witcher 3", genero: "RPG", preco: 79.90, zerado: true },
  { titulo: "Hollow Knight", genero: "Metroidvania", preco: 39.90, zerado: false },
  { titulo: "God of War", genero: "Ação", preco: 99.90, zerado: true },
  { titulo: "Stardew Valley", genero: "Simulação", preco: 29.90, zerado: false }
];


let totalGasto = 0;

console.log("Jogos zerados:");


for (let jogo of bibliotecaJogos) {
 
  if (jogo.zerado === true) {
    console.log(jogo.titulo);
  }

  
  totalGasto = totalGasto + jogo.preco;
}

console.log("Total gasto na biblioteca: R$ " + totalGasto);