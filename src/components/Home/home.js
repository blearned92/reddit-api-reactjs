import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, selectPosts } from "../Posts/postsSlice";
import Reddit from "../../app/Reddit";
import Posts from "../Posts/posts";
import Trending from "../Trending/trending";

const Home = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    
    const fetchSubRedditPosts = async () => {
        const posts = await Reddit.fetchHomePosts();
        dispatch(setPosts({posts: posts}))
    }

    useEffect(()=>{
        fetchSubRedditPosts();
    }, [])

    return (
    <div className="home">
        <h1>Reddit for Lurkers</h1>
        <div className="home-content">
            <div className="home-left">
                <Posts posts={posts}/>
            </div>
            <div className="home-right">
                <Trending/>
            </div>
        </div>       
    </div>
    )
}

export default Home;