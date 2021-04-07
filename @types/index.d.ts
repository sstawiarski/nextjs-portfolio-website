declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

export type TechnicalTypes = {
    type: string;
    additional?: string;
    technical_id: number;
    title?: string;
}

export type ProjectTypes = {
    project_id: number;
    project_name: string;
    description: string;
    link?: boolean;
    project_type: string;
    is_featured?: boolean;
    long_description?: string;
    bullets?: string[];
    screenshots?: string[];
    technical?: TechnicalTypes[];
}

type ListStyle =
    | {
        content: string | string[];
        header: string;
        bulleted?: boolean;
        screenshots?: never;
    }
    | {
        content: string | string[];
        header: string;
        bulleted?: never; 
        screenshots?: boolean;
    };

export type SubsectionProps = ListStyle;

export type ScreenshotsViewerProps = {
    links?: string[];
}

export type FooterProps = {
    header?: string;
    className?: string;
}

export type FooterItemProps = {
    icon?: string;
    text?: string;
    additional?: string;
}