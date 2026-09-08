import type { Request, Response } from "express";
import { criarCategoria, listarCategorias } from "../services/categoriaServices.js";

export async function criar(req: Request, res: Response) {
  try {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({
        erro: "nome é obrigatório",
      });
    }

    const categoria = await criarCategoria(nome);

    return res.status(201).json({mensagem: "categoria criada com sucesso", data: categoria});
    
  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao criar categoria",
    });
  }
}

export async function listar(req: Request, res: Response) {
  try {
    const categorias = await listarCategorias();

    return res.status(200).json(categorias);
  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao listar categorias",
    });
  }
}