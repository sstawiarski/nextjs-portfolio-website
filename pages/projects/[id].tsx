import { getConnection, createConnection } from "typeorm";
import { Project, Technical } from "../../models";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { ProjectTypes } from "../../@types";
import { Subsection, ProfileFooter, FooterItem } from "../../components/ProjectDetail";

type Props = {
    project: ProjectTypes;
};

const ProjectDetails = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="shadow w-3/4 rounded mr-auto ml-auto p-4 mt-10">
            <h1 className="text-xl mb-5 font-bold">{project?.project_name}</h1>
            <p className="text-base -mt-6 text-black text-opacity-50">{project?.description}</p>
            {project?.long_description && <Subsection header="Description" content={project.long_description} />}
            {project?.bullets && <Subsection header="Features" content={project.bullets} bulleted />}
            {project?.screenshots && <Subsection header="Screenshots" content={project.screenshots} screenshots />}
            <ProfileFooter header="Technical Info">
                {project?.technical.map((tech, idx) => (
                    <FooterItem key={idx} text={tech?.title || tech.type} icon={tech.type} additional={tech?.additional} />
                ))}
            </ProfileFooter>
        </div>
    );
};

export default ProjectDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    // Return a list of possible value for id
    const conn = await getOrCreateConnection();
    const projectRepo = conn.getRepository<Project>("project");

    let localProjects: any[] = [];
    try {
        localProjects = await projectRepo.createQueryBuilder("project").select(["project_id"]).getMany();
    } catch (err) {}

    const paths = localProjects.map((item: any) => ({
        params: { id: JSON.parse(JSON.stringify(item))["project_id"]?.toString() },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    // Fetch necessary data for the blog post using params.id
    const conn = await getOrCreateConnection();
    const projectRepo = conn.getRepository<Project>("project");

    let localProjects: any[] = [];
    try {
        localProjects = await projectRepo
            .createQueryBuilder("project")
            .leftJoinAndSelect("project.technical", "tech")
            .where("project.project_id = :id", { id: params.id })
            .getMany();
    } catch (err) {}

    return {
        props: {
            project: (localProjects.map((item: any) => JSON.parse(JSON.stringify(item)) as Project) || [])[0],
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
        logging: false
      });
    }
  }