import { Request, Response } from "express";
import { DeleteServiceCommand } from "../../application/commands/deleteServiceCommand";
import { PostServiceCommand } from "../../application/commands/postServiceCommand";
import { UpdateServiceCommand } from "../../application/commands/updateServiceCommand";
import { GetAllServiceQuery } from "../../application/querys/getAllServiceQuery";
import { Servico } from "../../domain/models/servico";
import { FirestoreServicoRepository } from "../../infrascture/database/firestore/repository/firestoreServicoRepository";

export class ServicoController{
    public async create(req: Request, res: Response){
        const repositoryServico = new FirestoreServicoRepository();
        const {titulo, descricao, orcamento, data_cadastro, data_limite, situacao, comentarios} = req.body
        const servico = new Servico(titulo, descricao, orcamento, data_cadastro, data_cadastro, data_limite, situacao, comentarios)
        const command = new PostServiceCommand(repositoryServico)
        command.saveService(servico)
        return res.status(201).json();
    }

    public async read(req: Request, res: Response): Promise<Response>{
        const repositoryServico = new FirestoreServicoRepository();
        const query = new GetAllServiceQuery(repositoryServico);
        const servicos = await query.getAll();
        return res.json(servicos);

    }

    public update(req: Request, res: Response){
        const repositoryServico = new FirestoreServicoRepository();        
        const {titulo, descricao, orcamento, data_cadastro, data_limite, situacao, comentarios} = req.body
        const servico = new Servico(titulo, descricao, orcamento, data_cadastro, data_cadastro, data_limite, situacao, comentarios);
        servico.id = req.params.id;
        const command = new UpdateServiceCommand(repositoryServico);
        command.updateService(servico)
        
        return res.status(204).json()
    }

    public delete(req: Request, res: Response){
        const repositoryServico = new FirestoreServicoRepository();
        const command = new DeleteServiceCommand(repositoryServico)
        const {titulo, descricao, orcamento, data_cadastro, data_limite, situacao, comentarios} = req.body
        const servico = new Servico(titulo, descricao, orcamento, data_cadastro, data_cadastro, data_limite, situacao, comentarios);
        servico.id = req.params.id;
        command.deleteService(servico)
        return res.status(204).json();
    }
}