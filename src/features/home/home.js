import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, selectPosts } from "../posts/postsSlice";
import Reddit from "../../app/Reddit";
import Posts from "../posts/posts";
import Trending from "../../components/Trending/trending";

const Home = () => {

    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    console.log("rendering home")
    const fetchSubRedditPosts = async () => {
        const posts = await Reddit.fetchSubredditPosts("r/popular");
        dispatch(setPosts({posts: posts}))
    }

    useEffect(()=>{
        fetchSubRedditPosts();
    }, [])

    return (
        //should render a feed on the right, and trending subs on left
    <div className="home">
        <h1>Home</h1>
        <div className="home-content">
            <div className="home-left">
                <Posts posts={posts}/>
            </div>
            <div className="home-right">
                <Trending/>
            </div>
        </div>
        {/* <Feed url={homeUrl}/> */}
       
    </div>
    )
}

export default Home;