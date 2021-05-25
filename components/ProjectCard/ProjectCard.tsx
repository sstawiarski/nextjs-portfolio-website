import { FC } from "react";
import classnames from "classnames";

import { ProjectCardTypes } from "../../types/ProjectCard";
import Link from "next/link";

const ProjectCard: FC<ProjectCardTypes> = ({ name, link = false, description = null, children = null, id = null }) => {
    const mainClasses = classnames(["transition", "p-4", "flex", "space-x-4", "flex-col"], {});

    const divClassnames = classnames(["rounded-md", "p-4", "transition", "w-full", "group"], {
        "cursor-pointer": Boolean(link),
        "cursor-default": !Boolean(link),
        "hover:bg-gray-200 dark:hover:bg-gray-800": Boolean(link),
    });
    return (
        <article className={mainClasses}>
            <Link href={`/projects/${id}`}>
                <a>
                    <section className={divClassnames}>
                        <h1 className="text-xl group-hover:text-green-500">{name}</h1>
                        {description && <span className="text-base text-black dark:text-current text-opacity-70">{description}</span>}
                    </section>
                </a>
            </Link>
            {children && <section className="text-sm text-black dark:text-current text-opacity-50">{children}</section>}
        </article>
    );
};

export default ProjectCard;
