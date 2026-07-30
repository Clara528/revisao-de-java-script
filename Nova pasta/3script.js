//3°questão
let soma = 0;
let numero;

do {
  numero = Number(prompt("Digite um número (0 para parar):"));
  soma = soma + numero;
} while (numero !== 0);

console.log("O somatório é: " + soma);