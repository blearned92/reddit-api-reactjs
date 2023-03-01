import { useEffect } from "react";
import { useLocation } from "react-router";
import Reddit from "../../app/Reddit";

const Comments = () => {

    const location = useLocation();
    const subReddit = location.pathname.split("/comments/")[0];
    const id = location.pathname.split("/comments/")[1];

    console.log(subReddit + " " + id)

    useEffect(()=>{
        async function fetchComments(){
            const response = await Reddit.fetchSinglePostComments(subReddit, id);
            console.log(response)
        }
        fetchComments();
    },[])


    return(
    <div>
        comments
    </div>
    )
}

export default Comments;