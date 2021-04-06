import { Project } from "../../models/project.model"

export type CardNavTypes = {
    children?: React.ReactNode;
}

export type CardNavItemTypes = {
    onSelect: (name: string) => void;
    isActive: boolean;
    children?: React.ReactNode;
    link?: string;
    name: string;
}

export type ProjectListTypes = {
    defaultSelection?: string;
    children?: React.ReactNode;
    divide?: boolean;
    projects?: Project[];
}

export type ProjectDescriptionBarItemTypes = {
    icon: "Java" | "React" | "JavaScript" | "SQL" | "HTML" | "CSS",
    text?: string;
}

export type ProjectDescriptionBarTypes = {
    children: React.ReactChild | React.ReactChild[];
}

export type ProjectCardTypes = {
    name: string;
    link?: boolean;
    description?: string;
    children?: React.ReactChild;
    id?: number;
}