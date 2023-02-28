import "./nav.css";
import {NavLink} from "react-router-dom";

const Utility = () => {

    return(
        <nav className="nav-wrapper">
            <ul className="nav">
                <li>
                    <NavLink to="/" className="navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/r/popular" className="navlink">Popular</NavLink>
                </li>
                <li>
                    <NavLink to="/r/news" className="navlink">News</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Utility;