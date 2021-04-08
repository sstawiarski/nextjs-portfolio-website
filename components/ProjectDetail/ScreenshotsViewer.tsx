import { ScreenshotsViewerProps } from "../../@types";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import ImagePreviewModal from './ImagePreviewModal';
import { useState } from 'react';

const ScreenshotsViewer: React.FC<ScreenshotsViewerProps> = ({ links = [] }) => {
    const [imageOpen, setImageOpen] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<string>("");

    const handleScreenshotClick = (e: React.MouseEvent<HTMLDivElement>, link = "") => {
        e.stopPropagation();
        setImageSrc(link);
        setImageOpen(true);
    }

    return (
        <>
        <div>
            <div className="screenshot-viewer w-full h-auto overflow-scroll whitespace-nowrap py-10">
                <ScrollContainer hideScrollbars={false}>
                    {links.length &&
                        links.map((link, idx) => {
                            return (
                                <div onClick={(e) => handleScreenshotClick(e, link)} className="relative inline-block h-64 sm:h-96 w-full sm:w-96 mx-5 shadow-md rounded cursor-pointer" key={idx}>
                                    <Image
                                        src={link}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                    />
                                </div>
                            );
                        })}
                </ScrollContainer>
            </div>
        </div>
        <ImagePreviewModal open={imageOpen} onClose={() => { setImageOpen(false); setImageSrc(""); }} imageSrc={imageSrc} />
        </>
    );
};

export default ScreenshotsViewer;
