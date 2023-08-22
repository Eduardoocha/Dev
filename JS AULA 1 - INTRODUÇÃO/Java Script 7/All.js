//substituicao de texto em uma string

let texto = "Ola, mundo!";
let novoTexto = texto.replace("mundo", "JavaScript");
console.log(novoTexto);



//verificacao de existencia de uma substring em uma string

let texto1 = "Ola, mundo!";
console.log(texto1.includes("mundo"));
console.log(texto1.includes("JavaScript"));



//divisao de uma stringem um array com base em um delimitador

let texto2 = "JavaScript e uma linguagem poderosa";
let palavras = texto2.split(" ");
console.log(palavras);



//remocao de espacos em branco no inicio e no final de uma string

let texto3 = " Ola, mundo! ";
let novoTexto1 = texto3.trim();
console.log(novoTexto1);



//verificacao do inicio ou fim de uma string

let texto4 = "Ola, mundo!";
console.log(texto.startsWith("Ola"));
console.log(texto.endsWith("mundo!"));