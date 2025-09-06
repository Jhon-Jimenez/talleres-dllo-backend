// Punto 1
// Desarrolle una funcion llamada desglosarString que reciba una string, y la string "vocales" o "consonantes", 
// y retorne la cantidad de vocales o consonantes de la string recibida.

function desglosarString(cadena, tipo) {
    const vocales = 'aeiouAEIOU'
    const esVocal = (letra) => vocales.includes(letra)
    const esConsonante = (letra) => /[a-zA-Z]/.test(letra) && !esVocal(letra)

    const letras = cadena.split('')

    if (tipo === 'vocales') {
        return letras.filter(esVocal).length
    } else if (tipo === 'consonantes') {
        return letras.filter(esConsonante).length
    } else {
        return "Tipo no válido. Use 'vocales' o 'consonantes'."
    }       
}

console.log("Resultados Punto 1:")
console.log(desglosarString("murcielagos", "vocales")) // 5
console.log(desglosarString("murcielagos", "consonantes")) // 6
console.log("")

// Punto 2
//  Desarrolle una funcion llamada twoSum que reciba una lista de numero enteros y otro numero entero 
// y retorne los indices de los numeros del arreglo que sumados sean el otro numero. 
//  No se permite utilizar el mismo numero dos veces.

function twoSum(lista, suma) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] + lista[j] === suma) {
                return [i, j]
            }
        }
    }
}

console.log("Resultados Punto 2:")
console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 4, 2], 6)) // [1, 2]
console.log(twoSum([1, 2, 3, 4, 5], 9)) // [3, 4]
console.log(twoSum([10, 15, 3, 7], 17)) // [0, 3]
console.log("")

// Punto 3
// Desarrolle una funcion llamada conversionRomana que reciba una string de cifras romanas 
// y retorne el equivalente en cifras arábigas.

function conversionRomana(cadena) {
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0
    let prevValor = 0

    for (let i = cadena.length - 1; i >= 0; i--) {
        const letra = cadena[i]
        const valor = valores[letra]
        if (valor < prevValor) {
            total -= valor
        } else {
            total += valor
        }
        prevValor = valor
    }
    return total
}

console.log("Resultados Punto 3:")
console.log(conversionRomana("III")) // 3
console.log(conversionRomana("XIV")) // 14
console.log(conversionRomana("MMXXIV")) // 2024
console.log(conversionRomana("MCMXCVII")) // 1997
console.log("")

// Punto 4
//  Desarrolle una funcion llamada descomposicion que reciba una string de palabras separada por comas, donde
// la primera palabra es la palabra a descomponer y el resto son el diccionario a utilizar. 
// La función debe retornar las dos palabras del diccionario que compongan la palabra a descomponer.

function descomposicion(cadena) {
    const partes = cadena.split(",")
    const palabra = partes[0];
    const diccionario = partes.slice(1)

    for (let i = 0; i < diccionario.length; i++) {
        for (let j = 0; j < diccionario.length; j++) {
            if (i !== j) {
                const p1 = diccionario[i];
                const p2 = diccionario[j];
                if (p1 + p2 === palabra) {
                    return [p1, p2]
                }
            }
        }
    }
return []
}

console.log("Resultados Punto 4:")
console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu")) // ["mal", "humor"]
console.log(descomposicion("raro,r,ra,rar,ro")) // ["ra", "ro"]
console.log(descomposicion("album,al,um,bum,albu")) // ["al", "bum"]