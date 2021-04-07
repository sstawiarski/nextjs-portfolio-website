declare module "*.svg" {
    import React = require('react');
    export const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const src: string;
    export default src;
}

export type Project = {
    name: string;
    type: 'Java' | 'React' | 'JavaScript' | 'SQL' | 'HTML' | 'CSS';
    description?: string;
    link?: string;
    isFeatured: boolean;
};