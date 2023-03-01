import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    setTerm, selectTerm, 
    setSubReddit, selectSubReddit, 
    setPotentialSubReddits, selectPotentialSubReddits,
    resetState 
} from "./searchSlice";
import "./search.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/reddit-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

const SearchBar = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const subReddit = useSelector(selectSubReddit);
    const term = useSelector(selectTerm);
    const potentialSubReddits = useSelector(selectPotentialSubReddits);
    const url = `https://www.reddit.com/subreddits/search.json?q=${term}&limit=6&sort=relevance`;
    const [github, setGithub] = useState(false);

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
        if(!newTerm){
            dispatch(setPotentialSubReddits({potentialSubReddits: []}));
        }
        dispatch(setTerm(newTerm));
    }

    const handleClick = (e, subReddit) => {
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

    const checkPotentialSubReddits = () => {
        if(potentialSubReddits.length){
            return {borderRadius: "10px 10px 0px 0px", borderBottom: "1px solid grey"}
        } else {
            return {borderRadius: "100px"}
        }
    }

    return (
        <div className="search-wrapper">
            <header className="search">
                <div className="search-logo-title" onClick={home}>
                    <img className="search-home-logo" src={Logo}/>
                    {/* <p>Reddit for Lurkers</p> */}
                </div>
                <div className="search-container">
                    <div className="searchbar" style={checkPotentialSubReddits()}>
                        <SearchIcon />
                        <input type="text" placeholder="Search" value={term} onChange={handleChange} />
                        {term && <button className="cancel" onClick={handleCancel}>Cancel</button>}
                    </div>
                    <div className="search-results">
                        {
                            potentialSubReddits.map((subReddit, index)=>{
                                return(
                                    <div key={index}>
                                        {
                                        subReddit.data.community_icon.split("?")[0] ?
                                        <img src={subReddit.data.community_icon.split("?")[0]}/>
                                        : <img src={subReddit.data.icon_img}/>
                                        }
                                        <button onClick={e => handleClick(e, subReddit.data)}>{subReddit.data.url}</button>
                                    </div>
                                )
                            })
                        }  
                    </div>
                </div>
                <div className="search-menu-bar">
                    <MenuIcon className="search-menu-bar-icon" onClick={(e)=>{setGithub(!github)}}/>
                    {github && 
                        <Link to="https://github.com/blearned92/reddit-api-reactjs">
                            <div className="search-menu-link">
                                GitHub
                            </div>
                        </Link>}
                </div>
            </header>
        </div>
    )
}

export default SearchBar;