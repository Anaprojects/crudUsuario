import { Controller, Post,Body,Get } from "@nestjs/common";
import { despesaRepository } from "./despesa.repository";
import{CriarDespesaDto}from "./dto/criar-despesa.dto";
@Controller('/despesa')
export class CadasdroDespesa{
    constructor (private despesaRepository:despesaRepository ){}
    @Post()
    async criaDespesa(@Body() dadosDeDespesa: CriarDespesaDto) {
       this.despesaRepository.guardar(dadosDeDespesa)
       return dadosDeDespesa
    }
    @Get()
    async listaDespesa(){
        return this.despesaRepository.resultadoDeBusca();
    }
}