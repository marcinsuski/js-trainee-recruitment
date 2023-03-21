import { ActiveLink } from "@/pages";
import React, {
    LinkHTMLAttributes,
    useState,
} from "react";
import classes from "./SidebarMenu.module.css";

const SidebarMenu = ({ activeLink, setActiveLink }: ActiveLink) => {
    
    // eventlistener on parent in order to handle event delegation and set smooth scrolling to specific sections on the page.
    const scrollToSection = (e: React.SyntheticEvent) => {
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
        <ul onClick={scrollToSection}>
            {["Polar Bear", "Cheetah", "Panda", "Fox", "Squirrel", "Butterfly", "Elephant"].map((item, index) => (
                <li key={index}>
                    <a
                        href={`#${index + 1}`}
                        className={`${activeLink === `${index + 1}` ? classes.active : ""}`}
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default SidebarMenu;
