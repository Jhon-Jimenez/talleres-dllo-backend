// Punto 1 - findMax
// Desarrolle una funcion llamada findMax que reciba una lista de números por parámetro 
// y retorne el mayor valor.

function findMax(lista){
    if (lista.length === 0) return undefined

    let maximo = lista[0]
    for(let i = 1; i < lista.length; i++){
        if(lista[i] > maximo){
            maximo = lista[i]
        }
    }
    return maximo
}

numeros = [3, 17, -1, 4, -19]
console.log(findMax(numeros)) // 17

// Punto 2 - includes
// Desarrolle una funcion llamada includes que reciba una lista de números y un 
// numero por parámetro y retorne un booleano representando si el numero se 
// encuentra en la lista.

function includes(lista, numero) {
    let valorEncontrado = false

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            valorEncontrado = true
            return valorEncontrado
        }
    }
    return valorEncontrado
}


console.log(includes(numeros, 2)) // false
console.log(includes(numeros, 4)) // true

// Punto 3 - sum
// Desarrolle una funcion llamada sum que reciba una lista de números 
// y retorne la suma de los elementos de la lista.

function sum(lista){
    if (lista.length === 0) return 0

    let suma = 0
    for(let i = 0; i < lista.length; i++){
        suma += lista[i]
    }
    return suma
}

console.log(sum(numeros)) // 4

// Punto 4 - missingNumbers
// Desarrolle una funcion llamada missingNumbers que reciba una lista de números 
// y retorne una lista de los números faltantes entre el menor y mayor de la lista.

function missingNumbers(lista){
    if (lista.length === 0) return []

    let menor = lista[0]
    let mayor = lista[0]
    let faltantes = []

    for(let i = 1; i < lista.length; i++){
        if(lista[i] < menor){
            menor = lista[i]
        }
        if(lista[i] > mayor){
            mayor = lista[i]
        }
    }

    for(let j = menor + 1; j < mayor; j++){ 
        if(!includes(lista, j)){
            faltantes.push(j) 
        }
    }
    return faltantes
}

numeros2 = [7, 2, 4, 6, 3, 9] 
console.log(missingNumbers(numeros2)) // [5, 8]


