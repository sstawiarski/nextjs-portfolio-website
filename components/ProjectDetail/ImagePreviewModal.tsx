import { FC, useState } from "react";
import classnames from "classnames";
import Image from "next/image";
import CircularSpinner from "../Spinners/CircularSpinner";
import content from "../../public/icons/close.svg";

const CloseIcon = content;

type ImagePreviewModalProps = {
    imageSrc: string;
    onClose: () => void;
    open: boolean;
};

const ImagePreviewModal: FC<ImagePreviewModalProps> = ({ open, imageSrc, onClose }) => {
    const [isReady, setReady] = useState<boolean>(false);

    const classes = classnames(
        [
            "fixed",
            "z-10",
            "pt-80",
            "w-full",
            "h-full",
            "overflow-auto",
            "bg-opacity-75",
            "bg-black",
            "left-0",
            "top-0",
            "transition-opacity",
        ],
        {
            hidden: !open,
            block: open,
        }
    );
    return (
        <div className={classes} onClick={onClose}>
            <button className="block fixed right-0 top-0 z-20 m-10 text-white hover:text-red-600" onClick={onClose}>
                <CloseIcon className="fill-current w-4 h-4" />
            </button>
            {imageSrc && (
                <Image
                    className="p-10 transition"
                    src={imageSrc}
                    layout="fill"
                    objectFit="contain"
                    onLoad={() => setReady(true)}
                />
            )}
            
            {!isReady && (
                <div className="text-blue-500">
                    <CircularSpinner />
                </div>
            )}
        </div>
    );
};

export default ImagePreviewModal;
