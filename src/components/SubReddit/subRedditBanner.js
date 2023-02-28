import "./subRedditBanner.css";

const Banner = ({subReddit}) => {


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
            {subReddit.community_icon &&
                <img className="icon" src={subReddit.community_icon.split("?")[0]}/>
            }
            <div className="titles">
                <h1>{subReddit.title}</h1>
                <p>{subReddit.display_name_prefixed}</p>
            </div>
        </div>
        </div>
    )
}

export default Banner;


        
        {/* {subReddit.banner_background_image &&
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
            <div className="community-info">About</div>
        </div> */}