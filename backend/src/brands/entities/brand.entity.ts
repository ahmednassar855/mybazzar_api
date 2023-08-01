import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name: 'brands'})
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brandName: string;

    @Column()
    brand_slug: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
