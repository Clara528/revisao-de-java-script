//5°questão
let usuarioCorreto = "aluno";
let senhaCorreta = "iftm123";
let tentativas = 0;
let logado = false;

do {
  let usuarioDigitado = prompt("Digite o usuário:");
  let senhaDigitada = prompt("Digite a senha:");

  if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Login com sucesso");
    logado = true;
  } else {
    console.log("Erro de senha ou usuário");
    tentativas++;
  }
} while (!logado && tentativas < 3);

if (tentativas === 3) {
  console.log("Bloqueado");
}