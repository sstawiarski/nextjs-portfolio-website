import { FC, useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import content from "../../public/icons/hamburger.svg";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavbarProps } from "../../types/Navbar/index";
const Hamburger = content;

const Navbar: FC<NavbarProps> = ({ children, className, Logo = null, link = null }) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const overMd = useMediaQuery('(min-width:768px)');
    if (overMd && hamburgerOpen) {
        setHamburgerOpen(false);
    }

    const mainClasses = classnames(
        [
            "w-full",
            "md:w-10/12",
            "flex",
            "justify-around",
            "items-center",
            "mx-auto",
            "px-8",
            "h-12",
            "pt-4",
            "mb-4",
            "rounded-md",
            "flex-wrap",
        ],
        {
            [className]: Boolean(className),
            "mb-32": hamburgerOpen,
        }
    );
    return (
        <nav className={mainClasses}>
            <Link href="/">
                <a className="fill-current text-black dark:text-current py-2 font-mono font-semibold text-base md:text-lg">
                    {" "}
                    {"{"} Shawn Stawiarski {"}"}
                </a>
            </Link>

            <Link href="/">
                <a aria-label="Home">
                    <span className="text-black dark:text-current hidden md:block hover:text-green-600 dark:hover:text-green-500">Home</span>
                </a>
            </Link>

            <Link href="/resume">
                <a aria-label="Resume">
                    <span className="text-black dark:text-current hidden md:block hover:text-green-600 dark:hover:text-green-500">Resume</span>
                </a>
            </Link>

            <Link href="/contact">
                <a aria-label="Contact">
                    <span className="text-black dark:text-current hidden md:block hover:text-green-600 dark:hover:text-green-500">Contact</span>
                </a>
            </Link>

            <div className="ml-5 pt-0.5 md:hidden text-black dark:text-current" onClick={() => setHamburgerOpen((o) => !o)}>
                <Hamburger className="h-5 w-5 fill-current" />
            </div>
            <div className={["transition-all", hamburgerOpen ? "block pt-5" : "hidden", "w-full", "text-center"].join(" ")}>
                <Link href="/">
                    <a aria-label="Home">
                        <span className="text-black dark:text-current block md:hidden py-1">Home</span>
                    </a>
                </Link>
                <hr className="w-full ml-auto mr-auto" />
                <Link href="/resume">
                    <a aria-label="Resume">
                        <span className="text-black dark:text-current block md:hidden py-1">Resume</span>
                    </a>
                </Link>
                <hr className="w-full ml-auto mr-auto" />
                <Link href="/contact">
                    <a aria-label="Contact">
                        <span className="text-black dark:text-current block md:hidden py-1">Contact</span>
                    </a>
                </Link>
            </div>

            {children && children}
        </nav>
    );
};

export default Navbar;
