import { IsNumber, IsNotEmpty,Min} from 'class-validator';

export class CriarDespesaDto {
  @Min(2)
  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsNotEmpty()
  tipo: string;
}