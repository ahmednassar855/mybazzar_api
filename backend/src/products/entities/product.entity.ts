import { Order } from "src/orders/entities/order.entity";
import { Stock } from "src/stocks/entities/stock.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_name: string;

    @Column()
    product_slug: string;

    @Column()
    price: number;
    
    @Column()
    discount: number;

    @Column()
    discounted_price: number;
    
    @Column()
    delivery_period: number;

    @Column()
    cover_photo: string;

    @Column({ type: 'simple-array', nullable: true })
    product_photos: string[];


    @ManyToOne(() => User, (user) => user.products)
    user_id: User;

    @ManyToOne(() => Order, (order) => order.products)
    order_id: Order;


    @OneToOne(() => Stock)
    @JoinColumn()
    stock: Stock;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
