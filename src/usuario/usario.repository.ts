import { Injectable } from "@nestjs/common/decorators";
import { UsuarioEntity } from "./usuario.entity";
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
  async atualiza( id:string, dadosDeAtualizacao:Partial<UsuarioEntity>){
    const possivelUsuario = this.usuarios.find(
      usuarioSalvo =>  usuarioSalvo.id === id  
    );
      if(!possivelUsuario){
        throw new Error('Usuário não existe')
      }
      Object.entries(dadosDeAtualizacao).forEach(([chave, valor ]) => {
          if(chave === 'id'){
            return;
          }
          possivelUsuario[chave] = valor;
      })

    return possivelUsuario;

  }
}