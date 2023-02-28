import "./posts.css";
import PostCard from "./postCards";

const Posts = ({posts}) => {

    // console.log("rendering posts")
    return(<div className="posts">
    {
        posts.map((post, index)=>{
            return(<div key={index}><PostCard post={post.data}/></div>)
        })
    }
    </div>
    )
}

export default Posts; 