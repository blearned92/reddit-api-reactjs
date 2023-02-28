import "./trendingCard.css";
import logo from "../../images/reddit-logo.png";

const TrendingCard = (props) => {
    return (
        <div className="trending-card">
            {
                props.subReddit.data.community_icon.split("?")[0] ?
                <img src={props.subReddit.data.community_icon.split("?")[0]}/>
                : <img src={props.subReddit.data.icon_img}/>
            }
            <div className="container">
                <p>{props.subReddit.data.display_name_prefixed}</p>
                <p>Subscribers: {props.subReddit.data.subscribers.toLocaleString("en-US")}</p>
            </div>
        </div>
    )
}

export default TrendingCard;