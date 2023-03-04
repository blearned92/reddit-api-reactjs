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
import "./App.css";
import Trending from "../components/Trending/trending";
import AboutCommunity from "../components/SubReddit/about";
import Banner from "../components/SubReddit/subRedditBanner";
import { selectsubReddit } from "../components/SubReddit/subRedditSlice";
import { useSelector } from "react-redux";

function App() {

  window.scrollTo(0, 0);
  const subReddit = useSelector(selectsubReddit);

  return (
    <div className="App">
      <SearchBar/>
      <div className="large-banner">
        <Routes>
          <Route path="/r/:subreddit" element={<Banner subReddit={subReddit}/>}/>
          <Route path="/r/:subreddit/comments/:id/:permalink" element={<Banner subReddit={subReddit}/>}/>
        </Routes>
      </div>
      <div className="content">
          <div className="left">
            {/* //hot/new/etc */}
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/r/:subreddit" element={<SubReddit />}/>
              <Route path="/r/:subreddit/comments/:id/:permalink" element={<Comments/>}/>
            </Routes>
          </div>
          <div className="right">
              <Routes>
                <Route path="/r/:subreddit" element={<AboutCommunity />}/>
                <Route path="/r/:subreddit/comments/:id/:permalink" element={<AboutCommunity/>}/>
              </Routes>
              <Trending/>
          </div>
      </div>
    
    </div>
  );
}

export default App;
