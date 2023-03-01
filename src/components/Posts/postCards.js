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
    },[subredditName])

    const roundTime = t => {
        const unixTimestamp = t;
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours();
        if (hours >= 24) {
            return date.getDay() + 'd';
        } else if (hours >= 1) {
            return hours + 'h';
        } else {
            return date.getMinutes() + ' minutes';
        }
    };

    const handleCommentClick = async (e) => {
        const commentPath = "/"+subredditName+"/comments/"+post.id;
        navigate(commentPath);
    }

    return (
        <div className="postCard">
            <div className="postCard-header">
                {
                    subRedditIcon ? 
                    <img src={subRedditIcon}/>
                    : <img src={logo}/>
                }
                <div className="postCard-content">
                    <p>{post.subreddit_name_prefixed}</p>
                    <p>u/{post.author} &#9702; {roundTime(post.created_utc)}</p>
                </div>
            </div>
            <div className="postCard-body">
                
                <h3 className="postCard-body-title">{post.title}</h3>
                <div className="postCard-fakeContent"> FAKE CONTENT</div>
                {/* {props.post.url_overridden_by_dest && (
                    <div className="postCard-post-image" onError={(e) => e.target.style.display = "none"}>
                        <a href={props.post.url_overridden_by_dest} target="_blank" rel="noreferrer" >
                            <img src={props.post.url_overridden_by_dest} alt="media" />
                        </a>
                    </div>
                )} */}
            </div>
            <div className="postCard-footer">
                <i>
                    <ArrowUpwardIcon style={{height: 14}}/>
                    {post.score > 1000 ? (post.score / 1000).toFixed(1) + 'k' : post.score}
                    <ArrowDownwardIcon style={{height: 14}}/>
                </i>
                <div className="postCard-footer-links">
                    <p onClick={handleCommentClick}><ChatBubbleSharpIcon style={{height: 18}}/>{post.num_comments} Comments</p>
                    <p><ShareSharpIcon/></p>
                    <p><BookmarkSharpIcon/></p>
                    <p><MoreHorizSharpIcon/></p>
                </div>
            </div>

            {/* <p>{props.post.url}</p> */}
        </div>
    )
}

export default PostCard;