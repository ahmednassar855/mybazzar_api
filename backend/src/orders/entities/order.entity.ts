import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { OrderDeliveries } from "src/utility/common/order-deliveries.enum";
import { OrderStatus } from "src/utility/common/order-status.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name:'orders'})
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'enum' , enum:OrderStatus , array:true , default:[OrderStatus.NOTPAID]})
    orderStatus: OrderStatus[];
    
    @Column({type:'enum' , enum:OrderDeliveries , array:true , default:[OrderDeliveries.DELIVERD]})
    orderDeliveries: OrderDeliveries[];

    // order to realted with variants not with product
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Product, (product) => product.order_id)
    products: Product[];

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
