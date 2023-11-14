import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DespesaEntity } from './despesa.entity';

@Injectable()
export class DespesaService{
  constructor(
    @InjectRepository(DespesaEntity)
    private despesaRepository: Repository<DespesaEntity>,
  ) {}

  findAll(): Promise<DespesaEntity[]> {
    // this.despesaRepository.save(cria)
    
    return this.despesaRepository.find();
  }
  async guardar (despesa:DespesaEntity){
    
    return this.despesaRepository.save(despesa)
  }
  async resultadoDeBusca(){
      return this.despesaRepository;
  }
  // async update (id:string, dadosAtualizados:Partial<DespesaEntity>){
  //   const despesa = this.buscarId(id)
  //     Object.entries(dadosAtualizados).forEach(([chave, valor])=> {
  //        if (chave === 'id'){
  //            return;
  //        }
  //       despesa [chave] = valor;
  //      })
  //       return despesa
  //    }
  findOne(id: number): Promise<DespesaEntity| null> {

    return this.despesaRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.despesaRepository.delete(id);
  }
}