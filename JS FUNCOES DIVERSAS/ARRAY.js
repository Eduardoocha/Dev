let array = [] // Criando array. 

array.push(3, 4, 6, 12) // O método.push(), insere elementos

console.log(array)

array.push(2)

console.log(array) // Insere número 2 no final da lista. 

array.pop(2) // Método.pop() sem o 2 como parâmetro, Estaria retirando o último elemento da lista. 

console.log(array) // Neste caso, vai aparecer apenas o elemento 3 dentro do Array. 

for(let i = 0; i < array.length; i++){
    console.log(array[i]) 
}

// REVERSÃO DOS NÚMEROS
console.log(array.reverse())
console.log(array)