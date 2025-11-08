// Routes - Taller Práctica 1

import { Router, Request, Response } from "express";
import {
    ContarStrings,
    Exponenciacion_simple,
    Ocurrencias,
    Fibonacci,
    Duplicados1,
    Duplicados2,
    Repetido,
    Ordenar,
    OrdenarBurbuja,
    NElementoMayor,
    ProductoMaximo,
    BusquedaBinaria,
} from "../controllers/tallerpractica1.controller";

const router = Router();

function ok(res: Response, resultado: any) {
    res.status(200).json({ status: "success", message: "OK", resultado });
}

// 1. contar-strings
router.post("/contar-strings", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar una lista de strings" });
    ok(res, ContarStrings(lista));
});

// 2. exponenciacion-simple
router.post("/exponenciacion-simple", (req: Request, res: Response) => {
    const { base, exp } = req.body;
    if (typeof base !== "number" || typeof exp !== "number")
        return res.status(400).json({ status: "error", message: "Debe enviar 'base' y 'exp' numéricos" });
    ok(res, Exponenciacion_simple(base, exp));
});

// 3. ocurrencias
router.post("/ocurrencias", (req: Request, res: Response) => {
    const { lista, elemento } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar 'lista' y 'elemento'" });
    ok(res, Ocurrencias(lista, elemento));
});

// 4. fibonacci
router.post("/fibonacci", (req: Request, res: Response) => {
    const { n } = req.body;
    if (typeof n !== "number")
        return res.status(400).json({ status: "error", message: "Debe enviar un número en 'n'" });
    ok(res, Fibonacci(n));
});

// 5. duplicados1
router.post("/duplicados1", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar una lista" });
    ok(res, Duplicados1(lista));
});

// 6. duplicados2
router.post("/duplicados2", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar una lista" });
    ok(res, Duplicados2(lista));
});

// 7. repetido
router.post("/repetido", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar una lista" });
    ok(res, Repetido(lista));
});

// 8. ordenar
router.post("/ordenar", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar una lista de números" });
    ok(res, Ordenar(lista));
});

// 9. ordenar-burbuja
router.post("/ordenar-burbuja", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar una lista de números" });
    ok(res, OrdenarBurbuja(lista));
});

// 10. n-elemento-mayor
router.post("/n-elemento-mayor", (req: Request, res: Response) => {
    const { lista, n } = req.body;
    if (!Array.isArray(lista) || typeof n !== "number")
        return res.status(400).json({ status: "error", message: "Debe enviar 'lista' y 'n' numérico" });
    ok(res, NElementoMayor(lista, n));
});

// 11. producto-maximo
router.post("/producto-maximo", (req: Request, res: Response) => {
    const { lista } = req.body;
    if (!Array.isArray(lista))
        return res.status(400).json({ status: "error", message: "Debe enviar una lista de números" });
    ok(res, ProductoMaximo(lista));
});

// 12. busqueda-binaria
router.post("/busqueda-binaria", (req: Request, res: Response) => {
    const { lista, objetivo } = req.body;
    if (!Array.isArray(lista) || typeof objetivo !== "number")
        return res.status(400).json({ status: "error", message: "Debe enviar 'lista' y 'objetivo'" });
    ok(res, BusquedaBinaria(lista, objetivo));
});

export default router;
