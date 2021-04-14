import { FC } from 'react';
import classnames from 'classnames';

import { InfoItemProps } from '../../types/ProfileCard';

const InfoItem: FC<InfoItemProps> = ({ Icon, header, additional = '', clickable = false, onClickHandle = null }) => {
    const mainClasses = classnames(['flex', 'flex-row', 'flex-wrap', 'text-gray-500', 'space-x-5', 'w-64', 'xl:ml-4', 'dark:text-gray-300'], {
        'cursor-pointer': clickable,
        'cursor-default': !clickable,
    });

    return (
        <div className={mainClasses} onClick={(event) => (onClickHandle ? onClickHandle(event) : null)}>
            <Icon className="fill-current" />
            <span>{header}</span>
            {additional &&
                additional.split(' / ').map((part, idx) => {
                    return (
                        <span key={idx} className="text-gray-400 dark:text-gray-400 ml-2 hidden md:block xl:w-full text-sm md:pl-6">
                            {part}
                        </span>
                    );
                })}
        </div>
    );
};

export default InfoItem;
