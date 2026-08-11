//Crie um objeto chamado celular com as propriedades: marca, modelo, nivelBateria (ex: 85), espacoLivreGB (ex: 32)
//Utilize o for...in para ler os valores e substituir os valores atuais do objeto.
//Utilize outro for...in para imprimir no console os dados atualizados.

let celular = {
    marca: "Samsung",
    modelo: "M52",
    nivelBateria: 100,
    espacoLivreGB: 64
}

for(let propriedade in celular){
    console.log("Valor atual de"+ propriedade + ":" + celular[propriedade]);
}

celular.marca = "xaiomi";
celular.modelo = "pocox7";
celular.nivelBateria = 45;
celular.espacoLivreGB = 16;

for (let propriedade in celular) {
  console.log(propriedade + ": " + celular[propriedade]);
}