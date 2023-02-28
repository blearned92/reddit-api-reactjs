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
        <p>About {subReddit.title} Community</p>
        {subReddit.banner_img && <div className="about-banner" style={{
            backgroundImage: `url(${subReddit.banner_img})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        }}></div>}
        {subReddit.advertiser_category && <p>{subReddit.advertiser_category}</p>}
        <p>{subReddit.public_description}</p>
        <p>{(subReddit.subscribers > 1000 && subReddit.subscribers < 1000000) ? (subReddit.subscribers / 1000).toFixed(1) + 'k' : (subReddit.subscribers / 1000000).toFixed(1) + 'M'} Subscribers</p>
        <p>Online: {subReddit.active_user_count}</p>
        <p>Created: {roundTime(subReddit.created)}</p>
    </div>
    )
}

export default AboutCommunity;