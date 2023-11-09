import { Controller, Post,Body,Get,Param,Put,Delete} from "@nestjs/common";
import { despesaRepository } from "./despesa.repository";
import{CriarDespesaDto}from "./dto/criar-despesa.dto";
import { DespesaEntity } from "./despesa.entity";
import{v4 as uuid} from 'uuid'
import { AtualizaDespesaDto } from "./dto/atualiza-despesa.dto";

@Controller('/despesa')
export class CadasdroDespesa{
    constructor (private despesaRepository:despesaRepository ){}
    
    // estou cadastradrando despesa
    @Post()
    async criaDespesa(@Body() dadosDeDespesa: CriarDespesaDto) {
        const despesaEntity = new DespesaEntity();
        despesaEntity.categoria = dadosDeDespesa.categoria;
        despesaEntity.valor = dadosDeDespesa.valor;
        despesaEntity.id = uuid()

       this.despesaRepository.guardar(despesaEntity)
       return {
        id : despesaEntity.id, message: "Despesa cadastrada com sucesso 🥰" 
       }
       
    }

    // estou listando as despesas
    @Get()
    async listaDespesa(){
        return this.despesaRepository.resultadoDeBusca();
    }



    //essa rota atualiza despesa
    @Put('/:id')
    async atualizaDespesa(@Param('id') id: string, @Body() atualizaDadosDespesa:AtualizaDespesaDto ){
        const despesaAtualizada = await this.despesaRepository.update (id,atualizaDadosDespesa);
            return{
                despesa: despesaAtualizada,
                mensagem: "Despesa Atualizada com sucesso ✅"
            }
    }



    @Delete('/:id')
    async removeDespesa(@Param('id') id: string){
        const despesaRemovida = await this.despesaRepository.delete(id)
        return{
            depesa: despesaRemovida,
            mensagem: "Depesa removida com sucesso✨"
        }
    }

}