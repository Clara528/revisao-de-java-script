//6°questão
let valor = Number(prompt("Digite o 1º valor:"));
let maior = valor;
let menor = valor;

for (let i = 0; i < 9; i++) {
  valor = Number(prompt("Digite um valor:"));

  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }
}

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);

let valor = Number(prompt("Digite o 1º valor:"));
let maior = valor;
let menor = valor;

//////////////////
let i = 0;
while (i < 9) {
  valor = Number(prompt("Digite um valor:"));

  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }

  i++;
}

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);

///////////////////
let maior = -Infinity;
let menor = Infinity;
let i = 0;

do {
  let valor = Number(prompt("Digite um valor:"));

  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }

  i++;
} while (i < 10);

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);