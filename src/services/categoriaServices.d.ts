export declare function criarCategoria(nome: string): Promise<{
    id: string;
    nome: string;
}>;
export declare function listarCategorias(): Promise<({
    tarefas: {
        id: string;
        titulo: string;
        descricao: string;
        concluida: boolean;
        createdAt: Date;
        categoriaId: string | null;
    }[];
} & {
    id: string;
    nome: string;
})[]>;
//# sourceMappingURL=categoriaServices.d.ts.map