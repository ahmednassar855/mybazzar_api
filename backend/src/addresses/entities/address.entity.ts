import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";


@Entity({name:'addresses'})
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @ManyToOne(() => User, (user) => user.addresses)
    user_id: User;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
