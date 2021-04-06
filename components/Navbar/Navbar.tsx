import { FC } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';

import { NavbarProps } from '../../types/Navbar/index';

const Navbar: FC<NavbarProps> = ({ children, className, Logo = null, link = null }) => {
    const router = useRouter();
    const mainClasses = classnames(
        [
            'bg-gray-600',
            'w-10/12',
            'flex',
            'justify-around',
            'items-center',
            'mx-auto',
            'px-8',
            'h-12',
            'mt-4',
            'rounded-md',
        ],
        {
            [className]: Boolean(className),
        },
    );
    return (
        <nav className={mainClasses}>
            <div className={link ? 'cursor-pointer' : ''} onClick={() => (link ? router.push(`${link}`) : null)}>
                <span className="w-64 fill-current text-white p-2 font-mono text-lg">
                    {' '}
                    {'{'} Shawn Stawiarski {'}'}
                </span>
            </div>

            <span className="text-white hidden md:block">hi</span>
            <span className="text-white hidden md:block">hi</span>
            <span className="text-white hidden md:block">hi</span>
            <span className="text-white hidden md:block">hi</span>
            <span className="text-white block md:hidden">Expand</span>

            {children && children}
        </nav>
    );
};

export default Navbar;
