import { atualizarTarefa, buscarTarefa, criarTarefa, deletarTarefa, listarTarefas, } from "../services/tarefaServices.js";
export async function criar(req, res) {
    try {
        const { titulo, descricao, categoriaId } = req.body;
        if (!titulo || !descricao) {
            return res.status(400).json({
                erro: "titulo e descricao são obrigatórios",
            });
        }
        const novaTarefa = {
            titulo,
            descricao,
            concluida: false,
            categoriaId,
        };
        const tarefa = await criarTarefa(novaTarefa);
        return res.status(201).json(tarefa);
    }
    catch (erro) {
        return res.status(500).json({
            erro: "Erro ao criar tarefa",
        });
    }
}
export async function listar(req, res) {
    try {
        const tarefas = await listarTarefas();
        return res.status(200).json(tarefas);
    }
    catch (erro) {
        return res.status(500).json({
            erro: "Erro ao listar tarefas",
        });
    }
}
export async function buscarTarefaController(req, res) {
    try {
        const { id } = req.params;
        const tarefa = await buscarTarefa(id);
        if (!tarefa) {
            return res.status(404).json({ erro: "Tarefa não encontrada" });
        }
        return res.status(200).json(tarefa);
    }
    catch (erro) {
        return res.status(500).json({ erro: "Erro ao buscar tarefa" });
    }
}
export async function atualizarTarefaController(req, res) {
    try {
        const { id } = req.params;
        const novosDados = req.body;
        const tarefa = await atualizarTarefa(id, novosDados);
        return res.status(200).json(tarefa);
    }
    catch (erro) {
        return res.status(500).json({ mensagem: "Tarefa não encontrada" });
    }
}
export async function deletarTarefaController(req, res) {
    try {
        const { id } = req.params;
        await deletarTarefa(id);
        return res.status(200).json({ mensagem: "Tarefa deletada com sucesso" });
    }
    catch (error) {
        const mensagemErro = error instanceof Error ? error.message : "Erro interno do servidor";
        return res.status(500).json({ mensagem: mensagemErro });
    }
}
//# sourceMappingURL=tarefaControllers.js.map