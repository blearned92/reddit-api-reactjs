import "./article.css";

const Article = (props) => {
    console.log(props.articleData)
    const data = props.articleData.data;
    return(
    <div className="article">
        <h2>{data.title}</h2>
        <p>{data.selftext}</p>
        <p>Author: u/{data.author}</p>
        <p>SubReddit: {data.subreddit_name_prefixed}</p>
        {/* <p>Comments: {data.url + ".json"}</p> */}
        <p>Is video: {data.is_video.toString()}</p>
        <p>Is self: {data.is_self.toString()}</p>
        <p>Upvotes: {data.ups}</p>
        <p>Downvotes: {data.downs}</p>


    </div>
    )
}

export default Article;