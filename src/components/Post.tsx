import classes from "./Post.module.css";
import Image from "next/image";

const Post = () => {
    return (
        <div className={classes.card}>
            <p>POLAR BEAR</p>
            <h2>
                Say hello to your new{" "}
                <span className={classes.highlight}>friend</span>
            </h2>
            <Image
                src="/images/polarbear.jpeg"
                alt="polar bear"
                width={817}
                height={431}
                className={classes.image}
            ></Image>
        </div>
    );
};

export default Post;
