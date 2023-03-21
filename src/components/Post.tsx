import classes from "./Post.module.css";
import Image from "next/image";
import { Data } from "../pages/api/data";

const Post = ({ id, title, name, image, highlight }: Data) => {
    
    //Loop through the title to find the specific word that should be highlighted and if that's the case, returns a word with additional className.
    const highlightHandler = () => {
        const words = title.split(" ");
        return (
          <h2>
            {words.map((word, i) => {
              if (word === highlight) {
                return <span key={i} className={classes.highlight}>{word} </span>;
              } else {
                return <span key={i}>{word} </span>;
              }
            })}
          </h2>
        );
    };

    const newTitle = highlightHandler()

    return (
        <div className={`card ${classes.card}`} id={`${id}`}>
            <p>{name}</p>
           {newTitle}
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
