import { Router } from "express";
import { atualizarTarefaController, buscarTarefaController, criar, deletarTarefaController, listar } from "../controllers/tarefaControllers.js";


const router = Router();

/**
 * @swagger
 * /tarefas:
 *   post:
 *     summary: Criar uma tarefa
 *     tags:
 *       - tarefas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Estudar Prisma
 *               descricao:
 *                 type: string
 *                 example: Rever relações e migrações
 *               categoriaId:
 *                 type: string
 *                 example: 3f1b1c2a-1234-4a5b-9c8d-abcdef123456
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       400:
 *         description: titulo e descricao são obrigatórios
 */
router.post("/tarefas", criar);

/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Listar todas as tarefas
 *     tags:
 *       - tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas (com a respectiva categoria incluída)
 */
router.get("/tarefas", listar);

/**
 * @swagger
 * /buscar/{id}:
 *   get:
 *     summary: Buscar uma tarefa pelo id
 *     tags:
 *       - tarefas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: id da tarefa
 *     responses:
 *       200:
 *         description: Tarefa encontrada
 *       404:
 *         description: Tarefa não encontrada
 */
router.get("/buscar/:id", buscarTarefaController);

/**
 * @swagger
 * /tarefas/{id}:
 *   put:
 *     summary: Actualizar uma tarefa
 *     tags:
 *       - tarefas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: id da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               concluida:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarefa actualizada com sucesso
 *       500:
 *         description: Tarefa não encontrada
 */
router.put("/tarefas/:id", atualizarTarefaController);

/**
 * @swagger
 * /tarefas/{id}:
 *   delete:
 *     summary: Eliminar uma tarefa
 *     tags:
 *       - tarefas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: id da tarefa
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/tarefas/:id", deletarTarefaController);

export default router;