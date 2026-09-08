import { prisma } from "../config/prisma.js";
export async function criarTarefa(novosDados) {
    const tarefa = await prisma.tarefa.create({
        data: novosDados,
    });
    return tarefa;
}
export async function listarTarefas() {
    const tarefas = await prisma.tarefa.findMany({
        include: { categoria: true },
    });
    return tarefas;
}
export async function buscarTarefa(id) {
    const tarefa = await prisma.tarefa.findUnique({
        where: {
            id: id,
        },
        include: { categoria: true },
    });
    return tarefa;
}
export async function atualizarTarefa(id, novosDados) {
    const atualizar = await prisma.tarefa.update({
        where: {
            id: id,
        },
        data: novosDados,
    });
    return atualizar;
}
export async function deletarTarefa(id) {
    await prisma.tarefa.delete({
        where: {
            id: id,
        },
    });
    console.log("tarefa removido com sucesso");
}
//# sourceMappingURL=tarefaServices.js.map