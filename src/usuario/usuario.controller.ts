import {Body, Controller, Get, Post } from "@nestjs/common";
import { usuarioRepository } from "./usario.repository";
import { CriarUsuarioDto } from "./dto/criar-usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import{v4 as uuid} from 'uuid'
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";

@Controller('/cadastro')
export class UsuarioController {
    constructor (private usuarioRepository: usuarioRepository) {}
    @Post()
        async criarUsuario(@Body() dadosDeCadastro: CriarUsuarioDto){
            const usuarioEntity = new UsuarioEntity();
            usuarioEntity.email = dadosDeCadastro.email;
            usuarioEntity.senha = dadosDeCadastro.senha;
            usuarioEntity.nome = dadosDeCadastro.nome;
            usuarioEntity.id = uuid()
            this.usuarioRepository.salvar(usuarioEntity)
             return {
                id: usuarioEntity.id, message :" usuário cadastrado com sucesso "
            }
        }
    @Get()
        async listadeDados(){
      const usuariosSalvos = await this.usuarioRepository.retorno();
      const usuariosLista = usuariosSalvos.map(
        usuario => new ListaUsuarioDTO(
            usuario.id,
            usuario.nome
        )
      );
      return usuariosLista;
    }
}