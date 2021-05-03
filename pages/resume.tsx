import { useRouter } from "next/router";
import { Subsection, ProfileFooter, FooterItem } from "../components/ProjectDetail";

const Resume = () => {
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
                    <div className="flex flex-col text-right">
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
                    <div className="flex flex-row justify-between">
                        <span className="font-semibold text-base">Arizona State University</span>
                        <span className="font-semibold text-base">January 2018 - May 2021</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="text-base">BS in Software Engineering</span>
                        <span className="text-base">GPA: 3.8</span>
                    </div>
                </div>
                <div className="education-subsection mt-6">
                    <div className="flex flex-row justify-between">
                        <span className="font-semibold text-base">Western Washington University</span>
                        <span className="font-semibold text-base">September 2015 - June 2017</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="text-base">General Studies</span>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="mt-4 ml-4">
                <span className="font-semibold text-lg">Projects</span>
                <hr />
                
            </section>

            {/* Skills */}
            <section className="mt-4 ml-4">
                <span className="font-semibold text-lg">Skills</span>
                <hr />
                <div className="flex justify-between mt-2">
                    <span className="font-semibold text-base">Languages:</span>
                    <span>Java, JavaScript, TypeScript, HTML, some C/C++ and CSS</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="font-semibold text-base">Libraries / Frameworks:</span>
                    <span>React.js, Redux, Next.js, Tailwind CSS</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="font-semibold text-base">Tools:</span>
                    <span>Git / GitHub, Travis-CI, Node.js, Express, Passport.js, Mongoose, JDBC</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="font-semibold text-base">Databases:</span>
                    <span>MongoDB, MySQL, PostgreSQL</span>
                </div>
            </section>

            {/* Work History */}
            <section className="mt-4 ml-4">
                <span className="font-semibold text-lg">Work History</span>
                <hr />
                <div className="work-subsection mt-3">
                    <div className="flex flex-row justify-between">
                        <span className="font-semibold text-base">Barista</span>
                        <span className="font-semibold text-base">July 2017 - Current</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="text-base">Starbucks Corporation</span>
                    </div>
                    <span className="italic">Canonsburg, PA</span>
                </div>
                <div className="work-subsection mt-3">
                    <div className="flex flex-row justify-between">
                        <span className="font-semibold text-base">Retail Associate</span>
                        <span className="font-semibold text-base">March 2015 - October 2015</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span className="text-base">The Gap, Inc.</span>
                    </div>
                    <span className="italic">Washington, PA</span>
                </div>
            </section>
        </article>
    );
};

export default Resume;
