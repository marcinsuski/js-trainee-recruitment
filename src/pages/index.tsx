import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import Post from "@/components/Post";
import SidebarMenu from "@/components/SidebarMenu";
import classes from "../styles/index.module.css";
import { Data } from "./api/data";
const inter = Inter({ subsets: ["latin"] });

export type ActiveLink = {
    activeLink: string;
    setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function Home() {
    const [posts, setPosts] = useState<[]>([]);
    const [activeLink, setActiveLink] = useState<string>("1");

    //handle srolling in order to keep the active Post in State and allow sidebar to track the changes.
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition: number = window.scrollY + 200;
            const posts: NodeListOf<HTMLElement> | null =
                document.querySelectorAll(".card");

            //guard clause
            if (posts !== null) {
                setActiveLink("");
            }

            const currentPost: HTMLElement | undefined = Array.from(posts).find(
                (post: HTMLElement) =>
                    scrollPosition >= post.offsetTop &&
                    scrollPosition < post.offsetTop + post.offsetHeight
            );

            if (currentPost instanceof HTMLElement) {
                setActiveLink(currentPost.id);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //Fetch data from data.json
    useEffect(() => {
        async function getAllData() {
            const response = await fetch("/api/data");
            const data = await response.json();
            setPosts(data);
            return data;
        }
        getAllData();
    }, [posts]);

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.sidebarmenu}>
                    <SidebarMenu
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    />
                </div>
                <div className={classes.content}>
                    {posts &&
                        posts.map((post: Data) => (
                            <Post
                                id={post.id}
                                key={post.id}
                                title={post.title}
                                name={post.name}
                                highlight={post.highlight}
                                image={post.image}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
