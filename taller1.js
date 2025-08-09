// Punto 1 - convertidorTemp
function convertidorTemp(tc) {
    let tf = tc * (9 / 5) + 32
    return tf
}
// console.log(convertidorTemp(-40))

// Punto 2 - resolvedor
function resolvedor(a, b, c, sel) {
    let xp = (-b + (Math.sqrt(b ** 2 - 4 * a * c))) / (2 * a)
    let xn = (-b - ((b ** 2 - 4 * a * c))) / (2 * a)

    if (sel === 0) {
        return xp
    } else if (sel === 1) {
        return xn
    } else {
        console.log("Seleccione 0 para el positivo o 1 para el negativo")
    }
}
// console.log(resolvedor(1, 5, 4, 0))

// Punto 3 - mejorParidad
function mejorParidad(n) {
    let pa = "El número es par"
    let im = "El número es impar"
    let error = "Ingrese un número de manera correcta"
    if (n % 2 === 0) {
        return pa
    } else if (n % 2 === 1) {
        return im
    } else {
        return error
    }
}
// console.log(mejorParidad(40))


// Punto 4 - peorParidad
function peorParidad(n) {
    let pa = "El número es par"
    let im = "El número es impar"
    let error = "Error con el número ingresado"
    if (n == 0) {
        return pa
    } else if (n === 1) {
        return im
    } else if (n === 2) {
        return pa
    } else if (n === 3) {
        return im
    } else if (n === 4) {
        return pa
    } else if (n === 5) {
        return im
    } else if (n === 6) {
        return pa
    } else if (n === 7) {
        return im
    } else if (n === 8) {
        return pa
    } else if (n === 9) {
        return im
    } else if (n === 10) {
        return pa
    } else {
        return error
    }
}
// console.log(peorParidad(6))