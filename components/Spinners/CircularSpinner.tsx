import { FC } from "react";

const CircularSpinner: FC = () => {
    return (
        <svg className="animate-spin w-5 h-5" viewBox="0 0 50 50" >
            <circle className="path stroke-current" cx="25" cy="25" r="20" fill="none" stroke-width="5" strokeDasharray="75 25"></circle>
        </svg>
    );
};

export default CircularSpinner;
