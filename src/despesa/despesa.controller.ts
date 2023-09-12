import { Body, Controller,Post } from "@nestjs/common";
import { despesaRepository } from "./despesa.repository";

@Controller('/despesa')
 export class despesaController{
    constructor ( private despesaRepository: despesaRepository){}
    @Post()
    async criarDespesa(@Body() dadosDeDespesa){
        this.despesaRepository.salvar(dadosDeDespesa)
        return dadosDeDespesa;
    }
 }