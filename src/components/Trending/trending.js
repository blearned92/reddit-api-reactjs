import Reddit from "../../app/Reddit";
import { useDispatch, useSelector } from "react-redux";
import { selectTrending, setTrending } from "./trendingSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrendingCard from "./trendingCard";
import "./trending.css";

const Trending = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const trending = useSelector(selectTrending);

    useEffect(()=>{
        async function fetchTrending(){
            const response = await Reddit.fetchTrendingSubreddits();
            dispatch(setTrending({
                trending: response
            }))
        }
        fetchTrending();
    },[])

    const handleClick = (e, sub) => {
        console.log(sub.url)
        navigate(sub.url)
    }

    return(<div className="trending">
        { 
            trending.map((sub, index)=>{
                return(
                    <div key={index} onClick={e => handleClick(e, sub.data)}><TrendingCard subReddit={sub}/></div>
                )
            })
        }
    </div>)
}

export default Trending;