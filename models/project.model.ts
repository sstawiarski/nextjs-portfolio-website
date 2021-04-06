import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("project")
export class Project {
    @PrimaryGeneratedColumn()
    project_id: number;

    @Column()
    project_name: string;

    @Column()
    description: string;

    @Column({
        nullable: true
    })
    link: boolean;

    @Column({ length: 75 })
    project_type: string;

    @Column({
        nullable: true
    })
    is_featured: boolean;

    @Column({
        nullable: true
    })
    long_description: string;
}