import Post from "@/components/Post";
import SidebarMenu from "@/components/SidebarMenu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// import { LogoNerdbord } from "../components/LogoNerdbord";

import classes from "../styles/index.module.css";

export default function Home() {
    return (
        <div className={classes.wrapper}>
            {/* <LogoNerdbord /> */}
            {/* <h1 className={inter.className}>
        Recruitment task for Javascript Trainee
      </h1> */}
            <div className={classes.sidebarmenu}>
                <SidebarMenu />
            </div>
            <div  className={classes.content}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
