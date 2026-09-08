import { prisma } from "../config/prisma.js";

interface atualizarCampos {
  titulo?: string;
  descricao?: string;
  concluida?: boolean;
}

export interface criarCampos{
  titulo: string;
  descricao: string;
  concluida: boolean;
  categoriaId?: string;
}

export async function criarTarefa(novosDados: criarCampos) {
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

export async function buscarTarefa(id: string) {
  const tarefa = await prisma.tarefa.findUnique({
    where: {
      id: id,
    },
    include: { categoria: true },
  });

  return tarefa;
}

export async function atualizarTarefa(id: string, novosDados: atualizarCampos) {
  const atualizar = await prisma.tarefa.update({
    where: {
      id: id,
    },
    data: novosDados,
  });

  return atualizar;
}

export async function deletarTarefa(id: string) {
  await prisma.tarefa.delete({
    where: {
      id: id,
    },
  });

  console.log("tarefa removido com sucesso");
}