import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

//components
import SearchBar from "../features/search/search";
import Utility from "../components/NavBar/nav";
import Home from "../features/home/home";
import SubReddit from "../components/SubReddit/subReddit";

function App() {

  return (
    <div className="App">
      <SearchBar/>
      {/* <Utility/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/r/:subreddit" element={<SubReddit />}/>
      </Routes>
    </div>
  );
}

export default App;
