import "./home.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, selectPosts } from "../Posts/postsSlice";
import Reddit from "../../app/Reddit";
import Posts from "../Posts/posts";

const Home = () => {

    window.scrollTo(0, 0);
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchSubRedditPosts = async () => {
            const posts = await Reddit.fetchHomePosts();
            dispatch(setPosts({posts: posts}))
            setIsLoading(false);
        }
        fetchSubRedditPosts();
    }, [dispatch])

    return (<>{
        isLoading ? <p>Loading...</p> :
            <Posts posts={posts}/>
        }</>)
}

export default Home;