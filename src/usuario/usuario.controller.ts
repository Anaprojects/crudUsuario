import {Body, Controller, Get, Post } from "@nestjs/common";
import { usuarioRepository } from "./usario.repository";


@Controller('/cadastro')
export class UsuarioController {
    private usuarioRepository = new usuarioRepository();
    @Post()
        async criarUsuario(@Body() dadosDeCadastro){
            this.usuarioRepository.salvar(dadosDeCadastro)
             return dadosDeCadastro;
        }
    @Get()
        async listadeDados(){
            return this.usuarioRepository.retorno();
        }
}