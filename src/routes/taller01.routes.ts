// Routes - Taller 01

import { Router, Request, Response } from "express";
import {
    convertidorTemp,
    resolvedor,
    mejorParidad,
    peorParidad,
} from "../controllers/taller01.controller";

const router = Router();

// Endpoint 1: Convertidor de temperatura
router.post("/convertidor-temp", (req: Request, res: Response) => {
    const { tc } = req.body;
    if (typeof tc !== "number") {
        return res.status(400).json({ status: "error", message: "Debe enviar un número en 'tc'" });
    }
    const resultado = convertidorTemp(tc);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 2: Resolvedor
router.post("/resolvedor", (req: Request, res: Response) => {
    const { a, b, c, sel } = req.body;
    if ([a, b, c, sel].some((v) => v === undefined)) {
        return res.status(400).json({ status: "error", message: "Faltan parámetros en el body" });
    }
    const resultado = resolvedor(a, b, c, sel);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 3: Mejor paridad
router.post("/mejor-paridad", (req: Request, res: Response) => {
    const { n } = req.body;
    if (typeof n !== "number") {
        return res.status(400).json({ status: "error", message: "Debe enviar un número en 'n'" });
    }
    const resultado = mejorParidad(n);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 4: Peor paridad
router.post("/peor-paridad", (req: Request, res: Response) => {
    const { n } = req.body;
    if (typeof n !== "number") {
        return res.status(400).json({ status: "error", message: "Debe enviar un número en 'n'" });
    }
    const resultado = peorParidad(n);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

export default router;
