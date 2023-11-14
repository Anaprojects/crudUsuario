import { Injectable } from "@nestjs/common/decorators";
import { BadRequestException } from '@nestjs/common';
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


    // private buscarId(id: string){
    //     const possivelDespesa = this.despesas.find(
    //         despesaSalva => despesaSalva.id === id
    //     );
    //     if(!possivelDespesa){
    //         // throw new Error('Ops, essa despesa não foi encontrada 😦')
    //         throw new BadRequestException('Ops, essa despesa não foi encontrada 😦')
    //     }
    //     // return {message: "Essa despesa não existe"}
      
    //      return possivelDespesa;

    // }


    // async update (id:string, dadosAtualizados:Partial<DespesaEntity>){
    //     const despesa = this.buscarId(id)
    //     Object.entries(dadosAtualizados).forEach(([chave, valor])=> {
    //         if (chave === 'id'){
    //             return;
    //         }
    //         despesa [chave] = valor;
    //     })
    //     return despesa
    // }
    // // função que deleta o usuário
    // async delete ( id: string ){
    //     const despesa = this.buscarId(id);
    //     this.despesas = this.despesas.filter(
    //         despesaSalva => despesaSalva.id !== id
    //     )
    //     return despesa;
    // }
}


