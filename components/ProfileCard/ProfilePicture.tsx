import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import { ProfilePictureProps } from '../../types/ProfileCard';

const ProfilePicture: FC<ProfilePictureProps> = ({ source }) => {
    const mainClasses = classnames([
        'border-solid',
        'border-4',
        'border-white',
        'shadow-md',
        'lg:w-52',
        'relative',
        'lg:h-52',
        'rounded-full',
        'xl: mb-5',
        'xl:-mt-32',
        'h-20',
        'w-20',
        'sm:w-24',
        'sm:h-24',
        'md:h-44',
        'md:w-44',
        'mt-auto',
        'md:mt-0',
        'dark:border-gray-300'
    ]);

    return (
        <div className="flex justify-center">
            <div className={mainClasses}>
                <Image
                    className="rounded-full"
                    src={source}
                    layout="fill"
                    alt="Picture showing side profile of Shawn Stawiarski"
                />
            </div>
        </div>
    );
};

export default ProfilePicture;
