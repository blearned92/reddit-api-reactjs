import "./home.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts} from "../Posts/postsSlice";
import Reddit from "../../app/Reddit";
import Posts from "../Posts/post";

const Home = () => {

    window.scrollTo(0, 0);
    const dispatch = useDispatch();
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
            <Posts/>
        }</>)
}

export default Home;