import { Column, Entity, PrimaryGeneratedColumn  } from "typeorm";

@Entity('todos')
export class TodosData{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 50, nullable: false})
    activity: string;

    @Column({type: 'varchar', length: 50, nullable: false})
    state: string;
}