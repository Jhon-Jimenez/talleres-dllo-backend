import express, { Request, Response } from "express";
import cors from "cors";

// Importamos las rutas
import taller01Routes from "./routes/taller01.routes";
import taller02Routes from "./routes/taller02.routes";
import taller03Routes from "./routes/taller03.routes";
import tallerPractica1Routes from "./routes/tallerpractica1.routes";
import tallerPractica2Routes from "./routes/tallerpractica2.routes";

const app = express();
app.use(cors());
app.use(express.json());

// Prefijo global para las rutas de la API
const API_PREFIX = "/api/v1";

// Rutas
app.use(`${API_PREFIX}/taller1`, taller01Routes);
app.use(`${API_PREFIX}/taller2`, taller02Routes);
app.use(`${API_PREFIX}/taller3`, taller03Routes);
app.use(`${API_PREFIX}/taller-practica-1`, tallerPractica1Routes);
app.use(`${API_PREFIX}/taller-practica-2`, tallerPractica2Routes);

// Fallback - Error 404
app.use((req: Request, res: Response) => {
  res.status(404).json({ status: "error", message: "Ruta no encontrada" });
});

// Puerto (para despliegue o local)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});



