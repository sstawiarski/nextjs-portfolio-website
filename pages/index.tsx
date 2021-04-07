import { InferGetStaticPropsType } from 'next';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import Header from '../components/Header';
import { ProjectList } from '../components/ProjectCard';
import { getOrCreateConnection } from '../utils/index';
import { Project } from '../models';

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="flex xl:flex-row flex-col w-full justify-between">
            <ProfileCard className="ml-auto mr-auto mt-5 xl:ml-32 xl:mt-32 xl:mr-10" />
            <main className="flex flex-col w-10/12 xl:w-full ml-auto mr-auto xl:ml-4 xl:mr-0">
                <Header header="Projects" />
                <ProjectList divide projects={projects} />
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const conn = await getOrCreateConnection();
    const projectRepo = conn.getRepository<Project>('project');

    let localProjects: any[] = [];
    try {
        localProjects = await projectRepo
            .createQueryBuilder('project')
            .leftJoinAndSelect("project.technical", "t")
            .getMany();

    } catch (err) {}

    return {
        props: {
            projects: localProjects.map((item: any) => JSON.parse(JSON.stringify(item)) as Project)
        },
    };
};

export default Home;
