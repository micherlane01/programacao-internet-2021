export class Servico{
    id?: string;
    titulo: String;
    descricao: String;
    orcamento: number;
    data_cadastro: String;
    data_limite: String;
    situacao: String;
    comentarios: String[];


    constructor(id: string, titulo: string, descricao: string, orcamento: number, 
        data_cadastro: string, data_limite: string, situacao: string, comentarios: string[]){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.orcamento = orcamento;
        this.data_cadastro = data_cadastro;
        this.data_limite = data_limite;
        this.situacao = situacao;
        this.comentarios = comentarios;
    }
    

    toJSON(){
        var json = {
            'id': this.id,
            'titulo': this.titulo,
            'descricao': this.descricao,
            'orcamento': this.orcamento,
            'data_cadastro': this.data_cadastro,
            'data_limite': this.data_limite,
            'situacao': this.situacao,
            'comentarios': this.comentarios
        }

        return json;
    }

}