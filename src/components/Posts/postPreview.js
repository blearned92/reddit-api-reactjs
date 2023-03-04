import ReactPlayer from "react-player";
import "./postPreview.css";

const PostPreview = ({post}) => {

    let image, video, thumbnail, nsfw = false;

    if (post.media) {
        if (post.media.reddit_video) {
            video = <video controls height="382px" width="100%"><source src={post.media.reddit_video.fallback_url} /></video>
            thumbnail = null;
        } else if (post.domain.match(/yout/)) {
            video = <ReactPlayer url={post.url} controls height="382px" width="100%"/>
            thumbnail = null;
        } else if (post.domain.match(/vimeo/)) {
            video = <ReactPlayer url={post.url} controls height="382px" width="100%"/>
            thumbnail = null;
        }
    }

    switch (post.thumbnail) {
        case "self":
            thumbnail = null;
            break;
        case "default":
            thumbnail = null;
            break;
        case "spoiler":
            thumbnail = null;
            break;
        case "":
            thumbnail = null;
            break;
        case "nsfw":
            thumbnail = null;
            nsfw = true;
            break;
        default:
            thumbnail = <span className="post-preview-thumbnail"><a href={post.url}><img src={post.thumbnail} alt="" /></a></span>;
    }

    if (post.url.match(/.png|.jpg|.jpeg|v.redd/)) {
        image = <img src={post.url} alt="" />
        thumbnail = null;
    }

    if (nsfw) {
        image = <div className="nsfw-image"><img src={post.url} alt={post.title}/></div>
        
        if (thumbnail) {
            thumbnail = <span className="post-preview-thumbnail nsfw-image"><a href={post.url}><img src={post.thumbnail} alt="" /></a></span>;
        }
    }


    return(
        <div className="post-preview">
            <div className="media">
                {image ? image : null}
                {video ? video : null}
            </div>            
        </div>
    )
}

export default PostPreview;