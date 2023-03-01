import "./about.css";

const AboutCommunity = ({subReddit}) => {

    const roundTime = t => {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const unixTimestamp = t;
        const date = new Date(unixTimestamp * 1000);
        const month = monthNames[date.getMonth()]
        const year = 20 + date.getYear().toString().substring(1);
        return month + " " + year;
       
    };

    return(
    <div className="about">
        <div className="about-top">
            <h4>About Community</h4>
            {subReddit.advertiser_category && <p className="about-category">{subReddit.advertiser_category}</p>}
        </div>
        <div className="about-middle">
            {subReddit.banner_img && <div className="about-banner" style={{
                backgroundImage: `url(${subReddit.banner_img})`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`
            }}></div>}
            <p className="about-description">{subReddit.public_description}</p>
            <div className="about-container">
                <p>
                    <b>{(subReddit.subscribers > 1000 && subReddit.subscribers < 1000000) ? (subReddit.subscribers / 1000).toFixed(1) + 'k' : (subReddit.subscribers / 1000000).toFixed(1) + 'M'}</b> Subscribers
                </p>
                <p>
                    <b>{subReddit.active_user_count}</b> Online <b className="about-online">&#9679;</b>
                </p>
            </div>
        </div>
        <div className="about-bottom">
            <p>Created: {roundTime(subReddit.created)}</p>
        </div>

    </div>
    )
}

export default AboutCommunity;