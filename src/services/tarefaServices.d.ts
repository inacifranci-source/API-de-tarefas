interface atualizarCampos {
    titulo?: string;
    descricao?: string;
    concluida?: boolean;
}
export interface criarCampos {
    titulo: string;
    descricao: string;
    concluida: boolean;
    categoriaId?: string;
}
export declare function criarTarefa(novosDados: criarCampos): Promise<{
    id: string;
    titulo: string;
    descricao: string;
    concluida: boolean;
    createdAt: Date;
    categoriaId: string | null;
}>;
export declare function listarTarefas(): Promise<({
    categoria: {
        id: string;
        nome: string;
    } | null;
} & {
    id: string;
    titulo: string;
    descricao: string;
    concluida: boolean;
    createdAt: Date;
    categoriaId: string | null;
})[]>;
export declare function buscarTarefa(id: string): Promise<({
    categoria: {
        id: string;
        nome: string;
    } | null;
} & {
    id: string;
    titulo: string;
    descricao: string;
    concluida: boolean;
    createdAt: Date;
    categoriaId: string | null;
}) | null>;
export declare function atualizarTarefa(id: string, novosDados: atualizarCampos): Promise<{
    id: string;
    titulo: string;
    descricao: string;
    concluida: boolean;
    createdAt: Date;
    categoriaId: string | null;
}>;
export declare function deletarTarefa(id: string): Promise<void>;
export {};
//# sourceMappingURL=tarefaServices.d.ts.map