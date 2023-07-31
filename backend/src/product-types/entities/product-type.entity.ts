import { ProductVariant } from "src/product-variants/entities/product-variant.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name: 'product-types'})
export class ProductType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type_name: string;

    @Column()
    type_slug: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;

    @OneToOne(() => ProductVariant)
    @JoinColumn()
    Product_variant: ProductVariant

    @ManyToOne(() => User, (user) => user.product_types)
    user_id: User;
}
