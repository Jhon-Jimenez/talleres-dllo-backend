// Controller - Taller Práctica 2

// 1. GetNombresCursos
export function GetNombresCursos(estudiante: any): string[] {
    let nombresCursos: string[] = [];
    nombresCursos = estudiante.cursos.map((curso: any) => curso.nombre);
    return nombresCursos;
}

// 2. GetNotaMaxima
export function GetNotaMaxima(estudiante: any): number {
    let notas: number[] = estudiante.cursos.map((curso: any) => curso.nota);
    return Math.max(...notas);
}

// 3. BolAltura165
export function BolAltura165(estudiante: any): boolean {
    let mayor = false;
    if (estudiante.altura > 1.65) {
        mayor = true;
    }
    return mayor;
}

// 4. GetNombreCompleto
export function GetNombreCompleto(estudiante: any): string {
    const nombreCompleto = `${estudiante.nombre} ${estudiante.apellido}`;
    return nombreCompleto;
}

// 5. GetDiferenciaAltura
export function GetDiferenciaAltura(estudiante1: any, estudiante2: any): number {
    const altura1 = estudiante1.altura;
    const altura2 = estudiante2.altura;
    if (altura1 > altura2) {
        return altura1 - altura2;
    } else {
        return altura2 - altura1;
    }
}

// 6. AgregarNombreCompleto
export function AgregarNombreCompleto(estudiante: any): any {
    const estudianteConNombreCompleto = { ...estudiante };
    estudianteConNombreCompleto.nombreCompleto = GetNombreCompleto(estudiante);
    return estudianteConNombreCompleto;
}
