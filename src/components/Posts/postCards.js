import "./postCards.css";
import { useEffect, useState } from "react";
import Reddit from "../../app/Reddit";
import logo from "../../images/reddit-logo.png";
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import { useNavigate } from "react-router";
import PostPreview from "./postPreview";
import { roundTime } from "../../helper/timeCalc";
import { Link } from "react-router-dom";

const PostCard = ({post}) => {

    const [subRedditIcon, setSubRedditIcon] = useState(''); 
    const subredditName = post.subreddit_name_prefixed;
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchSubRedditAbout(){
            const response = await Reddit.fetchSubredditAbout(subredditName);
            setSubRedditIcon(response.icon_img);
        }
        fetchSubRedditAbout();
    })

    const handleClick = async (e, link) => {
        navigate(link);
    }

    return (
        <div className="postCard">
            <div className="postCard-header">
                {
                    subRedditIcon ? 
                    <img alt="SubReddit Icon" src={subRedditIcon}/>
                    : <img alt="SubReddit Icon" src={logo}/>
                }
                <div className="postCard-content">
                    <Link to={post.subreddit_name_prefixed}><p>{post.subreddit_name_prefixed}</p></Link>
                    <p>u/{post.author} &#9702; {roundTime(post.created_utc)}</p>
                </div>
            </div>
            <div className="postCard-body">
                <h3 className="postCard-body-title">{post.title}</h3>
                <PostPreview post={post}/>
            </div>
            <div className="postCard-footer">
                <i>
                    <ArrowUpwardIcon style={{height: 14}}/>
                    {post.score > 1000 ? (post.score / 1000).toFixed(1) + 'k' : post.score}
                    <ArrowDownwardIcon style={{height: 14}}/>
                </i>
                <div className="postCard-footer-links">
                    <p onClick={(e)=>handleClick(e, post.permalink)}><ChatBubbleSharpIcon style={{height: 18}}/>{post.num_comments} Comments</p>
                    <p><ShareSharpIcon/></p>
                    <p><BookmarkSharpIcon/></p>
                    <p><MoreHorizSharpIcon/></p>
                </div>
            </div>
        </div>
    )
}

export default PostCard;