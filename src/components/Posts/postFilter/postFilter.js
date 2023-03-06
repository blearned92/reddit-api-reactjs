import { useDispatch, useSelector } from "react-redux";
import { selectPostFilter, setPostFilter } from "../postsSlice";
import "./postFilter.css";

const PostFilter = () => {

    const dispatch = useDispatch();
    const postFilter = useSelector(selectPostFilter);
    const categories = ['hot', 'new', 'rising']

    const handleClick = (category) => {
        const newFilter = {postFilter: category};
        dispatch(setPostFilter(newFilter));
    }

    return(
    <div className="post-filter-wrapper">
        <ul className="post-filter-choice-list">
            {categories.map(category=>{
                if(category === postFilter){
                    return<li className="post-filter-list-item-active">{category.toUpperCase()}</li>
                } else {
                    return<li onClick={()=>handleClick(category)} className="post-filter-list-item">{category.toUpperCase()}</li>
                }
            })}
        </ul>
    </div>
    )
}

export default PostFilter;