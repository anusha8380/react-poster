import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {(posts.length == 0) && (
        <div>
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>You have no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        </div>
      )}
      {(posts.length != 0) && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post author={post.author} id={post.id} key={post.id} body={post.body} />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default PostsList;
