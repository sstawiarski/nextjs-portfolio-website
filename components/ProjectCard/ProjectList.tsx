import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { ProjectDescriptionBarItemTypes, ProjectListTypes } from '../../types/ProjectCard/index';
import { CardNav, CardNavItem, ProjectCard } from './index';
import ProjectDescriptionBar from './ProjectDescriptionBar';
import ProjectDescriptionBarItem from './ProjectDescriptionBarItem';
import { Project } from '../../models/project.model';

const ProjectList: FC<ProjectListTypes> = ({
    children = null,
    divide = false,
    defaultSelection = 'Featured',
    projects,
}) => {
    const router = useRouter();

    const [selected, setSelected] = useState<string>(defaultSelection);
    const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);

    const mainClasses = classnames(['rounded-md', 'shadow', 'w-full', 'xl:w-10/12'], {
        'divide-y': divide,
    });

    useEffect(() => {
        if (selected) {
            if (selected === 'Featured') {
                setDisplayedProjects(projects.filter((proj) => proj['is_featured'] === true));
            } else {
                setDisplayedProjects(projects.filter((proj) => selected !== "All" ? proj.project_type === selected : true));
            }
        }
    }, [selected]);

    return (
        <div className={mainClasses}>
            <CardNav>
                <CardNavItem
                    name="Featured"
                    onSelect={(name) => setSelected(name)}
                    isActive={selected === 'Featured'}
                />
                <CardNavItem name="Java" onSelect={(name) => setSelected(name)} isActive={selected === 'Java'} />
                <CardNavItem name="React" onSelect={(name) => setSelected(name)} isActive={selected === 'React'} />
                <CardNavItem name="All" onSelect={(name) => setSelected(name)} isActive={selected === 'All'} />
            </CardNav>

            {displayedProjects.length ? (
                displayedProjects.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        name={proj.project_name}
                        description={proj?.description}
                        link={Boolean(proj?.link) || true}
                        id={proj?.project_id}
                    >
                        <ProjectDescriptionBar>
                            <ProjectDescriptionBarItem
                                icon={proj.project_type as ProjectDescriptionBarItemTypes['icon']}
                                text={proj.project_type}
                            />
                        </ProjectDescriptionBar>
                    </ProjectCard>
                ))
            ) : (
                <div className="w-full text-center p-8">
                    <span className="text-gray-400">No projects found</span>
                </div>
            )}
        </div>
    );
};

export default ProjectList;
