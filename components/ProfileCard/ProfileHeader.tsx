import { FC } from 'react';
import { useMediaQuery } from '@material-ui/core';

import { ProfileHeaderProps } from '../../types/ProfileCard/index';

const ProfileHeader: FC<ProfileHeaderProps> = ({ children = null, header, subtitle = '' }) => {
    const isVerySmall = useMediaQuery('(max-width: 406px)');
    const mainClasses = ["text-center flex flex-row xl:flex-col mb-1 md:mb-5 w-full cursor-default flex-wrap", isVerySmall ? "ml-10" : ""];
    const subtitleClasses = ["text-gray-600 sm:ml-2 xl:ml-0", isVerySmall ? "ml-0 pb-1" : "ml-2"];
    return (
        <div className={mainClasses.join(' ')}>
            <span className="font-semibold">{header}</span>
            {subtitle && <span className={subtitleClasses.join(' ')}>{subtitle}</span>}
        </div>
    );
};

export default ProfileHeader;
