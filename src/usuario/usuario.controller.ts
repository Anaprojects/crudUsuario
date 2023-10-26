import {Body, Controller, Get, Param, Post,Put,Delete } from "@nestjs/common";
import { usuarioRepository } from "./usario.repository";
import { CriarUsuarioDto } from "./dto/criar-usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import{v4 as uuid} from 'uuid'
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AtualizaUsuarioDto } from "./dto/atualiza-usuario.dto";

@Controller('/cadastro')
export class UsuarioController {
    constructor (private usuarioRepository: usuarioRepository) {}

    // essa rota cadastra os usuários
    @Post()
        async criarUsuario(@Body() dadosDeCadastro: CriarUsuarioDto){
            const usuarioEntity = new UsuarioEntity();
            usuarioEntity.email = dadosDeCadastro.email;
            usuarioEntity.senha = dadosDeCadastro.senha;
            usuarioEntity.nome = dadosDeCadastro.nome;
            usuarioEntity.id = uuid()
            this.usuarioRepository.salvar(usuarioEntity)
             return {
                id: usuarioEntity.id, message :" Usuário cadastrado com sucesso🥰 "
            }
        }

        // essa rota lista os usuários
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

    // essa rota atualiza os usuários
    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() atualizaDados: AtualizaUsuarioDto){
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, atualizaDados);
            return{
                usuario: usuarioAtualizado,
                mensagem: "Usuário atualizado com sucesso ✅ "
            }
    }
    
    // essa rota deleta os usuários
    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.usuarioRepository.remove(id)

        return{
            usuario: usuarioRemovido,
            mensagem: 'Usuário deletado com sucesso✨'
     
        }
    }
}