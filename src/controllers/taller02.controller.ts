// Controller - Taller 02

// Punto 1 - findMax
export function findMax(lista: number[]): number | undefined {
    if (lista.length === 0) return undefined;
    let maximo = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maximo) {
        maximo = lista[i];
        }
    }
    return maximo;
}

// Punto 2 - includes
export function includes(lista: number[], numero: number): boolean {
    let valorEncontrado = false;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
        valorEncontrado = true;
        return valorEncontrado;
        }
    }
    return valorEncontrado;
}

// Punto 3 - sum
export function sum(lista: number[]): number {
    if (lista.length === 0) return 0;

    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

// Punto 4 - missingNumbers
export function missingNumbers(lista: number[]): number[] {
    if (lista.length === 0) return [];

    let menor = lista[0];
    let mayor = lista[0];
    let faltantes: number[] = [];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) menor = lista[i];
        if (lista[i] > mayor) mayor = lista[i];
    }

    for (let j = menor + 1; j < mayor; j++) {
        if (!includes(lista, j)) {
        faltantes.push(j);
        }
    }
    return faltantes;
}
