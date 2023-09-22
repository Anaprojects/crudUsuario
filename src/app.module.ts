
import { Module,ClassSerializerInterceptor } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
import { DespesaModule } from './despesa/despesa.module';
import{APP_INTERCEPTOR}  from '@nestjs/core';



@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
  imports: [ usuarioModule, DespesaModule]

})
export class AppModule { }

