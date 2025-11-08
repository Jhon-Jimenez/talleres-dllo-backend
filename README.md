# Proyecto 01 — Desarrollo de Aplicaciones Web Backend

Repositorio correspondiente al desarrollo del **Proyecto 01** de la materia **Desarrollo de Aplicaciones Web Backend**.

Este proyecto unifica todos los talleres desarrollados en clase dentro de un backend funcional construido con **Node.js**, **Express** y **TypeScript**.

---

## 📁 Estructura del Proyecto

- **talleres-dllo-backend/**
  - **Archivos Originales/** → Carpeta que contiene los talleres originales en JavaScript  
  - **src/**
    - **controllers/** → Lógica principal de cada taller  
      - `taller01.controller.ts`  
      - `taller02.controller.ts`  
      - `taller03.controller.ts`  
      - `taller-practica-1.controller.ts`  
      - `taller-practica-2.controller.ts`
    - **routes/** → Endpoints HTTP (rutas tipo POST)  
      - `taller01.routes.ts`  
      - `taller02.routes.ts`  
      - `taller03.routes.ts`  
      - `taller-practica-1.routes.ts`  
      - `taller-practica-2.routes.ts`
    - `server.ts` → Punto de entrada principal del servidor  
    - **actions/** → Reservado para lógica futura o funciones auxiliares  
  - `15-datos-parcial-01.json` → Archivo de datos utilizado en el Taller de Práctica 2  
  - `package.json`  
  - `tsconfig.json`  
  - `README.md`

---

## ⚙️ **Instalación y ejecución**

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Jhon-Jimenez/talleres-dllo-backend.git
   cd talleres-dllo-backend
2. Instalar dependencias:
   npm install
3. Ejecutar el servidor en modo desarrollo:
   npm run dev
4. Verás en la consola:
   Servidor corriendo en puerto 8080

El servidor quedará disponible en
http://localhost:8080

## 🚀 Tecnologías utilizadas

Node.js + Express

TypeScript

Nodemon + Ts-node (para entorno de desarrollo)

CORS (para control de accesos externos)

## 🧩 Estructura lógica

Cada taller funciona como un módulo independiente con:
- Un controller que contiene las funciones del taller.
- Un route que define los endpoints HTTP (todos tipo POST).
- Parámetros recibidos en el body (JSON) de la petición.

## 🧪 Endpoints disponibles

Cada taller cuenta con sus propios endpoints de tipo **POST**, siguiendo la convención:  
`http://localhost:8080/api/v1/<nombre-del-taller>/<nombre-funcion>`

Todos los parámetros se envían en el **body** del request en formato **JSON**.  
Ejemplo de uso con Thunder Client o Postman:

http://localhost:8080/api/v1/taller1/convertidor-temp
{
  "tc": 25
}

---

Taller 01

URL base: /api/v1/taller1

Endpoints con su descripción y un body de ejemplo:

- /convertidor-temp - Convierte °C a °F - { "tc": number }
- /resolvedor - Calcula las raíces de una ecuación cuadrática. - { "a": number, "b": number, "c": number, "sel": 0 o 1 }
- /mejor-paridad - Determina si un número es par o impar - { "n": number }
- /peor-paridad - Verifica paridad con un método peor - { "n": number }

Taller 02

URL base: /api/v1/taller2

Endpoints con su descripción y un body de ejemplo:

- /find-max - Devuelve el valor máximo de una lista - { "lista": number[] }
- /includes - Verifica si un número está en la lista - { "lista": number[], "numero": number }
- /sum - Suma todos los elementos de una lista - { "lista": number[] }
- /missing-numbers - Retorna números faltantes entre el menor y mayor - { "lista": number[] }

Taller 03

URL base: /api/v1/taller3

Endpoints con su descripción y un body de ejemplo:

- /desglosar-string - Cuenta vocales o consonantes - { "cadena": string, "tipo": "vocales" o "consonantes" }
- /two-sum - Retorna los índices de dos números que sumen el valor dado - { "lista": number[], "suma": number }
- /conversion-romana - Convierte números romanos a arábigos - { "cadena": string }
- /descomposicion - Retorna las dos palabras del diccionario que componen una palabra - { "cadena": string }

Taller Práctica 1

URL base: /api/v1/taller-practica-1

Funciones con su descripción y un body de ejemplo:

- /contar-strings - Cuenta strings con más de 25 caracteres - { "lista": string[] }
- /exponenciacion - Calcula la potencia sin usar el operador ** - { "base": number, "exp": number }
- /ocurrencias - Retorna el número de veces que aparece un elemento - { "lista": any[], "elemento": any }
- /fibonacci - Retorna el n-ésimo número de la serie Fibonacci - { "n": number }
- /duplicados1 / /duplicados2 - Verifica si existen duplicados en una lista - { "lista": any[] }
- /repetido - Devuelve el elemento más repetido - { "lista": any[] }
- /ordenar / /ordenar-burbuja - Ordena la lista con diferentes algoritmos - { "lista": number[] }
- /n-elemento-mayor - Devuelve el n-ésimo elemento más grande - { "lista": number[], "n": number }
- /producto-maximo - Retorna el producto máximo de dos números de la lista - { "lista": number[] }
- /busqueda-binaria - Busca un elemento en una lista ordenada - { "lista": number[], "objetivo": number }


Taller Práctica 2

Este taller utiliza el archivo 15-datos-parcial-01.json, el cual contiene la información de los estudiantes.

URL base: /api/v1/taller-practica-2

Funciones con su descripción y un body de ejemplo:

- /get-nombres-cursos - Retorna los nombres de los cursos de un estudiante - { "indice": number }
- /get-nota-maxima - Devuelve la nota más alta del estudiante - { "indice": number }
- /bol-altura-165 - Indica si el estudiante mide más de 1.65 m - { "indice": number }
- /get-nombre-completo - Retorna el nombre completo del estudiante - { "indice": number }
- /get-diferencia-altura - Devuelve la diferencia de altura entre dos estudiantes - { "indice1": number, "indice2": number }
- /agregar-nombre-completo - Agrega el campo nombreCompleto al estudiante - { "indice": number }

## 👨‍💻 Autor

Nombre: Jhon Jiménez Zuleta

Materia: Desarrollo de Aplicaciones Web Backend

Docente: Andres Movilla

---

✨ Gracias por revisar este proyecto.

Si tienes dudas o sugerencias, puedes contactarme por GitHub.