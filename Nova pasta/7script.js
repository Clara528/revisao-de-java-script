//7°questão
let presencas = 0;
const totalAulas = 10;

for (let i = 0; i < totalAulas; i++) {
  let presenca = prompt("Digite a presença na aula " + (i + 1) + " (P ou F):");

  if (presenca === "P") {
    presencas++;
  }
}

let porcentagemFrequencia = (presencas / totalAulas) * 100;

console.log("Frequência: " + porcentagemFrequencia + "%");

if (porcentagemFrequencia >= 75) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}