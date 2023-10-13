import {IsNotEmpty, IsNumber, MinLength,IsEmail} from 'class-validator';
import { EmailUnico } from '../validacao/emailUnico.validator';

export class CriarUsuarioDto{
    @MinLength(3)
    @IsNotEmpty()
    nome: string;

   
    @IsNumber()
    senha: number;
    
    @IsEmail()
    @IsNotEmpty()
    @EmailUnico({ message: "Esse email já esta cadastrado!"})
    email: string

    @IsNotEmpty()
    aniversario: string
}