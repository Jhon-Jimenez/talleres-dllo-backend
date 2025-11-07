import express, { Request, Response } from "express";
import cors from "cors";
import taller01Routes from "./routes/taller01.routes";

const app = express();
app.use(cors());
app.use(express.json());

// Prefijo global para las rutas de la API
const API_PREFIX = "/api/v1";
app.use(`${API_PREFIX}/taller1`, taller01Routes);

// Fallback - Error 404
app.use((req: Request, res: Response) => {
  res.status(404).json({ status: "error", message: "Ruta no encontrada" });
});

// Definimos el puerto
const PORT = process.env.PORT || 8080;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
