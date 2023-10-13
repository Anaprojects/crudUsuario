import { IsNotEmpty, IsNumber, MinLength, IsEmail, IsOptional } from 'class-validator';
import { EmailUnico } from '../validacao/emailUnico.validator';

export class AtualizaUsuarioDto {
    @MinLength(3)
    @IsNotEmpty()
    @IsOptional()
    nome: string;


    @IsNumber()
    @IsOptional()
    senha: number;

    @IsEmail()
    @IsNotEmpty()
    @EmailUnico({ message: "Esse email já esta cadastrado!" })
    @IsOptional()
    email: string

    @IsNotEmpty()
    @IsOptional()
    aniversario: string
}