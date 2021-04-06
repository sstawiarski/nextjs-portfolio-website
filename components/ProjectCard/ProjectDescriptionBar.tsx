import { FC } from 'react';
import { ProjectDescriptionBarTypes } from '../../types/ProjectCard';

const ProjectDescriptionBar: FC<ProjectDescriptionBarTypes> = ({ children }) => {
    return (
        <div className="flex space-x-3">
            {children}
        </div>
    );
};

export default ProjectDescriptionBar;