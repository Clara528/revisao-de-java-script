# revisao-de-java-script
repositorio para revisao

QUESTÃO1:
"5"+2
'52'
"5"-2
3
2+true
3
2+false
2
"10"*2
20
"12"/2
6
let x=10;
undefined
x
10
x=20;
20
console.log(x);
VM198:1 20
undefined

QUESTÂO2:
// 1. Definimos qual é o usuário e senha "corretos" (fixos, para teste)
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

// 2. Pedimos para o usuário digitar usuário e senha
let usuarioDigitado = prompt("Digite o usuário:");
let senhaDigitada = prompt("Digite a senha:");

// 3. Comparamos os dois ao mesmo tempo com &&
if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
  console.log("Login feito com sucesso");
} else {
  console.log("Erro de usuário e/ou senha");
}

QUESTÂO3:
// 1. Recebemos as notas (prompt sempre retorna string, por isso o Number())
let nota1 = Number(prompt("Digite a nota da prova 1:"));
let nota2 = Number(prompt("Digite a nota da prova 2:"));

// 2. Calculamos e armazenamos a média
let media = (nota1 + nota2) / 2;

// 3. Verificamos se está dentro ou abaixo da média
if (media >= 6) {
  console.log("Dentro da média. Sua média foi: " + media);
} else {
  console.log("Abaixo da média. Sua média foi: " + media);
}

QUESTÂO4:
let dia = Number(prompt("Digite o dia da semana (1 a 7):"));

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

QUESTÂO5:
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;
let erro = false;

// 1. Verificamos se os números são válidos
if (isNaN(num1) || isNaN(num2)) {
  erro = true;
} else {
  // 2. Realizamos a operação escolhida
  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        erro = true; // divisão por zero também é erro
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      erro = true; // operador digitado não é nenhum dos 4
  }
}

// 3. Mostramos o resultado final
if (erro) {
  console.log("Erro de entrada");
} else {
  console.log("Resultado: " + resultado);
}

