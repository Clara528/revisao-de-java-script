//Crie um objeto notasAluno onde cada chave é o nome de uma disciplina e o valor é a nota obtida notrimestre (ex: { matematica: 8.5, portugues: 7.0,historia: 9.0, biologia: 6.5 }).
// Escreva um algoritmo utilizando for...in que percorra toda as disciplinas, calcule e exiba a média das notas do aluno.
//Se a média final for maior ou igual a 7.0, exiba no console “Está indo bem"; caso contrário, “Bora estudar!“

let notasAluno ={
    português: 8.0,
    história: 8.5,
    biologia: 9.0,
    arte: 10.0
}

let soma = 0;
let quantidade = 0;

for (let disciplina in notasAluno) {
  soma = soma + notasAluno[disciplina];
  quantidade = quantidade + 1;
}

let media = soma / quantidade;
console.log("Média: " + media);

if (media >= 7.0) {
  console.log("Está indo bem");
} else {
  console.log("Bora estudar!");
}
