# Proyecto 01 — Desarrollo de Aplicaciones Web Backend

Repositorio correspondiente al desarrollo del **Proyecto 01** de la materia **Desarrollo de Aplicaciones Web Backend**.  
Este proyecto unifica todos los talleres desarrollados en clase dentro de un backend funcional construido con **Node.js**, **Express** y **TypeScript**.

---

## 📁 Estructura del Proyecto

talleres-dllo-backend/
│
├── Archivos Originales/ # Carpeta que contiene los talleres originales en js
├── src/
│ ├── controllers/ # Lógica principal de cada taller
│ │ ├── taller01.controller.ts
│ │ ├── taller02.controller.ts
│ │ ├── taller03.controller.ts
│ │ ├── taller-practica-1.controller.ts
│ │ └── taller-practica-2.controller.ts
│ │
│ ├── routes/ # Endpoints HTTP (rutas POST)
│ │ ├── taller01.routes.ts
│ │ ├── taller02.routes.ts
│ │ ├── taller03.routes.ts
│ │ ├── taller-practica-1.routes.ts
│ │ └── taller-practica-2.routes.ts
│ │
│ ├── server.ts # Punto de entrada principal
│ └── actions/ # (reservado para lógica futura)
│
├── 15-datos-parcial-01.json # Archivo de datos utilizado en Taller Práctica 2
├── package.json
├── tsconfig.json
└── README.md

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

Taller 01
URL base: /api/v1/taller1
Endpoints con su descripción y un body de ejemplo:
- /convertidor-temp - Convierte °C a °F - { "tc": 25 }
- /resolvedor - Resuelve ecuación cuadrática - { "a":1, "b":5, "c":4, "sel":0 }
- /mejor-paridad - Determina si un número es par o impar - { "n":3 }
- /peor-paridad - Verifica paridad con un método peor - { "n":7 }

Taller 02
URL base: /api/v1/taller2
Endpoints con su descripción y un body de ejemplo:
- /find-max - Devuelve el valor máximo de una lista - { "lista":[3,17,-1,4,-19] }
- /includes - Verifica si un número está en la lista - { "lista":[3,17,-1,4,-19], "numero":4 }
- /sum - Suma todos los elementos de una lista - { "lista":[3,17,-1,4,-19] }
- /missing-numbers - Retorna números faltantes entre el menor y mayor - { "lista":[7,2,4,6,3,9] }

Taller 03
URL base: /api/v1/taller3
Endpoints con su descripción y un body de ejemplo:
- /desglosar-string - Cuenta vocales o consonantes - { "cadena":"murcielagos", "tipo":"vocales" }
- /two-sum - Retorna los índices de dos números que sumen el valor dado - { "lista":[2,7,11,15], "suma":9 }
- /conversion-romana - Convierte números romanos a arábigos - { "cadena":"XIV" }
- /descomposicion - Retorna las dos palabras del diccionario que componen una palabra - { "cadena":"malhumor,al,hum,humor,m,mal,malhu" }

Taller Práctica 1
URL base: /api/v1/taller-practica-1
Funciones con su descripción y un body de ejemplo:

Taller Práctica 2
URL base: /api/v1/taller-practica-2
Funciones con su descripción y un body de ejemplo:

## 👨‍💻 Autor

Nombre: Jhon Jiménez Zuleta
Materia: Desarrollo de Aplicaciones Web Backend
Docente: Andres Movilla

✨ Gracias por revisar este proyecto.
Si tienes dudas o sugerencias, puedes contactarme por GitHub.