// Routes - Taller 02

import { Router, Request, Response } from "express";
import { findMax, includes, sum, missingNumbers } from "../controllers/taller02.controller";

const router = Router();

// Endpoint 1: findMax
router.post("/find-max", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista)) {
        return res.status(400).json({ status: "error", message: "Debe enviar una lista de números en 'lista'" });
    }

    const resultado = findMax(lista);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 2: includes
router.post("/includes", (req: Request, res: Response) => {
    const { lista, numero } = req.body;
    if (!Array.isArray(lista) || typeof numero !== "number") {
        return res.status(400).json({ status: "error", message: "Debe enviar 'lista' (array) y 'numero' (number)" });
    }

    const resultado = includes(lista, numero);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 3: sum
router.post("/sum", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista)) {
        return res.status(400).json({ status: "error", message: "Debe enviar una lista de números en 'lista'" });
    }

    const resultado = sum(lista);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 4: missing-numbers
router.post("/missing-numbers", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista)) {
        return res.status(400).json({ status: "error", message: "Debe enviar una lista de números en 'lista'" });
    }

    const resultado = missingNumbers(lista);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

export default router;
