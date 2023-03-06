import { useSelector } from "react-redux";
import PostCard from "./postCard/postCard";
import { selectPosts } from "./postsSlice";

const Posts = () => {

    const posts = useSelector(selectPosts);

    return(<div>
    {
        posts.map((post, index)=>{
            return(<div key={index}><PostCard post={post.data}/></div>)
        })
    }
    </div>
    )
}

export default Posts; 