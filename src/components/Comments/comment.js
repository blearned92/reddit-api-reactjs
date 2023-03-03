import "./comment.css";
import { roundTime } from "../../helper/timeCalc";

const Comment = ({index, comment, postAuthor}) => {

    const handleClick = (event) => {
        console.log(event.currentTarget.id);
        const id = event.currentTarget.id;
        let self = document.getElementById(id);
        let parent = document.getElementById(id).parentElement;
        let siblings = parent.childNodes;

        siblings.forEach(sibling=>{
            if(sibling.style.display === "none"){
                sibling.style.display = "block";
            } else {
                sibling.style.display = "none";
            }
        })

        self.style.display = "block";
    }

    const generateCommentCardJSX = (comment) => {
        return(
            <div className="comment" key={comment.author + comment.created}>
                <div className="comment-header">
                    <p className="comment-author" id={comment.author + comment.created} onClick={handleClick}>
                        <b>u/{comment.author} </b>
                        {comment.distinguished && <b style={{color: "#22dd53"}}>MOD </b>} 
                        {comment.author === postAuthor && <b style={{color: "blue"}}>OP </b>}
                        &#9702; {roundTime(comment.created)}
                    </p>
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