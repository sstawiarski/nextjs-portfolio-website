import { SubsectionProps } from "../../@types";
import { ScreenshotsViewer } from "./";

const Subsection: React.FC<SubsectionProps> = ({ content, header, bulleted = false, screenshots = false }) => {
    return (
        <section className="mt-4">
            <span className="font-semibold text-lg">{header}</span>
            {typeof content === "string" && (
                <p className="mt-2 break-all font-normal text-black dark:text-current text-opacity-70">{content}</p>
            )}
            {Array.isArray(content) && !screenshots && (
                <ul className={bulleted ? "list-disc ml-8" : "list-none ml-2"}>
                    {content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}
            {Array.isArray(content) && screenshots && <ScreenshotsViewer links={content} />}
        </section>
    );
};

export default Subsection;
