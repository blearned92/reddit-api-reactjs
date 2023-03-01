import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
//components
import SearchBar from "../components/Search/search";
import Home from "../components/Home/home";
import SubReddit from "../components/SubReddit/subReddit";
import Comments from "../components/Comments/comments";

function App() {

  return (
    <div className="App">
      <SearchBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/r/:subreddit" element={<SubReddit />}/>
        <Route path="/r/:subreddit/comments/:id" element={<Comments/>}/>
      </Routes>
    </div>
  );
}

export default App;
