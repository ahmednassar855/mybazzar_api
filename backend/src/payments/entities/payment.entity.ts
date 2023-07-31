import { Order } from "src/orders/entities/order.entity";
import { User } from "src/users/entities/user.entity";
import { PaymentMethods } from "src/utility/common/payment-methods.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name:'payments'})
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'enum' , enum:PaymentMethods , array:true , default:[PaymentMethods.COD]})
    payment_methods: PaymentMethods[];

    @ManyToOne(() => User, (user) => user.payments)
    user_id: User;

    @OneToOne(() => Order)
    @JoinColumn()
    order: Order;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
