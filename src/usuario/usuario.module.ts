import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { usuarioRepository } from "./usario.repository";
@Module({
    controllers: [UsuarioController],
    providers: [usuarioRepository]
})
export class usuarioModule{}