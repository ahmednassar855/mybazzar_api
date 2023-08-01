import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, Tree, TreeChildren, TreeParent, UpdateDateColumn } from "typeorm";


@Entity({name:'addresses'})
@Tree("nested-set")
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    area: string;

    @Column()
    streetName: string;

    @Column()
    streetNumber: number;

    @Column()
    building: number;

    @Column()
    floor: number;

    @Column()
    apartment: string;

    @Column()
    postalCode: number;

    @TreeParent()
    defaultAddress: Address;

    @ManyToOne(() => User, (user) => user.addresses)
    userId: User;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
