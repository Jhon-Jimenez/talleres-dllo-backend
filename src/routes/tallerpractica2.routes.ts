// Routes - Taller Práctica 2

import { Router, Request, Response } from "express";
import {
    GetNombresCursos,
    GetNotaMaxima,
    BolAltura165,
    GetNombreCompleto,
    GetDiferenciaAltura,
    AgregarNombreCompleto,
} from "../controllers/tallerpractica2.controller";

const router = Router();

function ok(res: Response, resultado: any) {
    res.status(200).json({ status: "success", message: "OK", resultado });
}

// 1. get-nombres-cursos
router.post("/get-nombres-cursos", (req: Request, res: Response) => {
    const { estudiante } = req.body;
    if (!estudiante || !Array.isArray(estudiante.cursos)) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con un arreglo 'cursos'",
        });
    }
    ok(res, GetNombresCursos(estudiante));
});

// 2. get-nota-maxima
router.post("/get-nota-maxima", (req: Request, res: Response) => {
    const { estudiante } = req.body;
    if (!estudiante || !Array.isArray(estudiante.cursos)) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con un arreglo 'cursos'",
        });
    }
    ok(res, GetNotaMaxima(estudiante));
});

// 3. bol-altura-165
router.post("/bol-altura-165", (req: Request, res: Response) => {
    const { estudiante } = req.body;
    if (!estudiante || typeof estudiante.altura !== "number") {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con el campo 'altura' numérico",
        });
    }
    ok(res, BolAltura165(estudiante));
});

// 4. get-nombre-completo
router.post("/get-nombre-completo", (req: Request, res: Response) => {
    const { estudiante } = req.body;
    if (!estudiante || !estudiante.nombre || !estudiante.apellido) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con 'nombre' y 'apellido'",
        });
    }
    ok(res, GetNombreCompleto(estudiante));
});

// 5. get-diferencia-altura
router.post("/get-diferencia-altura", (req: Request, res: Response) => {
    const { estudiante1, estudiante2 } = req.body;
    if (!estudiante1 || !estudiante2) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar los objetos 'estudiante1' y 'estudiante2'",
        });
    }
    ok(res, GetDiferenciaAltura(estudiante1, estudiante2));
});

// 6. agregar-nombre-completo
router.post("/agregar-nombre-completo", (req: Request, res: Response) => {
    const { estudiante } = req.body;
    if (!estudiante) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante'",
        });
    }
    ok(res, AgregarNombreCompleto(estudiante));
});

export default router;
