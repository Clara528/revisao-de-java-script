//4°questão
let somaIdades = 0;
let quantidade = 0;
let idade;

do {
  idade = Number(prompt("Digite a idade (0 ou menos para parar):"));

  if (idade > 0) {
    somaIdades = somaIdades + idade;
    quantidade++;
  }
} while (idade > 0);

let media = somaIdades / quantidade;
console.log("A idade média da população é: " + media);