import { Servico } from "../../domain/models/servico";
import { FirestoreServicoRepository } from "../../infrascture/database/firestore/repository/firestoreServicoRepository";
import { ServicoRepository } from "../repository/ServicoRepository";

export class GetAllServiceQuery{

    private servicoRepository: ServicoRepository;

    constructor(servicoRepository: ServicoRepository){
        this.servicoRepository = servicoRepository;
    }
    public async getAll(): Promise<Servico[]>{
        const firestoreServicoRepository = new FirestoreServicoRepository()
        return await firestoreServicoRepository.getAll();
    }
}