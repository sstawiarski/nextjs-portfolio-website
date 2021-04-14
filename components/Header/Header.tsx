import { FC } from 'react';
import { HeaderTypes } from '../../types/Header';

const Header: FC<HeaderTypes> = ({ header, divider = false, subtitle = null }) => {

    return (
        <div className="w-10/12 ml-2 mt-8">
            <span className="text-black dark:text-current text-2xl">{header}</span>
            {divider && <div style={{ borderBottom: "1px solid rgba(0,0,0, 0.2)" }} />}
            {subtitle && <span className="text-gray-600 text-sm">{subtitle}</span>}
        </div>
    );
};

export default Header;
