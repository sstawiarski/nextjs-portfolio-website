import { FC } from "react";
import classnames from "classnames";
import { useRouter } from "next/router";

import { ProjectCardTypes } from "../../types/ProjectCard";
import Link from "next/link";

const ProjectCard: FC<ProjectCardTypes> = ({ name, link = false, description = null, children = null, id = null }) => {
    const router = useRouter();
    const mainClasses = classnames(["transition", "p-4", "flex", "space-x-4", "flex-col"], {});

    const divClassnames = classnames(["rounded-md", "p-4", "transition", "w-full"], {
        "cursor-pointer": Boolean(link),
        "cursor-default": !Boolean(link),
        "hover:bg-gray-100": Boolean(link),
    });
    return (
        <article className={mainClasses}>
            <Link href={`/projects/${id}`}>
                <a>
                    <section className={divClassnames}>
                        <h1 className="text-xl">{name}</h1>
                        {description && <span className="text-base text-black text-opacity-70">{description}</span>}
                    </section>
                </a>
            </Link>
            {children && <section className="text-sm text-black text-opacity-50">{children}</section>}
        </article>
    );
};

export default ProjectCard;
