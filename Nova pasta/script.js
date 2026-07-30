// atividade repetições

//1°questão
let pares = 0;
let impares = 0;

for (let i = 0; i < 8; i++) {
  let valor = Number(prompt("Digite um valor:"));

  if (valor % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Pares: " + pares);
console.log("Ímpares: " + impares);



