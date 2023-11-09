
import { Module,ClassSerializerInterceptor } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
import { DespesaModule } from './despesa/despesa.module';
import{APP_INTERCEPTOR}  from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import{ DespesaEntity} from 'src/despesa/despesa.entity'

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
  imports: [ usuarioModule, DespesaModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'crudUsuario',
      entities: [DespesaEntity],
      synchronize: true,
    }),]

})
export class AppModule {}

