import { FC } from 'react';
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
        subtitle: "Full-stack MERN application with a dashboard for performing CRUD operations on business assets",
        bullets: [
            "Created 20+ endpoints of a RESTful API using NodeJS, Express & MongoDB to enable CRUD operations on business assets including complex filtering and sorting using aggregation pipelines",
            "Implemented 35 modules/components of a single-page application built with React and Material-UI",
            "Delivered business value by streamlining use cases and developing features to replace manual data input",
            "Connected regularly with product owner to elicit requirements, demonstrate project progress, and address feedback over the course of 2 semesters",
            "Helped guide a team of 5 in a collaborative, remote environment using Agile / Scrum process",
            "Deployed finished project for demonstration purposes using AWS S3 / CloudFront for the frontend, Heroku for the API server, and MongoDB Atlas for the database",
        ],
        ext_url: "https://github.com/sstawiarski/SER-401-Project-24",
        url: "/projects/2",
    },
    {
        name: "Portfolio Website",
        subtitle:
            "My personal portfolio website (you're on it right now!), built using Next.js / React, TailwindCSS, and PostgreSQL",
        bullets: [
            "Created a responsive custom website design using the Tailwind CSS framework",
            "Utilized TypeScript to develop React components to display profile, project, and resume information",
            "Deployed a PostgreSQL database using AWS RDS and created TypeORM models for storing content",
            "Employed data fetching techniques supplied by Next.js to statically generate webpages",
            "Optimized website performance and SEO using Lighthouse analysis and Next.js features such as static generation, server-side rendering, and image optimization",
            "Employed AWS Lambda, AWS SES, and AWS API Gateway to implement a serverless email contact form",
        ],
        ext_url: "https://github.com/sstawiarski/nextjs-portfolio-website",
    },
    {
        name: "Distributed P2P Calculator",
        subtitle: "Multithreaded Java peer-to-peer calculator CLI application",
        bullets: [
            "Designed and implemented leader elections and distributed mathematical calculations",
            "Used protocol buffers to facilitate peer communication using structured messages",
            "Ensured fault tolerance by handling communication errors and electing new leaders as necessary",
        ],
    },
    {
        name: "Movie Database and CLI Tool",
        subtitle: "Java command line application accessing a MySQL database to perform selected queries on movies",
        bullets: [
            "Designed relational schema and performed database normalization to ensure database quality and data integrity across 13 tables",
            "Implemented 22 different queries on the database securely by using PreparedStatements & the JDBC API",
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
        endMonth: "Current",
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
        <article className="md:shadow w-11/12 md:w-3/4 rounded mr-auto ml-auto p-4 md:mt-10 dark:bg-gray-700">
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
                        <span className="text-base italic sm:not-italic">BS in Software Engineering</span>
                        <span className="text-base">GPA: 3.79</span>
                    </div>
                </div>
                <div className="education-subsection mt-6">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <span className="font-semibold text-base">Western Washington University</span>
                        <span className="sm:font-semibold text-base">September 2015 - June 2017</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="text-base">General Studies</span>
                    </div>
                </div>
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
