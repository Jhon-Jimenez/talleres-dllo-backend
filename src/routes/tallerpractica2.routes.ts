// Routes - Taller Práctica 2

import { Router, Request, Response } from "express";
import datos from "../../15-datos-parcial-01.json";

import {
    GetNombresCursos,
    GetNotaMaxima,
    BolAltura165,
    GetNombreCompleto,
    GetDiferenciaAltura,
    AgregarNombreCompleto,
} from "../controllers/tallerpractica2.controller";

const router = Router();

// Obtener estudiante según body
function obtenerEstudiante(body: any) {
    const { index, estudiante } = body;
    return estudiante || (index !== undefined ? datos[index] : null);
}

// 1 - GetNombresCursos
router.post("/get-nombres-cursos", (req: Request, res: Response) => {
    const est = obtenerEstudiante(req.body);
    if (!est || !est.cursos) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con un arreglo 'cursos'",
        });
    }
    const resultado = GetNombresCursos(est);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// 2 - GetNotaMaxima
router.post("/get-nota-maxima", (req: Request, res: Response) => {
    const est = obtenerEstudiante(req.body);
    if (!est || !est.cursos) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con un arreglo 'cursos'",
        });
    }
    const resultado = GetNotaMaxima(est);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// 3 - BolAltura165
router.post("/bol-altura165", (req: Request, res: Response) => {
    const est = obtenerEstudiante(req.body);
    if (!est || !est.altura) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con una propiedad 'altura'",
        });
    }
    const resultado = BolAltura165(est);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// 4 - GetNombreCompleto
router.post("/get-nombre-completo", (req: Request, res: Response) => {
    const est = obtenerEstudiante(req.body);
    if (!est || !est.nombre || !est.apellido) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' con nombre y apellido",
        });
    }
    const resultado = GetNombreCompleto(est);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// 5 - GetDiferenciaAltura
router.post("/get-diferencia-altura", (req: Request, res: Response) => {
    const { index1, index2, estudiante1, estudiante2 } = req.body;
    const est1 = estudiante1 || (index1 !== undefined ? datos[index1] : null);
    const est2 = estudiante2 || (index2 !== undefined ? datos[index2] : null);

    if (!est1 || !est2) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar dos estudiantes válidos o sus índices",
        });
    }

    const resultado = GetDiferenciaAltura(est1, est2);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

// 6 - AgregarNombreCompleto
router.post("/agregar-nombre-completo", (req: Request, res: Response) => {
    const est = obtenerEstudiante(req.body);
    if (!est) {
        return res.status(400).json({
        status: "error",
        message: "Debe enviar un objeto 'estudiante' o un índice válido",
        });
    }
    const resultado = AgregarNombreCompleto(est);
    res.status(200).json({ status: "success", message: "OK", resultado });
});

export default router;
