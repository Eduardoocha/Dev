// WHILE
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
} // Resultado: 1 2 3 4 5

//WHILE SOMA
let soma = 0;
let i = 1;

while (i <= 5) {
    soma += i;
    i++;
}
console.log("A soma dos números de 1 a 5 é: " + soma); // Resultado: A soma dos numeros de 1 a 5 e: 15

//WHILE COM FOR
let soma1 = 0;

for (let i = 1; i <= 5; i++) {
    soma1 += i;
}
console.log("A soma dos números de 1 a 5 é: " + soma1); // Resultado: A soma dos numeros de 1 a 5 e: 15

//WHILE COM DOIS
let somaPrimeiroLoop = 0;
let somaSegundoLoop = 0;

for (let i = 1; i <= 5; i++) {
    somaPrimeiroLoop += i;
}
for (let j = 1; j <= 5; j++) {
    somaSegundoLoop += j;
}
let resultadoSomaTotal = somaPrimeiroLoop + somaSegundoLoop
    console.log("Soma do primeiro loop: " + somaPrimeiroLoop); // Resultado: Soma do primeiro loop: 15
    console.log("Soma do segundo loop: " + somaSegundoLoop); // Resultado: Soma do primeiro loop: 15
    console.log("Resultado da soma total: " + resultadoSomaTotal); // Resultado: Resultado da soma total: 30
