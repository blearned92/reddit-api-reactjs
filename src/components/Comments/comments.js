import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Reddit from "../../app/Reddit";
import "./comments.css";
import Comment from "./comment";
import AboutCommunity from "../SubReddit/about";
import Trending from "../Trending/trending";
import PostPreview from "../Posts/postPreview";
import logo from "../../images/reddit-logo.png";
import { roundTime } from "../../helper/timeCalc";

const Comments = () => {

    const location = useLocation();
    const subRedditUrl = location.pathname.split("/comments/")[0];
    const id = location.pathname.split("/comments/")[1];
    const [comments, setComments] = useState([]);
    const [subReddit, setSubReddit] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({});

    useEffect(()=>{
        async function fetchComments(){
            setIsLoading(true);
            const response = await Reddit.fetchSinglePostComments(subRedditUrl, id);
            setComments(response);
        }
        async function fetchPost(){
            const response = await Reddit.fetchSinglePost(subRedditUrl, id);
            setPost(response)
            setIsLoading(false);
        }
        async function fetchSubRedditAbout() {
            const response = await Reddit.fetchSubredditAbout(subRedditUrl);
            setSubReddit(response);
        }
        fetchComments();
        fetchPost();
        fetchSubRedditAbout();
    },[])

    return(<>{
        isLoading ? <p>Loading...</p> :
        <div>
                <div className="post-section">
                        <div className="post-section-header">
                        {subReddit.community_icon ?
                            <img className="icon" src={subReddit.community_icon.split("?")[0]}/>
                            : <img className="icon" src={subReddit.icon_img}/>
                        }                
                        <div className="post-section-content">
                            <p>{post.subreddit_name_prefixed}</p>
                            <p>u/{post.author} &#9702; {roundTime(post.created_utc)}</p>
                        </div>
                    </div>
                    <div className="post-section-body">
                        <h3 className="postCard-body-title">{post.title}</h3>
                        <p>{post.selftext}</p>
                    </div>
                    <PostPreview post={post}/>
                    <div className="post-section-footer">
                        <p>footer</p>
                    </div>
                </div>
                <div className="comment-section">
                    {
                        comments.map((comment, index)=>{
                            return(<Comment key={index} comment={comment.data} postAuthor={post.author}/>)
                        })
                    }
                </div>  
        </div>
    }</>)
}

export default Comments;