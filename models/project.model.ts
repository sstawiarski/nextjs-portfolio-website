import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Technical } from './'

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

    @Column("text", {
        nullable: true,
        array: true
    })
    bullets: string[];

    @Column("text", {
        nullable: true,
        array: true
    })
    screenshots: string[];

    @Column({
        nullable: true
    })
    url: string;

    @OneToMany(() => Technical, technical => technical.project)
    technical: Technical[];
}