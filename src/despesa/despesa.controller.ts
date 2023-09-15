import { Controller, Post,Body,Get } from "@nestjs/common";
import { despesaRepository } from "./despesa.repository";
@Controller('/despesa')
export class CadasdroDespesa{
    constructor (private despesaRepository:despesaRepository ){}
    @Post()
    async criaDespesa(@Body() dadosDeDespesa) {
       this.despesaRepository.guardar(dadosDeDespesa)
       return dadosDeDespesa
    }
    @Get()
    async listaDespesa(){
        return this.despesaRepository.resultadoDeBusca();
    }
}