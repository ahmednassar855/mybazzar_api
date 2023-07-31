import { Address } from "src/addresses/entities/address.entity";
import { Brand } from "src/brands/entities/brand.entity";
import { Category } from "src/categories/entities/category.entity";
import { Order } from "src/orders/entities/order.entity";
import { Payment } from "src/payments/entities/payment.entity";
import { ProductType } from "src/product-types/entities/product-type.entity";
import { Product } from "src/products/entities/product.entity";
import { Roles } from "src/utility/common/user-roles.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    password: string;
    
    @Column({type:'enum' , enum:Roles , array:true , default:[Roles.USER]})
    roles: Roles[];

    @Column({default: false})
    is_active: boolean;

    @Column()
    token: string;

    @OneToMany(() => Address, (address) => address.user_id)
    addresses: Address[];

    @OneToOne(() => Brand)
    @JoinColumn()
    brand: Brand


    @OneToMany(() => Order, (order) => order.user_id)
    orders: Order[];

    @OneToMany(() => Payment, (payment) => payment.user_id)
    payments: Payment[];

    @OneToMany(() => Category, (category) => category.user_id)
    categories: Category[];

    @OneToMany(() => ProductType, (product_type) => product_type.user_id)
    product_types: ProductType[];

    @OneToMany(() => Product, (product) => product.user_id)
    products: Product[];

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
