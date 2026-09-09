import { Router } from "express"
import { criar, listar } from "../controllers/categoriaController.js";

const router = Router();

/**
 * @swagger
 * /categorias:
 *   post:
 *     summary: Criar uma categoria
 *     tags:
 *       - categorias
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *             properties:
 *               nome:
 *                 type: string
 *                 example: eletronico
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       400:
 *         description: Dados inválidos (ex. nome em falta)
 */
router.post("/categorias", criar)

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Listar todas as categorias
 *     tags:
 *       - categorias
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   nome:
 *                     type: string
 */
router.get("/categorias", listar)

export default router

