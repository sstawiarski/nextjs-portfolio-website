import { FC } from 'react';

import { ProfileHeaderProps } from '../../types/ProfileCard/index';

const ProfileHeader: FC<ProfileHeaderProps> = ({ children = null, header, subtitle = '' }) => {
    return (
        <div className="text-center flex flex-row xl:flex-col mb-1 md:mb-5 w-full cursor-default">
            <span className="font-semibold">{header}</span>
            {subtitle && <span className="text-gray-500 ml-2 xl:ml-0">{subtitle}</span>}
        </div>
    );
};

export default ProfileHeader;
