import { Injectable } from "@nestjs/common/decorators"

@Injectable()

export class despesaRepository {
    private despesas = [];
    async salvar(despesa) {
        this.despesas.push(despesa)
        console.log(this.despesas)
    }

}