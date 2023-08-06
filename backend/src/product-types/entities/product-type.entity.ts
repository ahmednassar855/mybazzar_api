import { ProductVariant } from "src/product-variants/entities/product-variant.entity";
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name: 'product-types'})
export class ProductType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    kind: string;
    
    @Column({default:true})
    hasVariants: boolean;

    @Column({default:true})
    isShippingRequired: boolean;

    @Column({default:false})
    isDigital: boolean;

    @OneToMany(() => ProductVariant, (prodVariant) => prodVariant.varId)
    ProductVariant: ProductVariant[];

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
