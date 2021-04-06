import { getOrCreateConnection } from '../../utils/index';
import { Project } from '../../models/project.model';
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'

const ProjectDetails = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="shadow w-3/4 rounded mr-auto ml-auto p-4 mt-10">
            <h1 className="text-xl mb-5 font-bold">{project?.project_name}</h1>
            <h3 className="font-semibold">Description</h3>
            <h3 className="text-lg">{project?.description}</h3>
        </div>
    );
}

export default ProjectDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    // Return a list of possible value for id
    const conn = await getOrCreateConnection();
    const projectRepo = conn.getRepository<Project>('Project');

    let localProjects: any[] = [];
    try {
        localProjects = await projectRepo
            .createQueryBuilder('project')
            .select(['project_id'])
            .execute();
    } catch (err) {}

    const paths = localProjects.map((item: any) => ({ params: { id: JSON.parse(JSON.stringify(item))["project_id"]?.toString() }}));
    return { paths, fallback: false };
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Fetch necessary data for the blog post using params.id
    const conn = await getOrCreateConnection();
    const projectRepo = conn.getRepository<Project>('Project');

    let localProjects: any[] = [];
    try {
        localProjects = await projectRepo
            .createQueryBuilder('project')
            .select(['project_id', 'project_name', 'description', 'project_type', 'is_featured', 'long_description'])
            .where('project.project_id = :id', { id: params.id })
            .execute();
    } catch (err) {}

    return {
        props: {
            project: (localProjects.map((item: any) => JSON.parse(JSON.stringify(item)) as Project) || [])[0],
        },
    };
  }