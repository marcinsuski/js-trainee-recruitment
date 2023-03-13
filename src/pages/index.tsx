import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Post from "@/components/Post";
import SidebarMenu from "@/components/SidebarMenu";
import classes from "../styles/index.module.css";

export default function Home() {
    const [posts, setPosts] = useState<[]>([]);

    useEffect(() => {
        async function getAllData() {
            const response = await fetch("/api/data");
            const data = await response.json();
            setPosts(data);
            return data;
        }
        getAllData()
      }, [posts]);
    
      return (
        <div className={classes.wrapper}>
            {/* <LogoNerdbord /> */}
            {/* <h1 className={inter.className}>
        Recruitment task for Javascript Trainee
      </h1> */}
            <div className={classes.sidebarmenu}>
                <SidebarMenu />
            </div>
            <div className={classes.content}>
               {posts && posts.map(post => (<Post  key={post.id} title={post.title} name={post.name} image={post.image} />))}
            </div>
        </div>
    );
}
