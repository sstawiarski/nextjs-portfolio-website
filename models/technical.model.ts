import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Project } from "./";

@Entity("technical")
export class Technical {
    @PrimaryGeneratedColumn()
    technical_id: number;

    @Column()
    type: string;

    @Column({
        nullable: true
    })
    title: string;

    @Column({
        nullable: true
    })
    additional: string;

    @ManyToOne(() => Project, project => project.technical)
    project: Project;
}