import { Router } from "express";
import { atualizarTarefaController, buscarTarefaController, criar, deletarTarefaController, listar } from "../controllers/tarefaControllers.js";
const router = Router();
router.post("/tarefas", criar);
router.get("/tarefas", listar);
router.get("/buscar/:id", buscarTarefaController);
router.put("/tarefas/:id", atualizarTarefaController);
router.delete("/tarefas/:id", deletarTarefaController);
export default router;
//# sourceMappingURL=tarefaRoutes.js.map