import { Servico } from "../../domain/models/servico";
import { FirestoreServicoRepository } from "../../infrascture/database/firestore/repository/firestoreServicoRepository";
import { ServicoRepository } from "../repository/ServicoRepository";

export class DeleteServiceCommand{
    private servicoRepository: ServicoRepository;
    constructor(servicoRepository: ServicoRepository){
        this.servicoRepository = servicoRepository;
    }

    public deleteService(servico: Servico){
        const firestoreServicoRepository = new FirestoreServicoRepository()
        return firestoreServicoRepository.deleteService(servico);
    }
}