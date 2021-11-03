import { getConnection, createConnection } from "typeorm";
import { Project, Technical } from "../../models";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { ProjectTypes } from "../../@types";
import { Subsection, ProfileFooter, FooterItem } from "../../components/ProjectDetail";
import GitHubIcon from "../../public/icons/github.svg";
import { useRouter } from "next/router";

type Props = {
    project: ProjectTypes;
};

const ProjectDetails = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    return (
        <article className="md:shadow w-11/12 md:w-3/4 rounded mr-auto ml-auto p-4 md:mt-10 bg-white dark:bg-gray-700">
            <header>
                <div className="flex justify-between">
                    <h1 className="text-xl mb-5 font-bold">{project?.project_name}</h1>
                    {project?.url && (
                        <div className="cursor-pointer" onClick={() => router.push(project?.url)}>
                            <GitHubIcon className="fill-current w-8" />
                        </div>
                    )}
                </div>

                <p className="-mt-5 text-sm text-gray-700 dark:text-current">
                    {project?.description}
                </p>
            </header>
            {project?.long_description && <Subsection header="Description" content={project.long_description} />}
            {project?.bullets && <Subsection header="Features" content={project.bullets} bulleted />}
            {project?.screenshots && <Subsection header="Screenshots" content={project.screenshots} screenshots />}
            <ProfileFooter header="Technical Info">
                {project?.technical?.map((tech, idx) => (
                    <FooterItem
                        key={idx}
                        text={tech?.title || tech.type}
                        icon={tech.type}
                        additional={tech?.additional}
                    />
                ))}
            </ProfileFooter>
        </article>
    );
};

export default ProjectDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    // Return a list of possible value for id
    const conn = await getOrCreateConnection();
    const projectRepo = conn.getRepository<Project>("project");

    let localProjects: Project[];
    try {
        localProjects = await projectRepo.find({ select: ["project_id"] });
    } catch (err) {}

    const paths = localProjects.map((item: Project) => ({
        params: { id: item?.project_id.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    // Fetch necessary data for the blog post using params.id
    const conn = await getOrCreateConnection();
    const projectRepo = conn.getRepository<Project>("project");

    let localProjects: Project;
    try {
        localProjects = await projectRepo
            .createQueryBuilder("project")
            .leftJoinAndSelect("project.technical", "tech")
            .where("project.project_id = :id", { id: params.id })
            .getOne();
    } catch (err) {}

    return {
        props: {
            project: JSON.parse(JSON.stringify(localProjects)) as Project,
        },
    };
};

async function getOrCreateConnection() {
    try {
        const conn = getConnection();
        return conn;
    } catch (e) {
        return createConnection({
            type: "postgres",
            host: process.env.POSTGRES_HOST as string,
            port: parseInt(process.env.POSTGRES_PORT as string),
            username: process.env.POSTGRES_USER as string,
            password: process.env.POSTGRES_PASSWORD as string,
            database: process.env.POSTGRES_DB as string,
            entities: [Project, Technical],
            synchronize: true,
            logging: false,
        });
    }
}
