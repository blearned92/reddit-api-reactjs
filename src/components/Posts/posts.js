import PostCard from "./postCards";

const Posts = ({posts}) => {

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