import { Servico } from "../../domain/models/servico";

export interface ServicoRepository{
    getAll(): Promise<Servico[]>;

    postService(servico: Servico): void;

    updateService(servico: Servico): void;

    deleteService(servico: Servico): void;

}