import { ServicoRepository } from "../../../../application/repository/ServicoRepository";
import { Servico } from "../../../../domain/models/servico";
import { AuthFirestore } from "../../authFirestore";

export class FirestoreServicoRepository implements ServicoRepository{

    private authFirestore = new AuthFirestore()
    private servicosRef = this.authFirestore.getDB()

    public async getAll(): Promise<Servico[]>{   
        
       
        const servicosDocs = await this.servicosRef.get()

        const servicos: Servico[] = [];
        servicosDocs.forEach((doc: any) =>{
            const dados = doc.data()
            var serv = new Servico(
                doc.id,
                dados['titulo'],
                dados['descricao'],
                dados['orcamento'],
                dados['data_cadastro'],
                dados['data_limite'],
                dados['situacao'],
                dados['comentarios']
            )
            servicos.push(serv)     
        })
        console.log(servicos)
        return servicos
    }

    public postService(servico: Servico): void {
        this.servicosRef.doc().set({
            titulo: servico.titulo,
            descricao: servico.descricao,
            orcamento: servico.orcamento,
            data_cadastro: servico.data_cadastro,
            data_limite: servico.data_limite,
            situacao: servico.situacao,
            comentarios: servico.comentarios
          })
    }
    
    public updateService(servico: Servico) {
       
        this.servicosRef.doc(servico.id).set({
          titulo: servico.titulo,
          descricao: servico.descricao,
          orcamento: servico.orcamento,
          data_cadastro: servico.data_cadastro,
          data_limite: servico.data_limite,
          situacao: servico.situacao,
          comentarios: servico.comentarios
        })
    }

    public deleteService(servico: Servico): void {
        this.servicosRef.doc(servico.id).delete()
    }

}