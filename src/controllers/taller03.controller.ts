// Controller - Taller 03

// Punto 1 - desglosarString
export function desglosarString(cadena: string, tipo: string): number | string {
    const vocales = "aeiouAEIOU";
    const esVocal = (letra: string) => vocales.includes(letra);
    const esConsonante = (letra: string) => /[a-zA-Z]/.test(letra) && !esVocal(letra);

    const letras = cadena.split("");

    if (tipo === "vocales") {
        return letras.filter(esVocal).length;
    } else if (tipo === "consonantes") {
        return letras.filter(esConsonante).length;
    } else {
        return "Tipo no válido. Use 'vocales' o 'consonantes'.";
    }
}

// Punto 2 - twoSum
export function twoSum(lista: number[], suma: number): number[] | undefined {
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
        if (lista[i] + lista[j] === suma) {
            return [i, j];
        }
        }
    }
    return [];
}

// Punto 3 - conversionRomana
export function conversionRomana(cadena: string): number {
    const valores: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    let prevValor = 0;

    for (let i = cadena.length - 1; i >= 0; i--) {
        const letra = cadena[i];
        const valor = valores[letra];
        if (valor < prevValor) {
        total -= valor;
        } else {
        total += valor;
        }
        prevValor = valor;
    }
    return total;
}

// Punto 4 - descomposicion
export function descomposicion(cadena: string): string[] {
    const partes = cadena.split(",");
    const palabra = partes[0];
    const diccionario = partes.slice(1);

    for (let i = 0; i < diccionario.length; i++) {
        for (let j = 0; j < diccionario.length; j++) {
        if (i !== j) {
            const p1 = diccionario[i];
            const p2 = diccionario[j];
            if (p1 + p2 === palabra) {
            return [p1, p2];
            }
        }
        }
    }
    return [];
}
