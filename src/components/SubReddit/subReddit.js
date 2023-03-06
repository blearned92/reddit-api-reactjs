import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { selectPostFilter, setPosts} from "../Posts/postsSlice";
import PostFilter from "../Posts/postFilter/postFilter";
import Reddit from "../../app/Reddit";
import Posts from "../Posts/post";
import Banner from "./subRedditBanner";
import { selectsubReddit, setsubReddit } from "./subRedditSlice";

const SubReddit = () => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const subReddit = useSelector(selectsubReddit);
    const postFilter = useSelector(selectPostFilter);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(()=>{
        const fetchSubRedditPosts = async () => {
            if(postFilter === "hot"){
                const posts = await Reddit.fetchSubredditPostsHot(pathname);
                dispatch(setPosts({posts: posts}))
            } else if (postFilter === "new"){
                const posts = await Reddit.fetchSubredditPostsNew(pathname);
                dispatch(setPosts({posts: posts}))
            } else if (postFilter === "rising"){
                const posts = await Reddit.fetchSubredditPostsRising(pathname);
                dispatch(setPosts({posts: posts}))
            }
        }
        
        const fetchSubRedditAbout = async () => {
            const response = await Reddit.fetchSubredditAbout(pathname.substring(0, pathname.length-1));
            dispatch(setsubReddit({subReddit: response}))
            setIsLoading(false);
        }
        fetchSubRedditPosts();
        fetchSubRedditAbout();
    }, [dispatch, pathname, postFilter])

    return (<>{
        isLoading ? <p>Loading...</p>:
        <div className="subReddit">
            <div className="small-banner">
                <Banner subReddit={subReddit}/>
            </div>
            <PostFilter/>
            <Posts/>
        </div>
    }</>)
}

export default SubReddit;

