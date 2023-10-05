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

}