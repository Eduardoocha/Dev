// Array vazio
let emptyArray = [];

// Array com elementos
let frutas = ['maça', 'banana', 'laranja'];

// Array de números
let numeros = [1, 2, 3, 4, 5]
var vetor1 = [1, 2, 3];
var vetor2 = [4, 5, 6];
var vetor3 = [7, 8, 9];
var resultado = vetor1.concat(vetor2, vetor3);

// Exibindo o resultado no console
console.log(resultado)
var vetor3 = [7, 8, 9];
var resultado = vetor1.concat(vetor2, vetor3);
var resultado1 = vetor1, vetor2, vetor3;

// Exibindo o resultado no console
console.log(resultado);

// Outro exemplo
var cores1 = ['Verde', 'Amarelo', 'Azul', 'Branco'];
var cores2 = ['Laranja', 'Vermelho', 'Preto', 'Cinza'];

    console.log('Conteúdo do vetor 1:', cores1.join(', '));
    console.log('Conteúdo do vetor 2:', cores2.join(', '));
    console.log('Segunda posição do vetor 1:', cores1[1]);
    console.log('Terceira posição do vetor 2:', cores2[2]);

// Acessando e Modificando Elementos
let frutas1 = ['maça', 'banana', 'laranja'];

// Acessando elementos
let firstFruit = frutas1[0]; // 'maça'

// Modificando elementos
frutas1[1] = 'uva'; // Agora, frutas é ['maça', 'uva', 'laranja']
console.log(frutas1[1])
console.log(frutas1[2])

// Adicionando e Removendo Elementos
let animais = ['cachorro', 'gato', 'elefante'];

// Adicionando elementos no final
animais.push('leão'); // Agora, animais é ['cachorro', 'gato', 'elefante', 'leão']
console.log(animais)

// Removendo o último elemento
let removedAnimal = animais.pop(); // 'leão' foi removido
console.log(animais)

//Percorrendo Arrays
let numeros1 = [1, 2, 3, 4, 5];
let nomes = ['Eduardo', 'Lidyane', 'Davi', 'Felippe', 'Laura'];
for (let i = 0; i < numeros1.length; i++) {
    console.log(`Número: ${numeros1[i]} - Pessoa: ${nomes[i]}`);
}

//  Métodos de Iteração
let cor = ['vermelho', 'verde', 'azul'];

// Usando forEach para percorrer o array 'cor'
cor.forEach(function(cor) {
    console.log(cor);
});
let numeros2 = [1, 2, 3];
let dobro = numeros2.map(function(number) {
    return number * 2;
});
console.log(dobro); // O resultado dobro será exibido no console
let idade = [18, 25, 12, 35, 40];
let adulto = idade.filter(function(age) {
    return age >= 18;
});
console.log(adulto); // O resultado adulto será exibido no console
let numeros3 = [1, 2, 3, 4, 5];
let soma = numeros3.reduce(function(total, somanumeros) {
return total + somanumeros;
}, 0);
console.log(soma);
// soma é 15
let animais1 = ['cachorro', 'gato', 'elefante', 'leão', 'girafa'];
for (let i = 0; i < animais1.length; i++) {
console.log(animais1[i]);
}