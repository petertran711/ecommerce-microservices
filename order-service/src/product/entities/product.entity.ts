import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty()
    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price : number

    @Column()
    image : string

    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn({ type: 'timestamp', nullable: true })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;

}
