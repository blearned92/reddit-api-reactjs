import Feed from "../../features/feed/feed";
import {baseURL} from "../../common/API";
import { useSelector } from "react-redux";
import { selectSubReddit } from "../../features/search/searchSlice";
import "./subReddit.css";


const SubReddit = () => {
    const subReddit = useSelector(selectSubReddit);
    const subRedditurl = baseURL + subReddit.url + ".json";

    return (
    <div>
        {subReddit.banner_background_image &&
        <div className="banner"
        style={{
            color: "white", 
            width: "100%",
            height: 384,
            backgroundImage: `url(${subReddit.banner_background_image.split("?")[0]})`,
            
        }}
        />
        }
        <div className="title">
            <img className="icon" src={subReddit.community_icon.split("?")[0]}/>
            <div className="titles">
                <h1>{subReddit.title}</h1>
                <p>{subReddit.url.substr(1, subReddit.url.length-2)}</p>
            </div>
        </div>
        <div className="section">
            <Feed url={subRedditurl}/>
            <div className="community-info">About</div>
        </div>
    </div>
    )
}

export default SubReddit;

