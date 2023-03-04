import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults, selectSearchResults} from "./searchSlice";
import "./search.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/reddit-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import Reddit from "../../app/Reddit";

const SearchBar = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [term, setTerm] = useState("");
    const searchResults = useSelector(selectSearchResults);
    const [github, setGithub] = useState(false);

    useEffect(()=>{
        async function getSearchResults() {
            if(term){
                const response = await Reddit.fetchSearchResults(term);
                const newResults = {searchResults: response}
                dispatch(setSearchResults(newResults))
            }
        }
        getSearchResults();
    }, [term, dispatch])

    const handleChange = (e) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
    }

    const handleClick = (e, subReddit) => {
        setTerm("");
        dispatch(setSearchResults({searchResults: []}))
        navigate(subReddit.url)
    }

    const handleCancel = () => {
        setTerm("");
        dispatch(setSearchResults({searchResults: []}))
    }

    const navigateHome = () => {
        navigate("/");
    }

    const checkPotentialSubReddits = () => {
        if(searchResults.length){
            return {borderRadius: "10px 10px 0px 0px", borderBottom: "1px solid grey"}
        } else {
            return {borderRadius: "100px"}
        }
    }

    return (
        <div className="search-wrapper">
            <header className="search">
                <div className="search-logo-title" onClick={navigateHome}>
                    <img alt="Site Logo" className="search-home-logo" src={Logo}/>
                </div>
                <div className="search-container">
                    <div className="searchbar" style={checkPotentialSubReddits()}>
                        <SearchIcon />
                        <input type="text" placeholder="Search" value={term} onChange={handleChange} />
                        {term && <button className="cancel" onClick={handleCancel}>Cancel</button>}
                    </div>
                    <div className="search-results">
                        {
                            searchResults.map((subReddit, index)=>{
                                return(
                                    <div key={index}>
                                        {
                                        subReddit.data.community_icon.split("?")[0] ?
                                        <img alt="Community Icon" src={subReddit.data.community_icon.split("?")[0]}/>
                                        : <img alt="Community Icon" src={subReddit.data.icon_img}/>
                                        }
                                        <button onClick={e => handleClick(e, subReddit.data)}>
                                            {subReddit.data.url}
                                        </button>
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
                                <GitHubIcon/> GitHub
                            </div>
                        </Link>}
                </div>
            </header>
        </div>
    )
}

export default SearchBar;