import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name: 'product-variants'})
export class ProductVariant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column('simple-array', { nullable: true })
    values: string[];

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
