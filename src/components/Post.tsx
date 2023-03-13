import classes from "./Post.module.css";
import Image from "next/image";
import { Data } from "../pages/api/data";
import { MutableRefObject, useEffect, useState } from "react";
import useOnScreen from "../../utils/useOnScreen";

const Post = (
    { id, title, name, image, highlight }: Data,
    { setActiveLink }
) => {
    const [ref, visible] = useOnScreen({ rootMargin: "-300px" });
 
    return (
        <div className={classes.card} id={`${id}`}>
            <p>{name}</p>
            <h2>title</h2>
            {visible ? setActiveLink(id) : null}
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
