// Ejercicios de Practica para el Parcial 1

// 1.Desarrolle una función que reciba una lista de strings, 
// y retorne la cantidad de strings con longitud mayor a 25 caracteres.

function ContarStrings(lista) {
    let contador = 0

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > 25) {
            contador++
        }
    }
    return contador
}

/*
lista1 = ["Hola, mi nombre es Juan", "Estoy aprendiendo JavaScript en el curso de desarrollo web", "Me gusta programar", "Este es un string muy largo que definitivamente tiene más de veinticinco caracteres"]
console.log(ContarStrings(lista1)) // 2
*/

// 2. Desarrolle una función que retorne el resultado de una exponenciación 
// dada la base y el exponente sin utilizar el operador respectivo.

function Exponenciacion_simple(base, exp) {
    let res = 1

    for (let i= 0; i < exp; i++) {
        res *= base
    }
    return res
}

// console.log(Exponenciacion_simple(2, 3)) // 8

// 3. Desarrolle una función que retorne las ocurrencias de un elemento en una lista.

function Ocurrencias(lista, elemento) {
    let contador = 0

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            contador++
        }
    }
    return contador
}

/*
lista2 = [1, 2, 3, 4, 3, 3, 5, 6]
console.log(Ocurrencias(lista2, 3)) // 3
*/

// 4. Desarrolle una función que retorne el elemento n de la serie Fibonacci

function Fibonacci(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    let a = 0, b = 1, temp

    for (let i = 2; i <= n; i++) {
        temp = a + b
        a = b
        b = temp
    }
    return b
}

// console.log(Fibonacci(7)) // 13

// 5. Desarrolle una función que retorne si una lista tiene duplicados o no.

function Duplicados1(lista) {
    let elementos = new Set()

    for (let i = 0; i < lista.length; i++) {
        if (elementos.has(lista[i])) {
            return true
        }
        elementos.add(lista[i])
    }
    return false
}

function Duplicados2(lista) {
    const unicos = new Set(lista)
    return unicos.size !== lista.length
}

/*
console.log(Duplicados1([1, 2, 3, 4, 5])) // false
console.log(Duplicados2([1, 2, 3, 2, 5])); // true
*/

// 6. Desarrolle una función que retorne el elemento mas repetido de una lista.

function Repetido(lista) {
    let contador = {}
    let masRepetido = lista[0]
    
    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i]

        if (!contador[elemento]) {
            contador[elemento] = 1
        } else {
            contador[elemento]++
        }

        if (contador[elemento] > contador[masRepetido]) {
            masRepetido = elemento
        }
    }

    return masRepetido
}

/*
lista3 = [1, 3, 2, 3, 4, 3, 2]
console.log(Repetido(lista3)) // 3
*/

// 7. Desarrolle una función que ordene una lista desordenada.

function Ordenar(lista) {
    return lista.sort(function(a, b) {
        return a - b
    });
}

function OrdenarBurbuja(lista) {
    let n = lista.length
    let intercambio

    do {
        intercambio = false

        for (let i = 0; i < n - 1; i++) {
            if (lista[i] > lista[i + 1]) {

                let temp = lista[i]
                lista[i] = lista[i + 1]
                lista[i + 1] = temp

                intercambio = true
            }
        }

        n--
    } while (intercambio)

    return lista
}

/*
console.log(Ordenar([5, 3, 8, 1, 2])) // [1, 2, 3, 5, 8]
console.log(OrdenarBurbuja([5, 3, 8, 1, 2])) // [1, 2, 3, 5, 8]
*/

// 8. Desarrolle una función que retorne el n-esimo elemento mas grande de una lista.

function NElementoMayor(lista, n) {

    lista.sort(function(a, b) {
        return b - a
    });

    return lista[n - 1]
}

/*
console.log(NElementoMayor([5, 3, 8, 1, 2], 1)) // 8 (el más grande)
console.log(NElementoMayor([5, 3, 8, 1, 2], 3)) // 3 (tercer más grande)
*/

// 9. Desarrolle una función que retorne el producto maximo de dos numeros de una lista.

function ProductoMaximo(lista) {

    lista.sort(function(a, b) {
        return a - b
    });

    let n = lista.length

    let pro1 = lista[n - 1] * lista[n - 2]
    let pro2 = lista[0] * lista[1]

    return Math.max(pro1, pro2)
}

/*
console.log(ProductoMaximo([5, 3, 8, 1, 2]))     // 40 (8 * 5)
console.log(ProductoMaximo([-10, -9, 1, 2, 3]))  // 90 (-10 * -9)
*/

// 10. Desarrolle una función que realice una busqueda binaria de un elemento (y lo retorne).

function BusquedaBinaria(lista, objetivo) {
    let inicio = 0
    let fin = lista.length - 1

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (lista[medio] === objetivo) {
            return lista[medio]
        }

        if (lista[medio] < objetivo) {
            inicio = medio + 1
        } else {
            fin = medio - 1
        }
    }

    return null
}

/*
console.log(BusquedaBinaria([1, 3, 5, 7, 9], 7)) // 7
console.log(BusquedaBinaria([1, 3, 5, 7, 9], 4)) // null
*/

