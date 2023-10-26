import { IsNumber, IsNotEmpty,Min,MinLength} from 'class-validator';

export class CriarDespesaDto {

  @Min(2)
  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @MinLength(3)
  @IsNotEmpty()
  categoria: string;

}