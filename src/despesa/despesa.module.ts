import { Module } from "@nestjs/common";
import { CadasdroDespesa } from "./despesa.controller";
import { despesaRepository } from "./despesa.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import{DespesaEntity} from "./despesa.entity"

@Module({
    imports: [TypeOrmModule.forFeature([DespesaEntity])],
    controllers:[CadasdroDespesa],
    providers:[despesaRepository]
})

export class DespesaModule{}