
import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
import { DespesaModule } from './despesa/despesa.module';



@Module({
  imports: [ usuarioModule, DespesaModule]
})
export class AppModule { }
