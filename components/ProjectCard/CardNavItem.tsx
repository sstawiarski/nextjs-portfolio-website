import { FC } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';

import { CardNavItemTypes } from '../../types/ProjectCard';

const CardNavItem: FC<CardNavItemTypes> = ({ onSelect, isActive, name, link = null, children = null }) => {
    const router = useRouter();
    const mainClasses = classnames(['rounded-md', 'px-4', 'py-2', 'cursor-pointer', 'transition'], {
        'bg-green-300': Boolean(isActive),
        'text-green-900': Boolean(isActive),
    });
    return (
        <li className={mainClasses} onClick={() => (link ? router.push(link) : onSelect(name))}>
            <span>{name}</span>
            {children}
        </li>
    );
};

export default CardNavItem;
