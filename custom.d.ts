declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

export type Project = {
    name: string;
    type: 'Java' | 'React' | 'JavaScript' | 'SQL' | 'HTML' | 'CSS';
    description?: string;
    link?: string;
    isFeatured: boolean;
};