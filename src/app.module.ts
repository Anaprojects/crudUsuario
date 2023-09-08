import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';



@Module({
  imports: [usuarioModule],
})
export class AppModule {}
