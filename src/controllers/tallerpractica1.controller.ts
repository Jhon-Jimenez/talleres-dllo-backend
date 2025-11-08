// Controller - Taller Práctica 1

// 1. ContarStrings
export function ContarStrings(lista: string[]): number {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > 25) {
        contador++;
        }
    }
    return contador;
}

// 2. Exponenciacion_simple
export function Exponenciacion_simple(base: number, exp: number): number {
    let res = 1;
    for (let i = 0; i < exp; i++) {
        res *= base;
    }
    return res;
}

// 3. Ocurrencias
export function Ocurrencias(lista: any[], elemento: any): number {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
        contador++;
        }
    }
    return contador;
}

// 4. Fibonacci
export function Fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0,
        b = 1,
        temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// 5. Duplicados1
export function Duplicados1(lista: any[]): boolean {
    let elementos = new Set();
    for (let i = 0; i < lista.length; i++) {
        if (elementos.has(lista[i])) {
        return true;
        }
        elementos.add(lista[i]);
    }
    return false;
}

// 5b. Duplicados2
export function Duplicados2(lista: any[]): boolean {
    const unicos = new Set(lista);
    return unicos.size !== lista.length;
}

// 6. Repetido
export function Repetido(lista: any[]): any {
    let contador: { [key: string]: number } = {};
    let masRepetido = lista[0];

    for (let i = 0; i < lista.length; i++) {
        let elemento = lista[i];
        if (!contador[elemento]) {
        contador[elemento] = 1;
        } else {
        contador[elemento]++;
        }

        if (contador[elemento] > contador[masRepetido]) {
        masRepetido = elemento;
        }
    }

    return masRepetido;
}

// 7. Ordenar
export function Ordenar(lista: number[]): number[] {
    return lista.sort((a, b) => a - b);
}

// 7b. OrdenarBurbuja
export function OrdenarBurbuja(lista: number[]): number[] {
    let n = lista.length;
    let intercambio;
    do {
        intercambio = false;
        for (let i = 0; i < n - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            let temp = lista[i];
            lista[i] = lista[i + 1];
            lista[i + 1] = temp;
            intercambio = true;
        }
        }
        n--;
    } while (intercambio);
    return lista;
}

// 8. NElementoMayor
export function NElementoMayor(lista: number[], n: number): number {
    lista.sort((a, b) => b - a);
    return lista[n - 1];
}

// 9. ProductoMaximo
export function ProductoMaximo(lista: number[]): number {
    lista.sort((a, b) => a - b);
    let len = lista.length;
    let pro1 = lista[len - 1] * lista[len - 2];
    let pro2 = lista[0] * lista[1];
    return Math.max(pro1, pro2);
}

// 10. BusquedaBinaria
export function BusquedaBinaria(lista: number[], objetivo: number): number | null {
    let inicio = 0;
    let fin = lista.length - 1;
    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (lista[medio] === objetivo) return lista[medio];
        if (lista[medio] < objetivo) inicio = medio + 1;
        else fin = medio - 1;
    }
    return null;
}
