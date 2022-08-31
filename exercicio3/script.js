//Crie a const para a frase aqui

const fraseJorge =
  "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS, mas não deixe o gato sair'";

let novaFrase = fraseJorge.replace("verde", "rosa");
novaFrase = fraseJorge.replace("azul", "laranja");

console.log(novaFrase);

console.log(novaFrase.includes("verde"));
console.log(novaFrase.includes("laranja"));
