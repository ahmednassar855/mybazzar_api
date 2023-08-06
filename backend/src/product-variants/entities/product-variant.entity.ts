import { Order } from "src/orders/entities/order.entity";
import { ProductType } from "src/product-types/entities/product-type.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name: 'product-variants'})
export class ProductVariant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column('simple-array', { nullable: true })
    values: string[];

    @OneToMany(() => Product, (product) => product.varId)
    products: Product[];

    @ManyToOne(() => Order, (order) => order.productVariants)
    orders: Order[];

    @ManyToOne(() => ProductType, (prodType) => prodType.ProductVariant)
    varId: ProductType;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
