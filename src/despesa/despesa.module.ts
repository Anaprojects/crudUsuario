import { Module } from "@nestjs/common";
import { despesaController } from "./despesa.controller";
import { despesaRepository } from "./despesa.repository";


@Module({
    controllers: [despesaController],
    providers: [despesaRepository]
})
export class usuarioModule{}