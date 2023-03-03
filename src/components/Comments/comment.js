import "./comment.css";
import { roundTime } from "../../helper/timeCalc";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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

    const calculateWidth = () => {

    }

    const generateCommentCardJSX = (comment, body) => {


        return(
            <div className="comment" key={comment.author + comment.created}>
                <div className="comment-content">
                    <p className="comment-header" id={comment.author + comment.created} onClick={handleClick}>
                        <b>u/{comment.author} </b>
                        {comment.distinguished && <b style={{color: "#22dd53"}}>MOD </b>} 
                        {comment.author === postAuthor && <b style={{color: "blue"}}>OP </b>}
                        &#9702; {roundTime(comment.created)}
                    </p>
                    <div className="comment-body">
                        <ReactMarkdown>{comment.body}</ReactMarkdown>
                    </div>
                    <div className="comment-footer">
                        <p>{comment.score} Updoots</p>
                    </div>
                   
                    {comment.replies && comment.replies.data.children.map((reply)=>{
                        if(reply.data.author){
                            return(generateCommentCardJSX(reply.data, reply.data.body));
                        }
                    })}

                </div>
            </div>
        )
    }

    return(
        <div className="comment-chain-wrapper" key={index}>
            {generateCommentCardJSX(comment, comment.body)}
        </div>
    )
}

export default Comment;