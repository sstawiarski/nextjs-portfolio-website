import { FC } from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';

import { ProjectCardTypes } from '../../types/ProjectCard';

const ProjectCard: FC<ProjectCardTypes> = ({ name, link = false, description = null, children = null, id = null }) => {
    const router = useRouter();
    const mainClasses = classnames(['transition', 'p-4', 'flex', 'space-x-4', 'flex-col'], {});

    const divClassnames = classnames(['rounded-md', 'p-4', 'transition', 'w-full'], {
        'cursor-pointer': Boolean(link),
        'cursor-default': !Boolean(link),
        'hover:bg-gray-100': Boolean(link),
    });
    return (
        <article className={mainClasses} onClick={() => (link ? router.push(`projects/${id || name}`) : null)}>
            <section className={divClassnames}>
                <h1 className="text-xl">{name}</h1>
                {description && <span className="text-base text-black text-opacity-60">{description}</span>}
            </section>
            {children && <section className="text-sm text-black text-opacity-40">{children}</section>}
        </article>
    );
};

export default ProjectCard;
