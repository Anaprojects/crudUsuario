import { IsNumber, IsNotEmpty,Min,MinLength, IsOptional} from 'class-validator';

export class AtualizaDespesaDto {

  @Min(2)
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  valor: number;

  @MinLength(3)
  @IsNotEmpty()
  @IsOptional()
  categoria: string;

}