import { Address } from "src/addresses/entities/address.entity";
import { Brand } from "src/brands/entities/brand.entity";
import { Payment } from "src/payments/entities/payment.entity";
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
    isActive: boolean;

    @OneToMany(() => Address, (address) => address.user)
    addresses: Address[];

    @OneToOne(() => Brand)
    @JoinColumn()
    brand: Brand

    @OneToMany(() => Payment, (payment) => payment.user_id)
    payments: Payment[];

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
