//Substituição de texto em uma string:

let texto = "Olá, mundo!!!";
let novoTexto = texto.replace("mundo", "JavaScript"); 
console.log(novoTexto); // Resultado: "Olá, JavaScript!"



//Verificação de existência de uma substring em uma string:

let texto2 = "Olá, mundo!";
console.log(texto2.includes("mundo")); // Resultado: true 
console.log(texto.includes("JavaScript")); // Resultado: false



//Divisão de uma string em um array com base em um delimitador:

let texto3 = "JavaScript é uma linguagem poderosa",
let palavras = texto3.split(""); 
console.log(palavras); // Resultado: ["lavascript", "e", "uma", "linguagem", "poderosa"]



//Remoção de espaços em branco no início e no final de uma string:

let texto4 = "Olá, mundo!";
let novoTexto1 = texto.trim();
console.log(novoTexto1); // Resultado: "Olá, mundo!



//Verificação do inicio ou fim de uma string:

let texto5 = "Olá, mundo!";
console.log(texto5.startsWith("Ola")); // Resultado: true
console.log(texto5.endsWith("mundo!")); // Resultado: true