import { Injectable } from "@nestjs/common/decorators";
import { UsuarioEntity } from "./usuario.entity";
import { BadRequestException } from "@nestjs/common";
@Injectable()

export class usuarioRepository{
  private usuarios: UsuarioEntity[] = [];

 async salvar(usuario:UsuarioEntity){
 
    this.usuarios.push(usuario);
    // console.log(this.usuarios)
 }
  async retorno(){
    return this.usuarios;
  }
  async existeEsteEmail(email: string) {
    const possivelEmail = this.usuarios.find(
      usuario => usuario.email === email
    );
    return possivelEmail !== undefined
  }

  private buscaPorId(id: string){
    const possivelUsuario = this.usuarios.find(
      usuarioSalvo =>  usuarioSalvo.id === id  
    );
      if(!possivelUsuario){
        throw new BadRequestException('Ops esse usuário não foi encontrado!😦')
      }
      return possivelUsuario;
  }
  
  // função que irá atualizar o usuário
  async atualiza( id:string, dadosDeAtualizacao:Partial<UsuarioEntity>){
    const usuario = this.buscaPorId(id)
      Object.entries(dadosDeAtualizacao).forEach(([chave, valor ]) => {
          if(chave === 'id'){
            return;
          }
          usuario [chave] = valor;
      })

    return usuario;

  }

  // função que deleta usuário
  async remove(id:string){
    const  usuario = this.buscaPorId(id);
    this.usuarios = this.usuarios.filter(
      usuarioSalvo => usuarioSalvo.id !== id
    )
    return usuario;
  }
}