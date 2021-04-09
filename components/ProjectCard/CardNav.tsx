import { FC } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { CardNavTypes } from "../../types/ProjectCard/index";

const CardNav: FC<CardNavTypes> = ({ children = null }) => {
    return (
        <nav className="p-4">
            <ScrollContainer>
            <ul className="flex space-x-2 flex-nowrap">
                {children && children}
            </ul>
            </ScrollContainer>
        </nav>
    );
};

export default CardNav;
