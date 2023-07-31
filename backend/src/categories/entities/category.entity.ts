import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, Tree, TreeChildren, TreeParent, UpdateDateColumn } from "typeorm";


@Entity({name:'categories'})
@Tree("nested-set")
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category_name: string;

    @Column()
    category_slug: string;

    @TreeChildren()
    children: Category[];

    @TreeParent()
    parent: Category;

    @ManyToOne(() => User, (user) => user.categories)
    user_id: User;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
