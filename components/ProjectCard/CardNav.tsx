import { FC } from 'react';

import { CardNavTypes } from '../../types/ProjectCard/index';

const CardNav: FC<CardNavTypes> = ({ children = null }) => {
    return (
        <nav className="p-4">
            <ul className="flex space-x-2">{children && children}</ul>
        </nav>
    );
};

export default CardNav;
