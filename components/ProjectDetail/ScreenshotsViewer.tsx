import { ScreenshotsViewerProps } from "../../@types";
import Image from "next/image";

const ScreenshotsViewer: React.FC<ScreenshotsViewerProps> = ({ links = [] }) => {
    return (
        <div className="p-8">
            <div className="flex overflow-x-scroll flex-nowrap">
                {links.length &&
                    links.map((link, idx) => {
                        return (
                            <div className="relative h-48 md:h-96 w-full mr-5 ml-5 shadow rounded" key={idx}>
                                <Image src={link} layout="fill" objectFit="cover" className="shadow-md rounded" />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ScreenshotsViewer;
