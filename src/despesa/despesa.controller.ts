import { Controller, Post,Body,Get,Param,Put} from "@nestjs/common";
import { despesaRepository } from "./despesa.repository";
import{CriarDespesaDto}from "./dto/criar-despesa.dto";
import { DespesaEntity } from "./despesa.entity";
import{v4 as uuid} from 'uuid'

@Controller('/despesa')
export class CadasdroDespesa{
    constructor (private despesaRepository:despesaRepository ){}
    // estou cadastradrando despesa
    @Post()
    async criaDespesa(@Body() dadosDeDespesa: CriarDespesaDto) {
        const despesaEntity = new DespesaEntity();
        despesaEntity.tipo = dadosDeDespesa.tipo;
        despesaEntity.valor = dadosDeDespesa.valor;
        despesaEntity.id = uuid()

       this.despesaRepository.guardar(despesaEntity)
       return {
        id : despesaEntity.id, message: "despesa cadastrada com sucesso" 
       }
       
    }
    // estou listando as despesas
    @Get()
    async listaDespesa(){
        return this.despesaRepository.resultadoDeBusca();
    }

    

}