import { Injectable } from "@nestjs/common/decorators";
import { DespesaEntity } from "./despesa.entity";

@Injectable()

export class despesaRepository{
    private despesas: DespesaEntity[] = [];

    async guardar (despesa:DespesaEntity){
        this.despesas.push(despesa)
    }
    async resultadoDeBusca(){
        return this.despesas;
    }
}


