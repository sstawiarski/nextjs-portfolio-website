import { FooterProps } from "../../@types";

const Footer: React.FC<FooterProps> = ({ header, children = null, className = "" }) => {
    return (
        <footer className={["mt-4", className].join(" ")}>
            <span className="font-semibold text-lg">{header}</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16 mt-10 mb-5 text-center text-gray-600">{children}</div>
        </footer>
    );
};

export default Footer;
