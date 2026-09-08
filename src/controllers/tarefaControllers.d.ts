import type { Request, Response } from "express";
export declare function criar(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listar(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function buscarTarefaController(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function atualizarTarefaController(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deletarTarefaController(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=tarefaControllers.d.ts.map