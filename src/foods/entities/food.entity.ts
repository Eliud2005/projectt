import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id!: number; 
    @Column()
    name!: string;
    @Column()
    description!: string;
    @Column()
    image!: string;
    @Column()
    category!: string;
    @Column({default: true})
    isAvailable!: boolean;
}
