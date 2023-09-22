import {Body, Controller, Get, Post } from "@nestjs/common";
import { usuarioRepository } from "./usario.repository";
import { CriarUsuarioDto } from "./dto/criar-usuario.dto";


@Controller('/cadastro')
export class UsuarioController {
    constructor (private usuarioRepository: usuarioRepository) {}
    @Post()
        async criarUsuario(@Body() dadosDeCadastro: CriarUsuarioDto){
            this.usuarioRepository.salvar(dadosDeCadastro)
             return dadosDeCadastro;
        }
    @Get()
        async listadeDados(){
            return this.usuarioRepository.retorno();
        }
}