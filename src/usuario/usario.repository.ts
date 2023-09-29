import { Injectable } from "@nestjs/common/decorators";
@Injectable()

export class usuarioRepository{
  private usuarios = [];

 async salvar(usuario){
 
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