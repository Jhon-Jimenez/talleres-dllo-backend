// Ejercicios de Practica para el Parcial 2

// En la variable `datos` se encuentran los datos del archivo `15-datos-parcial-01.json`

const datos = require("./15-datos-parcial-01.json");

console.log("Estudiante original")
console.log(datos[120])
console.log("-------------------")

// 1. Desarrolle una función que reciba un estudiante y retorne los nombres de los cursos del estudiante.

function GetNombresCursos(estudiante) {
    let nombresCursos = []
    nombresCursos = estudiante.cursos.map(curso => curso.nombre)
    return nombresCursos
}

console.log("Nombres de los cursos del estudiante")
console.log(GetNombresCursos(datos[120]))

// 2. Desarrolle una función que reciba un estudiante y retorne la nota maxima lograda por el estudiante.

function GetNotaMaxima(estudiante) {
    let notas = []
    notas = estudiante.cursos.map(curso => curso.nota)
    return Math.max(...notas)
}

console.log("Nota maxima del estudiante")
console.log(GetNotaMaxima(datos[120]))

// 3. Desarrolle una función que reciba un estudiante y retorne si el estudiante mide mas de 1,65m.

function BolAltura165(estudiante) {
    let mayor = false
    if (estudiante.altura > 1.65) {
        mayor = true
    }
    return mayor
}

console.log("El estudiante mide mas de 1.65m?")
console.log(BolAltura165(datos[120]))

// 4. Desarrolle una función que reciba un estudiante el nombre completo del estudiante.

function GetNombreCompleto(estudiante) {
    nombreCompleto = estudiante.nombre + " " + estudiante.apellido
    return nombreCompleto
}

console.log("Nombre completo del estudiante")
console.log(GetNombreCompleto(datos[120]))

// 5. Desarrolle una función que reciba dos estudiantes y retorne la diferencia de altura entre los estudiantes.

function GetDiferenciaAltura(estudiante1, estudiante2) {
    let altura1 = estudiante1.altura
    let altura2 = estudiante2.altura

    if (altura1 > altura2) {
        return altura1 - altura2
    } else {
        return altura2 - altura1
    }
}

console.log("Diferencia de altura entre dos estudiantes")
console.log(GetDiferenciaAltura(datos[119], datos[120]))

// 6. Desarrolle una función que reciba un estudiante y retorne el estudiante con el campo 'nombreCompleto' agregado.

function AgregarNombreCompleto(estudiante) {
    let estudianteConNombreCompleto = { ...estudiante }
    estudianteConNombreCompleto.nombreCompleto = GetNombreCompleto(estudiante)
    return estudianteConNombreCompleto
}

console.log("Estudiante con el campo 'nombreCompleto' agregado")
console.log(AgregarNombreCompleto(datos[120]))








