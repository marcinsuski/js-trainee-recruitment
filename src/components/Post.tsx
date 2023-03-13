import classes from "./Post.module.css";
import Image from "next/image";
import {Data} from "../pages/api/data";

const Post = ({ id, title, name, image }: Data) => {
    return (
        <div className={classes.card}>
            <p>{name}</p>
            <h2>
               {title}
                {/* <span className={classes.highlight}>friend</span> */}
            </h2>
            <Image
                src={image}
                alt={name}
                width={817}
                height={431}
                className={classes.image}
            ></Image>
        </div>
    );
};

export default Post;
