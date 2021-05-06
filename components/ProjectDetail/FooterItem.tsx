import React from "react";
import { FooterItemProps } from "../../@types";

import JavaIcon from "../../public/icons/java.svg";
import MysqlIcon from "../../public/icons/mysql.svg";
import ReactIcon from "../../public/icons/react.svg";
import MongoIcon from "../../public/icons/mongodb.svg";
import NextjsIcon from "../../public/icons/nextjs.svg";
import TypeScriptIcon from "../../public/icons/typescript.svg";

const FooterItem: React.FC<FooterItemProps> = ({ text = "", icon = "", additional = "" }) => {
    const Icon = getIcon(icon);
    return (
        <div className="flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row items-center  sm:justify-around mb-3">
                <Icon className="h-7 w-24 fill-current" />
                {icon !== "MySQL" && icon !== "MongoDB" && icon !== "Next.js" && (
                    <span
                        className={[
                            "font-normal text-lg mt-1",
                            icon === "Amazon Web Services" ? "" : "sm:-ml-10 lg:-ml-28",
                        ].join(" ")}>
                        {text}
                    </span>
                )}
            </div>

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
        case "Next.js":
            return NextjsIcon;
        case "TypeScript":
            return TypeScriptIcon;
        default:
            return () => null;
    }
}
