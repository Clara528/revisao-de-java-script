//2°questão
let total = 0 ;
let continuar = "s"; // "s" de sim, começa como "s" pra entrar no loop pelo menos uma vez

while (continuar === "s") 
{
  let salario = Number(prompt("Digite o salário do membro da família:"));
  total = total + salario;

  continuar = prompt("Deseja adicionar outro salário? (s/n)");
}

console.log("A família possui um total de: R$" + total);