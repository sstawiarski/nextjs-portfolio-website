interface ChildProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export interface NavbarProps extends ChildProps, React.HTMLAttributes<HTMLDivElement> {
    Logo?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    link?: string;
};