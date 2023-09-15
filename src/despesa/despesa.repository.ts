import { Injectable } from "@nestjs/common";
@Injectable()
export class despesaRepository{
    private despesas = [];
    async guardar (despesa){
        this.despesas.push(despesa)
    }
    async resultadoDeBusca(){
        return this.despesas;
    }
}


