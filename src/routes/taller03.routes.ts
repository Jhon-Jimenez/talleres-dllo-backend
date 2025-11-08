// Routes - Taller 03

import { Router, Request, Response } from "express";
import { desglosarString, twoSum, conversionRomana, descomposicion } from "../controllers/taller03.controller";

const router = Router();

// Endpoint 1: desglosar-string
router.post("/desglosar-string", (req: Request, res: Response) => {
    const { cadena, tipo } = req.body;
    if (typeof cadena !== "string" || typeof tipo !== "string") {
        return res.status(400).json({ status: "error", message: "Debe enviar 'cadena' (string) y 'tipo' ('vocales' o 'consonantes')" });
    }

    const resultado = desglosarString(cadena, tipo);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 2: two-sum
router.post("/two-sum", (req: Request, res: Response) => {
    const { lista, suma } = req.body;
    if (!Array.isArray(lista) || typeof suma !== "number") {
        return res.status(400).json({ status: "error", message: "Debe enviar 'lista' (array) y 'suma' (number)" });
    }

    const resultado = twoSum(lista, suma);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 3: conversion-romana
router.post("/conversion-romana", (req: Request, res: Response) => {
    const { cadena } = req.body;
    if (typeof cadena !== "string") {
        return res.status(400).json({ status: "error", message: "Debe enviar 'cadena' (string)" });
    }

    const resultado = conversionRomana(cadena);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// Endpoint 4: descomposicion
router.post("/descomposicion", (req: Request, res: Response) => {
    const { cadena } = req.body;
    if (typeof cadena !== "string") {
        return res.status(400).json({ status: "error", message: "Debe enviar 'cadena' (string con palabra y diccionario separados por comas)" });
    }

    const resultado = descomposicion(cadena);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

export default router;
