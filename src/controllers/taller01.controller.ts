// Controller - Taller 01

// Punto 1 - convertidorTemp
export function convertidorTemp(tc: number): number {
    let tf = tc * (9 / 5) + 32;
    return tf;
}

// Punto 2 - resolvedor
export function resolvedor(a: number, b: number, c: number, sel: number): number | string {
    let xp = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    let xn = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

    if (sel === 0) {
        return xp;
    } else if (sel === 1) {
        return xn;
    } else {
        return "Seleccione 0 para el positivo o 1 para el negativo";
    }
}

// Punto 3 - mejorParidad
export function mejorParidad(n: number): string {
    let pa = "El número es par";
    let im = "El número es impar";
    let error = "Ingrese un número de manera correcta";

    if (n % 2 === 0) {
        return pa;
    } else if (n % 2 === 1) {
        return im;
    } else {
        return error;
    }
}

// Punto 4 - peorParidad
export function peorParidad(n: number): string {
    let pa = "El número es par";
    let im = "El número es impar";
    let error = "Error con el número ingresado";

    if (n == 0) {
        return pa;
    } else if (n === 1) {
        return im;
    } else if (n === 2) {
        return pa;
    } else if (n === 3) {
        return im;
    } else if (n === 4) {
        return pa;
    } else if (n === 5) {
        return im;
    } else if (n === 6) {
        return pa;
    } else if (n === 7) {
        return im;
    } else if (n === 8) {
        return pa;
    } else if (n === 9) {
        return im;
    } else if (n === 10) {
        return pa;
    } else {
        return error;
    }
}

