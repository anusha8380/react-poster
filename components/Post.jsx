import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ id, author, body }) {
  return (
    <Link to={id}>
      <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </li>
    </Link>
  );
}

export default Post;
