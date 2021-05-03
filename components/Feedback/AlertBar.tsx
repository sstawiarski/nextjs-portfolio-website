import { FC, useEffect } from "react";

export type AlertBarProps = {
    message: string | React.ReactNode;
    color?: "blue" | "green" | "red";
    onClose: () => void;
    open: boolean;
    autoTimeout?: number;
};

const AlertBar: FC<AlertBarProps> = ({ open, onClose, message, color = "green", autoTimeout }) => {

    const colorSelection =
        color === "blue"
            ? "bg-blue-500 dark:bg-blue-800"
            : color === "green"
            ? "bg-green-500 dark:bg-green-800"
            : color === "red"
            ? "bg-red-500 dark:bg-red-800"
            : "";

    const isOpen = open ? "opacity-100 py-4" : "opacity-0 h-0 mb-0";

    /* Remove alert after specified period of time */
    useEffect(() => {
        if (open && autoTimeout) {
            setTimeout(() => onClose(), autoTimeout);
        }
    }, [autoTimeout, open]);

    return (
        <div className={["text-white px-6 border-0 rounded relative mb-4 transition-all duration-300", colorSelection, isOpen].join(" ")}>
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">{message}</span>
            <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={onClose}>
                <span>×</span>
            </button>
        </div>
    );
};

export default AlertBar;
