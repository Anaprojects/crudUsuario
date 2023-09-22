import { IsDate, IsNotEmpty, IsNumber, MinLength,Max } from 'class-validator';

export class CriarUsuarioDto{
    @MinLength(3)
    @IsNotEmpty()
    nome: string;

    @Max(6)
    @IsNumber()
    senha: number;

    @IsDate()
    aniversario: string
}