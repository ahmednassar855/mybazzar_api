import { Brand } from "src/brands/entities/brand.entity";
import { Order } from "src/orders/entities/order.entity";
import { ProductType } from "src/product-types/entities/product-type.entity";
import { ProductVariant } from "src/product-variants/entities/product-variant.entity";
import { Stock } from "src/stocks/entities/stock.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    price: number;
    
    @Column()
    discount: number;

    @Column()
    discountedPrice: number;
    
    @Column()
    delivery_period: number;

    @Column()
    coverPhoto: string;

    @Column({ type: 'simple-array', nullable: true })
    productPhotos: string[];

    @ManyToOne(() => ProductVariant, (prodVar) => prodVar.products)
    varId: ProductVariant;
    
    @ManyToOne(() => Brand, (brand) => brand.products)
    brands: Brand;

    @OneToOne(() => Stock)
    @JoinColumn()
    stock: Stock;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
