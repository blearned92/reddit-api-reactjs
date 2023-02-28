import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    setTerm, selectTerm, 
    setSubReddit, selectSubReddit, 
    setPotentialSubReddits, selectPotentialSubReddits,
    resetState 
} from "./searchSlice";
import "./search.css";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const term = useSelector(selectTerm);
    const potentialSubReddits = useSelector(selectPotentialSubReddits);
    const url = `https://www.reddit.com/subreddits/search.json?q=${term}&limit=6&sort=relevance`;


    useEffect(()=>{
        async function getPotentialSubReddits() {
            if(term){
                const response = await fetch(url);
                if(response.ok){
                    const json = await response.json();
                    console.log(json.data)
                    dispatch(setPotentialSubReddits({potentialSubReddits: json.data.children}))
                }
            }
        }
        getPotentialSubReddits();
    }, [term])

    const handleChange = (e) => {
        const newTerm = {
            term: e.target.value
        }
        dispatch(setTerm(newTerm));
    }

    const handleClick = (e, subReddit) => {
        // const url = e.target.value;
        console.log(subReddit)
        dispatch(setTerm({term: ""}));
        dispatch(setSubReddit({subReddit: subReddit}));
        dispatch(setPotentialSubReddits({potentialSubReddits: []}));
        navigate(subReddit.url)
    }

    const handleCancel = () => {
        dispatch(resetState());
    }

    const home = () => {
        navigate("/");
    }

    return (
        <div className="search-wrapper">
            <header className="search">
                <p onClick={home}>Home</p>
                <ul>
                    <li className="searchbar">
                        <input type="text" placeholder="Search" value={term} onChange={handleChange}/>
                        {term && <button className="cancel" onClick={handleCancel}>Cancel</button>}
                    </li>
                    {
                        potentialSubReddits.map((subReddit, index)=>{
                            return(
                                <li key={index}>
                                    {/* <img src={subReddit.data.community_icon.split("?")[0]}/> */}
                                    <button onClick={e => handleClick(e, subReddit.data)}>{subReddit.data.url}</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <p>Profile Icon</p>
            </header>
        </div>
    )
}

export default SearchBar;