import React from "react";
import { FooterItemProps } from "../../@types";

import JavaIcon from '../../public/icons/java.svg'

const FooterItem: React.FC<FooterItemProps> = ({ text = "", icon = "", additional = "" }) => {
    const Icon = getIcon(icon);
    return (
        <div className="flex flex-col">
            <div className="flex flex-row mr-auto ml-auto">
                <Icon className="w-7 h-7 fill-current mx-3" />
                <span className="font-normal text-lg mt-1">{text}</span>
            </div>
            <div className="flex-grow" />

            {additional.split("\\n").map((item, idx) => (
                <React.Fragment key={idx}>
                    <span className="font-light">{item}</span> <br />
                </React.Fragment>
            ))}
        </div>
    );
};

export default FooterItem;

function getIcon(type: string): React.FunctionComponent<React.SVGAttributes<SVGElement>> {
    switch (type) {
        case "Java":
            return JavaIcon;
        default:
            return null;
    }
}