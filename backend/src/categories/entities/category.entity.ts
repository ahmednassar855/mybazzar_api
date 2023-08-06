import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, Tree, TreeChildren, TreeParent, UpdateDateColumn } from "typeorm";

@Entity({name:'categories'})
@Tree("nested-set")
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    description: string;

    @Column()
    descriptionSlug: string;

    @TreeParent()
    parent: Category;
   
    @Column()
    backgroundImage: string;

    @Column()
    backgroundImagUrl: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
}
