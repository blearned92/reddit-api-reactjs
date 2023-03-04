import "./trendingCard.css";

const TrendingCard = (props) => {
    return (
        <div className="trending-card">
            {
                props.subReddit.data.community_icon.split("?")[0] ?
                <img alt="Trending Card" src={props.subReddit.data.community_icon.split("?")[0]}/>
                : <img alt="Trending Card" src={props.subReddit.data.icon_img}/>
            }
            <div className="container">
                <h5>{props.subReddit.data.display_name_prefixed}</h5>
                <p>Subscribers: {props.subReddit.data.subscribers.toLocaleString("en-US")}</p>
            </div>
        </div>
    )
}

export default TrendingCard;