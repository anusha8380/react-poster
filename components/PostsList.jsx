import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList({author,body}){
    return(
      <>
      <NewPost/>
       <ul className={classes.posts}>
         <Post author='maxmillian' body='React is awesome!'/>
         <Post author='manuel' body='Learn typescript!'/>
       </ul>
       </>
    )
   }
   
   export default PostsList;