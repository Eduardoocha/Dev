// Propriedades fundamentais de strings pt. 2
let nome = 'João'
let sobrenome = "Maria"

let concatenado = nome.concat(sobrenome) 
let exemplo = "blablabla"
console.log(exemplo)

let exemplo_2 = new String("blablabla")
console.log(exemplo_2)

let nome1 = 'Zé'
let sobrenome1 = "Ruela"

concatenado = `${nome1} ${sobrenome1}`
console.log(concatenado)


let primeiroNome = 'Ivan';
let segundoNome = 'Morales';
let fullName = `Nome completo : ${primeiroNome} ${segundoNome}`;

// isto se chama interpolação, 
// que é quando você coloca uma variável dentro de uma string! 
// Para criar essa string, 
// Para se conseguir interagir com as variáveis, é preciso coloca a crase ( ` ). 

console.log(fullName)
