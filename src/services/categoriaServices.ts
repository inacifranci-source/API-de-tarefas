import { prisma } from "../config/prisma.js";

export async function criarCategoria(nome: string) {
  const categoria = await prisma.categoria.create({
    data: {
      nome,
    },
  });

  return categoria;
}

export async function listarCategorias() {
  const categorias = await prisma.categoria.findMany({
    include: { tarefas: true },
  });

  return categorias;
}