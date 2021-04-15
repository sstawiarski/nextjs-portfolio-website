import React from "react";
import { FooterItemProps } from "../../@types";

import JavaIcon from '../../public/icons/java.svg'
import MysqlIcon from '../../public/icons/mysql.svg';
import ReactIcon from '../../public/icons/react.svg';
import MongoIcon from '../../public/icons/mongodb.svg';

const FooterItem: React.FC<FooterItemProps> = ({ text = "", icon = "", additional = "" }) => {
    const Icon = getIcon(icon);
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-around mb-3">
                <Icon className="h-7 w-28 fill-current" />
                {(icon !== "MySQL" && icon !== "MongoDB") && (<span className="font-normal text-lg mt-1 -ml-40">{text}</span>)}
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
        case "MySQL":
            return MysqlIcon;
        case "React":
            return ReactIcon;
        case "MongoDB":
            return MongoIcon;
        default:
            return null;
    }
}