import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class DespesaEntity{
    @PrimaryColumn()
    id:string
    @Column('int')
    valor: number;
    @Column({length:16})
    categoria:string;
    
}