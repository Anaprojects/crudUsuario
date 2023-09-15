import { Module } from "@nestjs/common";
import { CadasdroDespesa } from "./despesa.controller";
import { despesaRepository } from "./despesa.repository";

@Module({
    controllers:[CadasdroDespesa],
    providers:[despesaRepository]
})

export class DespesaModule{}