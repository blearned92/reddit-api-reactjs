import "./postCards.css";
import { useEffect, useState } from "react";
import Reddit from "../../app/Reddit";
import logo from "../../images/reddit-logo.png";


const PostCard = ({post}) => {

    const [subRedditIcon, setSubRedditIcon] = useState(''); 
    const subredditName = post.subreddit_name_prefixed;
    
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
                    <p>u/{post.author} - {roundTime(post.created_utc)}</p>
                </div>
            </div>
            <div className="postCard-body">
                <h3 className="">{post.title}</h3>
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
                


            </div>

            {/* <p>{props.post.url}</p> */}
        </div>
    )
}

export default PostCard;