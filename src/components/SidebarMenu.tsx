import { ActiveLink } from "@/pages";
import React, {
    AnchorHTMLAttributes,
    HTMLAttributes,
    LinkHTMLAttributes,
    useState,
} from "react";
import classes from "./SidebarMenu.module.css";

const SidebarMenu = ({ activeLink, setActiveLink }: ActiveLink) => {
    
    // eventlistener on parent in order to handle event delegation and set smooth scrolling to specific sections on the page.
    const clickHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const sectionId = target.hash.replace(/#/, "");
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className={classes.sidebarwrapper}>
            <h2>Your new gang</h2>
            <ul onClick={clickHandler}>
                <li>
                    <a
                        href="#1"
                        className={`${
                            activeLink === "1" ? classes.active : ""
                        }`}
                    >
                        Polar Bear
                    </a>
                </li>
                <li>
                    <a
                        href="#2"
                        className={`${
                            activeLink === "2" ? classes.active : ""
                        }`}
                    >
                        Panda
                    </a>
                </li>
                <li>
                    <a
                        href="#3"
                        className={`${
                            activeLink === "3" ? classes.active : ""
                        }`}
                    >
                        Fox
                    </a>
                </li>
                <li>
                    <a
                        href="#4"
                        className={`${
                            activeLink === "4" ? classes.active : ""
                        }`}
                    >
                        Squirrel
                    </a>
                </li>
                <li>
                    <a
                        href="#5"
                        className={`${
                            activeLink === "5" ? classes.active : ""
                        }`}
                    >
                        Butterfly
                    </a>
                </li>
                <li>
                    <a
                        href="#6"
                        className={`${
                            activeLink === "6" ? classes.active : ""
                        }`}
                    >
                        Elephant
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SidebarMenu;
