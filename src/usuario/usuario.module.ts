import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { usuarioRepository } from "./usario.repository";
import { emailUnicoValidador } from "./validacao/emailUnico.validator";
@Module({
    controllers: [UsuarioController],
    providers: [usuarioRepository, emailUnicoValidador]
})
export class usuarioModule{}