import { FC } from 'react';
import { ProjectDescriptionBarItemTypes } from '../../types/ProjectCard';
import { getIcon } from '../../utils'

const ProjectDescriptionBar: FC<ProjectDescriptionBarItemTypes> = ({ icon, text = null }) => {
    const Icon = getIcon(icon);
    return (
        <div className="flex space-x-1 mt-1">
            <Icon className="w-6 h-6 fill-current" />
            <span className="font-bold mt-1.5 pl-2">{text}</span>
        </div>
    );
};

export default ProjectDescriptionBar;