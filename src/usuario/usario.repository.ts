export class usuarioRepository{
 private usuarios = []

 async salvar(usuario){
    this.usuarios.push(usuario);
    // console.log(this.usuarios)
 }
 async retorno(){
   return this.usuarios;
 }
}