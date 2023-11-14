import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DespesaEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column('int')
    valor: number;
    @Column({length:16})
    categoria:string;
}