import { Router } from "express";
import { criar, listar } from "../controllers/categoriaController.js";
const router = Router();
/**
 * @swagger
 * /categorias:
 *  post:
 *      summary: criar uma categoria
 *      tags:
 *          - categorias
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - nome
 *                  properties:
 *                      nome:
 *                          type: string
 *                          example: eletronico
 *      responses:
 *          201:
 *              description: categoria criada com sucesso
 */
router.post("/categorias", criar);
router.get("/categorias", listar);
export default router;
//# sourceMappingURL=categoriaRoutes.js.map