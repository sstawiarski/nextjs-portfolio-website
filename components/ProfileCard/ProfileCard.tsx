import classnames from "classnames";
import { useRouter } from "next/router";

//Custom Components
import InfoItem from "./InfoItem";
import ProfilePicture from "./ProfilePicture";
import InfoList from "./InfoList";
import ProfileHeader from "./ProfileHeader";

//Icons
import SchoolIcon from "../../public/icons/school.svg";
import KnowledgeIcon from "../../public/icons/knowledge.svg";
import GitHubIcon from "../../public/icons/github.svg";
import { ProfileCardProps } from "../../types/ProfileCard";

const ProfileCard = ({ children, className }: ProfileCardProps) => {
    const router = useRouter();
    const mainClasses = classnames(
        [
            "shadow-md",
            "p-3",
            "sm:p-5",
            "lg:p-5",
            "w-10/12",
            "xl:w-80",
            "rounded-lg",
            "relative",
            "z-0",
            "flex",
            "xl:flex-col",
            "flex-wrap",
            "justify-evenly",
            "dark:bg-gray-700",
        ],
        {
            [className]: Boolean(className),
        }
    );

    return (
        <aside className={mainClasses}>
            <ProfilePicture source="/images/profile.jpeg" />
            <div className="sm:mr-0 ml-10 md:ml-0">
                <ProfileHeader header="Shawn Stawiarski" subtitle="Software Engineer" />
                <InfoList>
                    <InfoItem
                        Icon={SchoolIcon}
                        header="Arizona State University"
                        additional="3.8 GPA / Graduating May 2021"
                        title="Education history"
                    />
                    <InfoItem
                        Icon={KnowledgeIcon}
                        header="Java, JavaScript, React"
                        additional="Node.js, TypeScript, Material-UI"
                        title="List of skills"
                    />
                    <InfoItem
                        Icon={GitHubIcon}
                        header="@sstawiarski"
                        clickable
                        onClickHandle={() => router.push("https://github.com/sstawiarski")}
                        title="GitHub profile"
                    />
                </InfoList>
            </div>

            {children && children}
        </aside>
    );
};

export default ProfileCard;
