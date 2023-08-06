import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name: 'brands'})
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brandName: string;

    @Column()
    brandSlug: string;

    @OneToMany( ()=> Product , (product) =>product.brands )
    products: Product[];

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
