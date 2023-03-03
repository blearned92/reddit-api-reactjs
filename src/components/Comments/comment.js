import "./comment.css";
import { roundTime } from "../../helper/timeCalc";

const Comment = ({index, comment, postAuthor}) => {

    const handleClick = (e, comment) => {
        console.log()
        // if(comment.replies){
        //     const commentReplies = comment.replies.data.children;
        // } else {
        //     console.log("no replies")
        // }
    }

    const generateCommentCardJSX = (comment) => {
        return(
            <div className="comment" key={comment.author + comment.created}>
                <div className="comment-header" onClick={(e)=>handleClick(e, comment)}>
                    <p>
                        <b>u/{comment.author} </b>
                        {comment.distinguished && <b style={{color: "#22dd53"}}>MOD </b>} 
                        {comment.author === postAuthor && <b style={{color: "blue"}}>OP </b>}
                        &#9702; {roundTime(comment.created)}
                    </p>
                </div>
                <p className="comment-body">{comment.body}</p>
                <div className="comment-footer">
                    <p>{comment.score} Updoots</p>
                </div>
                {comment.replies && comment.replies.data.children.map((reply)=>{
                    if(reply.data.author){
                        return(generateCommentCardJSX(reply.data));
                    }
                })}
            </div>
        )
    }

    return(
        <div className="comment-wrapper" key={index}>
            {generateCommentCardJSX(comment)}
        </div>
    )
}

export default Comment;