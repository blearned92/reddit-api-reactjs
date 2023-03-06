import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Reddit from "../../app/Reddit";
import "./comments.css";
import Comment from "./comment";
import PostPreview from "../Posts/postPreview/postPreview";
import { roundTime } from "../../helper/timeCalc";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { setsubReddit, selectsubReddit } from "../SubReddit/subRedditSlice";
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';

const Comments = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const subRedditUrl = location.pathname.split("/comments/")[0];
    const id = location.pathname.split("/comments/")[1];
    // const [subReddit, setSubReddit] = useState({});
    const subReddit = useSelector(selectsubReddit)
    const [comments, setComments] = useState([]);
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
            dispatch(setsubReddit({subReddit: response}))
            // setSubReddit(response);
        }
        fetchComments();
        fetchPost();
        fetchSubRedditAbout();
    },[id, subRedditUrl, dispatch])

    return(<>{
        isLoading ? <p>Loading...</p> :
        <div className="comments-wrapper">
            <div className="post-section">
                <div className="post-section-header">
                    {subReddit.community_icon ?
                        <img alt="SubReddit Icon" className="icon" src={subReddit.community_icon.split("?")[0]}/>
                        : <img alt="SubReddit Icon" className="icon" src={subReddit.icon_img}/>
                    }                
                    <div className="post-section-content">
                        <p>{post.subreddit_name_prefixed}</p>
                        <p>u/{post.author} &#9702; {roundTime(post.created_utc)}</p>
                    </div>
                </div>
                <div className="post-section-body">
                    <h3 className="postCard-body-title">{post.title}</h3>
                    <ReactMarkdown>
                        {post.selftext}
                    </ReactMarkdown>
                </div>
                <PostPreview post={post}/>
                <div className="post-section-footer">
                <div className="postCard-footer">
                <i>
                    <ArrowUpwardIcon style={{height: 14}}/>
                    {post.score > 1000 ? (post.score / 1000).toFixed(1) + 'k' : post.score}
                    <ArrowDownwardIcon style={{height: 14}}/>
                </i>
                <div className="postCard-footer-links">
                    <p><ChatBubbleSharpIcon style={{height: 18}}/>{post.num_comments} Comments</p>
                    <p><ShareSharpIcon/></p>
                    <p><BookmarkSharpIcon/></p>
                    <p><MoreHorizSharpIcon/></p>
                </div>
            </div>
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