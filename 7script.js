//Crie um array de objetos chamado cardapiocontendo produtos da cantina. Cada objeto deve ter: id, nome, preco e categoria (ex:"Salgado", "Bebida", "Doce").
// Agora crie um menu interativo que tenha as seguintes opções:
//Inserir um novo produto
// Listar todos os produtos
// Buscar por preço igual ou inferior a
//Buscar pelo nome
// Fechar programa


let cardapio = [
  { id: 1, nome: "Coxinha", preco: 6.5, categoria: "Salgado" },
  { id: 2, nome: "Refrigerante", preco: 5.0, categoria: "Bebida" },
  { id: 3, nome: "Brigadeiro", preco: 3.0, categoria: "Doce" }
];

let continuar = true;

while (continuar) {
  let opcao = prompt(
    "===== MENU CANTINA =====\n" +
    "1 - Inserir um novo produto\n" +
    "2 - Listar todos os produtos\n" +
    "3 - Buscar por preço igual ou inferior a\n" +
    "4 - Buscar pelo nome\n" +
    "5 - Fechar programa"
  );

  if (opcao === "1") {
    
    let novoId = cardapio.length + 1;
    let nome = prompt("Nome do produto:");
    let preco = parseFloat(prompt("Preço:"));
    let categoria = prompt("Categoria (Salgado, Bebida, Doce):");

    cardapio.push({ id: novoId, nome: nome, preco: preco, categoria: categoria });
    console.log("Produto inserido com sucesso!");

  } else if (opcao === "2") {
    
    console.log("--- Produtos no cardápio ---");
    for (let produto of cardapio) {
      console.log(produto.id + " - " + produto.nome + " | R$ " + produto.preco + " | " + produto.categoria);
    }

  } else if (opcao === "3") {
    
    let limite = parseFloat(prompt("Digite o preço máximo:"));
    console.log("--- Produtos com preço até R$ " + limite + " ---");
    for (let produto of cardapio) {
      if (produto.preco <= limite) {
        console.log(produto.nome + " - R$ " + produto.preco);
      }
    }

  } else if (opcao === "4") {
    
    let busca = prompt("Digite o nome do produto:");
    let encontrado = false;
    for (let produto of cardapio) {
      if (produto.nome.toLowerCase() === busca.toLowerCase()) {
        console.log("Encontrado: " + produto.nome + " | R$ " + produto.preco + " | " + produto.categoria);
        encontrado = true;
      }
    }
    if (!encontrado) {
      console.log("Produto não encontrado.");
    }

  } else if (opcao === "5") {
    console.log("Encerrando o programa...");
    continuar = false;

  } else {
    console.log("Opção inválida, tente novamente.");
  }
}