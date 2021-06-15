import { FC } from "react";
import { useRouter } from "next/router";
import GitHubIcon from "../public/icons/github.svg";

type ResumeProject = {
    name: string;
    addl?: string;
    subtitle?: string;
    bullets: string[];

    /** An external URL to link to, such as GitHub */
    ext_url?: string;
    /** The relative URL of the project page in this portfolio */
    url?: string;
};

type ResumeWorkHistory = {
    company: string;
    location: string;
    startMonth: string;
    endMonth: string;
    jobTitle: string;
};

type ResumeSkill = {
    title: string;
    items: string | string[];
};

/* List of projects for the resume Projects section */
const projects: ResumeProject[] = [
    {
        name: "Asset Management Dashboard",
        addl: "Capstone Project",
        subtitle: "Full stack MERN dashboard for managing and tracking business assets",
        bullets: [
            "Implemented and documented 20+ endpoints of a RESTful API using Node.js, Express, and Swagger UI",
            "Designed complex aggregation pipelines to implement filtering, sorting, and location mapping of assets using MongoDB and Mongoose",
            "Implemented 30+ components of a single-page application built with React and Material-UI",
            "Deployed finished project demo using AWS S3 / CloudFront, Heroku, and MongoDB Atlas",
            "Translated verbal wants, needs, and feedback from the product owner to actionable requirements",
            "Demonstrated finished deliverables to the product owner regularly over the course of the 6 month project",
            "Led a team of 5 in a collaborative, remote environment using Agile / Scrum SDLC",
        ],
        ext_url: "https://github.com/sstawiarski/SER-401-Project-24",
        url: "/projects/2",
    },
    {
        name: "Portfolio Website",
        subtitle:
            "My personal portfolio website (you're on it right now!), built using Next.js / React, TailwindCSS, and PostgreSQL",
        bullets: [
            "Planned and executed a responsive custom website design using the Tailwind CSS framework",
            "Used TypeScript to develop React components to display profile, project, and resume information",
            "Architected a PostgreSQL database using TypeORM models and deployed using AWS RDS",
            "Optimized website performance and SEO using Lighthouse analysis and Next.js features such as static generation, server-side rendering, and image optimization to achieve a Lighthouse score of 100",
            "Employed Amazon Web Services including Lambda, Simple Email Service (SES), and API Gateway to implement a serverless email contact form",
        ],
        ext_url: "https://github.com/sstawiarski/nextjs-portfolio-website",
        url: "/projects/3",
    },
    {
        name: "Distributed Peer-to-Peer Chatroom and Calculator",
        subtitle: "Multithreaded Java application for performing calculations across distributed nodes",
        bullets: [
            "Managed state and processed input using threads and synchronized methods / locks to avoid race conditions",
            "Modeled peer communication as structured messages using protocol buffers",
            "Handled communication errors by electing new leaders as necessary to ensure the fault tolerance of the network",
            "Developed JUnit tests to verify system functionality and catch errors",
        ],
        url: "/projects/4",
    },
    {
        name: "Movie Database and CLI Tool",
        subtitle: "Java command line application accessing a MySQL database to perform selected queries on movies",
        bullets: [
            "Generated intial ER diagram with 13 tables normalized to 3NF to ensure database integrity",
            "Constructed 22 queries using the JDBC API to allow users to list, search, and add movies, awards, and directors",
            "Maintained database security and performance by using PreparedStatements for queries based on user input",
        ],
        url: "/projects/1",
    },
];

/* Work history section content */
const workItems: ResumeWorkHistory[] = [
    {
        location: "Canonsburg, PA",
        jobTitle: "Barista",
        startMonth: "July 2017",
        endMonth: "June 2021",
        company: "Starbucks Coffee Company",
    },
    {
        location: "Washington, PA",
        jobTitle: "Retail Associate",
        startMonth: "March 2015",
        endMonth: "October 2015",
        company: "The Gap, Inc.",
    },
    {
        location: "Canonsburg, PA",
        jobTitle: "Team Member",
        startMonth: "June 2014",
        endMonth: "October 2014",
        company: "Zoup! Eatery",
    },
];

/* Skills section content */
const skills: ResumeSkill[] = [
    {
        title: "Languages",
        items: ["Java", "JavaScript", "TypeScript", "HTML", "some C/C++ and CSS"],
    },
    {
        title: "Libraries / Frameworks",
        items: ["React.js", "Redux", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Tools",
        items: ["Git / GitHub", "Travis-CI", "Node.js", "Express", "Passport.js", "Mongoose", "JDBC"],
    },
    {
        title: "Databases",
        items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
];

const Resume: FC = () => {
    const router = useRouter();

    return (
        <article className="md:shadow w-11/12 md:w-3/4 rounded mr-auto ml-auto p-4 md:mt-10 bg-white dark:bg-gray-700">
            <header>
                <h1 className="text-2xl mb-5 font-bold">Resume</h1>
                <div className="flex flex-col sm:flex-row text-center sm:text-left w-full sm:justify-between px-4">
                    <div className="flex flex-col mb-4 sm:mb-0 ">
                        <span className="text-xl font-medium">Shawn Stawiarski</span>
                        <span>Software Engineer</span>
                    </div>
                    <div className="flex flex-col text-center sm:text-right">
                        <a href="tel:+14122128518" className="hover:text-blue-600 transition-colors">
                            (412) 212 - 8518
                        </a>
                        <a href="mailto:contact@shawnstawiarski.com" className="hover:text-blue-600 transition-colors">
                            contact@shawnstawiarski.com
                        </a>
                        <a href="https://github.com/sstawiarski" className="hover:text-blue-600 transition-colors">
                            github.com/sstawiarski
                        </a>
                    </div>
                </div>
            </header>

            {/* Education */}
            <section className="mt-8 sm:mt-4 ml-4">
                <span className="font-semibold text-lg">Education</span>
                <hr />
                <div className="education-subsection mt-2">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <span className="font-semibold text-base">Arizona State University</span>
                        <span className="sm:font-semibold text-base">January 2018 - May 2021</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="text-base italic sm:not-italic">
                            Bachelor of Science in Software Engineering
                        </span>
                        <span className="text-base">GPA: 3.79</span>
                    </div>
                </div>
                <div className="education-subsection mt-6">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <span className="font-semibold text-base">Western Washington University</span>
                        <span className="sm:font-semibold text-base">September 2015 - June 2017</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="text-base italic sm:not-italic">General Studies</span>
                        <span className="text-base">2 years completed</span>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="mt-4 ml-4">
                <span className="font-semibold text-lg">Skills</span>
                <hr />
                {skills.map((skill, idx) => (
                    <div className="flex flex-col sm:flex-row sm:justify-between mt-2" key={idx}>
                        <span className="font-semibold text-base">{skill.title}:</span>
                        <span>{Array.isArray(skill.items) ? skill.items.join(", ") : skill.items}</span>
                    </div>
                ))}
            </section>

            {/* Projects */}
            <section className="mt-4 ml-4">
                <span className="font-semibold text-lg">Projects</span>
                <hr />
                {projects.map((proj) => {
                    const hasURL = Boolean(proj?.url);
                    const classname = [
                        "font-semibold text-base",
                        hasURL
                            ? "hover:text-blue-700 dark:hover:text-green-500 transition-colors cursor-pointer"
                            : "cursor-default",
                    ].join(" ");

                    return (
                        <div key={proj.name} className="mt-2 mb-4">
                            <div className="flex justify-start -mb-7">
                                <span className={classname} onClick={() => (hasURL ? router.push(proj.url) : null)}>
                                    {proj.name}
                                </span>
                                {proj?.ext_url && (
                                    <a target="_blank" href={proj.ext_url} rel="noopener noreferrer">
                                        <GitHubIcon
                                            aria-label={`Link to project named ${proj.name} GitHub repo`}
                                            className="fill-current cursor-pointer ml-3 h-5 w-5 mt-0 mb-2 hover:text-blue-700 dark:hover:text-green-500 transition-colors"
                                        />
                                    </a>
                                )}
                            </div>
                            <br />

                            <span className="italic text-base">{proj?.subtitle}</span>
                            <br />

                            <div className="project-bullets">
                                <ul className="list-disc ml-5 sm:ml-10 mt-4 sm:mt-0">
                                    {proj.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* Work History */}
            <section className="mt-4 ml-4">
                <span className="font-semibold text-lg">Work History</span>
                <hr />
                {workItems.map((workItem, idx) => (
                    <div key={idx} className="work-subsection mt-3">
                        <div className="flex flex-col sm:flex-row justify-between">
                            <span className="font-semibold text-base">{workItem.jobTitle}</span>
                            <span className="sm:font-semibold text-base">
                                {workItem.startMonth} - {workItem.endMonth}
                            </span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="italic sm:not-italic text-base">{workItem.company}</span>
                        </div>
                        <span className="italic">{workItem.location}</span>
                    </div>
                ))}
            </section>
        </article>
    );
};

export default Resume;
