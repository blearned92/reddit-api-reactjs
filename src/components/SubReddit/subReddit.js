import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setPosts, selectPosts } from "../Posts/postsSlice";
import Reddit from "../../app/Reddit";
import Posts from "../Posts/posts";
import Banner from "./subRedditBanner";
import { selectsubReddit, setsubReddit } from "./subRedditSlice";

const SubReddit = () => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const subReddit = useSelector(selectsubReddit);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(()=>{
        const fetchSubRedditPosts = async () => {
            const posts = await Reddit.fetchSubredditPosts(pathname);
            dispatch(setPosts({posts: posts}))
        }
        
        const fetchSubRedditAbout = async () => {
            const response = await Reddit.fetchSubredditAbout(pathname.substring(0, pathname.length-1));
            dispatch(setsubReddit({subReddit: response}))
            setIsLoading(false);
        }
        fetchSubRedditPosts();
        fetchSubRedditAbout();
    }, [dispatch, pathname])

    return (<>{
        isLoading ? <p>Loading...</p>:
        <div className="subReddit">
            <div className="small-banner">
                <Banner subReddit={subReddit}/>
            </div>
            <Posts posts={posts}/>
        </div>
    }</>)
}

export default SubReddit;

