//Crie um objeto pet com as propriedades nome, especie, raca e idade.
// Faça uma função ou trecho de código que adicione uma nova propriedade
//vacinado (boolean) ao objeto pet após a sua criação.
// Remova a propriedade raca do objeto utilizando o operador delete.
//Exiba o objeto final no console.

let petvirtual = {
  nome: "Theo",
  especie: "coelho",
  raça: "Anão Holandês",
  idade: "6 meses"
}

console.log(petvirtual)

petvirtual.vacinado = "sim"

delete  petvirtual.raça;

console.log(petvirtual);