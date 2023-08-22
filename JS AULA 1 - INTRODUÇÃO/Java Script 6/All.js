//Utilizando operadores de atribuição abreviados:

let valor = 10;

valor += 5; // Equivalente a: valor = valor + 5;

console.log(valor); // Resultado: 15



//Strings


//Comprimento de uma string:

let texto = "Olá, mundo!";

console.log(texto.length); //Resultado: 12



//Acesso a caracteres individuais de uma string:

let texto1 = "JavaScript";

console.log(texto1[0]); // Resultado: "J"

console.log(texto1[4]); // Resultado: "S"



//Concatenação de strings:

let saudacao = "Olá";

let nome = "Maria";

let mensagem = saudacao + "," + nome + "!";

console.log(mensagem); // Resultado: "Olá, Maria!"



//Conversão para maiúsculas e minúsculas:

let texto3 = "JavaScript";

console.log(texto3.toUpperCase()); // Resultado: "JAVASCRIPT"

console.log(texto3.toLowerCase()); // Resultado: "javascript"



//Extração de uma parte de uma string:

let texto4 = "Olá, mundo!";

let parte = texto4.slice(5, 9);

console.log(parte); // Resultado: "mun"