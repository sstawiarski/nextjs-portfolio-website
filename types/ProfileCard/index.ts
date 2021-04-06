import React from "react";

export type InfoItemProps = {
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    header: string;
    additional?:string;
    clickable?: boolean;
    onClickHandle?: (event?: React.MouseEvent<HTMLElement>) => void;
};

export type ProfilePictureProps = {
    source: string;
}

interface ChildProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export interface InfoListProps extends ChildProps {};

export interface ProfileCardProps extends ChildProps {};

export interface ProfileHeaderProps extends ChildProps {
    header: string;
    subtitle?: string;
};