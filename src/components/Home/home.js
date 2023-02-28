import Feed from "../../features/feed/feed";
import {baseURL} from "../../common/API";

const Home = () => {

    const homeUrl = baseURL + "/.json?feed=home"; 

    return (
    <>
        <h1>Home</h1>
        {/* <p>{homeUrl}</p> */}
        <p>This Section is under Contruction</p>
        {/* <Feed url={homeUrl}/> */}
    </>
    )
}

export default Home;