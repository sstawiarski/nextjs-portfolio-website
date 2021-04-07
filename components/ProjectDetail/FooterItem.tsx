import { FooterItemProps } from "../../@types";
import { getIcon } from "../../utils";

const FooterItem: React.FC<FooterItemProps> = ({ text = "", icon = "", additional = "" }) => {
    const Icon = getIcon(icon);
    return (
        <div className="flex flex-col">
            <div className="flex flex-row mr-auto ml-auto">
                <Icon className="w-7 h-7 fill-current mx-3" />
                <span className="font-normal text-lg mt-1">{text}</span>
            </div>
            <div className="flex-grow" />

            {additional.split("\\n").map((item) => (
                <>
                    <span className="font-light">{item}</span> <br />
                </>
            ))}
        </div>
    );
};

export default FooterItem;
