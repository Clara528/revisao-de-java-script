//Crie um array chamado playlist contendo 3 objetos.Cada objeto deve representar uma música e conter as propriedades: titulo, artista e duracaoSegundos.
//Adicione uma 4ª música ao final da lista utilizando o método.push().
//Utilizando a estrutura for...of, percorra a playlist e imprima no console apenas as músicas que possuem duração superior a 180 segundos (3 minutos).

let playlist = [
  { titulo: "Música A", artista: "Artista 1", duracaoSegundos: 200 },
  { titulo: "Música B", artista: "Artista 2", duracaoSegundos: 150 },
  { titulo: "Música C", artista: "Artista 3", duracaoSegundos: 240 }
];


playlist.push({ titulo: "Música D", artista: "Artista 4", duracaoSegundos: 190 });


for (let musica of playlist) {
  if (musica.duracaoSegundos > 180) {
    console.log(musica.titulo + " - " + musica.artista + " (" + musica.duracaoSegundos + "s)");
  }
}