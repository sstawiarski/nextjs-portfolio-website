import classnames from 'classnames';

import { InfoListProps } from '../../types/ProfileCard';

const InfoList = ({ children }: InfoListProps) => {
    const mainClasses = classnames(['flex', 'flex-col', 'space-y-2', 'lg:space-y-5']);

    return <div className={mainClasses}>{children}</div>;
};

export default InfoList;
