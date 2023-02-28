import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, updateArticles } from "./feedSlice";
import Article from "../../components/Articles/article";
import { useLocation, useParams, useResolvedPath } from "react-router-dom";
import "./feed.css";

const Feed = (props) => {

    const subReddit = useLocation().pathname.toString();
    const articles = useSelector(selectArticles);
    const url = props.url; 
    const dispatch = useDispatch();

    const fetchArticleFeed = async () => {
        try {
            const response = await fetch(url);
            if(response.ok){
                const json = await response.json();
                console.log(json)
                const articlesArray = {
                    articles: json.data.children
                }
                dispatch(updateArticles(articlesArray))
            } else {
                dispatch(updateArticles([]))
            }
        } catch (e) {
            console.log(e)
            dispatch(updateArticles([]))
        }
    }

    useEffect(()=>{
        fetchArticleFeed();
    }, [subReddit])

    return(<>
        {
            articles ? 
            <>
            <section className="feed">
                {
                    articles.map((article, index)=>{
                        return(<Article key={index} articleData={article}/>)
                    })
                }
            </section>
            </> : 
            <h2>No results found for {subReddit} :/</h2>
        }
    </>
    )
}

export default Feed; 