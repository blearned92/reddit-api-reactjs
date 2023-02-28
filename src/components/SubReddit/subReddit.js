import "./subReddit.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setPosts, selectPosts } from "../../features/posts/postsSlice";
import Reddit from "../../app/Reddit";
import Posts from "../../features/posts/posts";
import Trending from "../Trending/trending";
import AboutCommunity from "./about";
import Banner from "./subRedditBanner";

const SubReddit = () => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const [subReddit, setSubReddit] = useState({});

    const fetchSubRedditPosts = async () => {
        console.log(pathname)
        const posts = await Reddit.fetchSubredditPosts(pathname);
        dispatch(setPosts({posts: posts}))
    }

    const fetchSubRedditAbout = async () => {
        const response = await Reddit.fetchSubredditAbout(pathname.substring(0, pathname.length-1));
        // console.log(response)
        setSubReddit(response);
    }

    useEffect(()=>{
        fetchSubRedditPosts();
        fetchSubRedditAbout();
    }, [pathname])

    return (
    <div className="subReddit">
        {console.log(subReddit)}
        <Banner subReddit={subReddit}/>
        <div className="home-content">
            <div className="home-left">
                {/* //hot/new/etc */}
                <Posts posts={posts}/>
            </div>
            <div className="home-right">
                <AboutCommunity subReddit={subReddit}/>
                {/* //rules 
                //related subreddits?*/}
                <Trending/>
            </div>
        </div>
    </div>
    )
}

export default SubReddit;

