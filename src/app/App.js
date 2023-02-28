import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ROUTES from "./routes";
import SearchBar from "../features/search/search";
import Utility from "../components/NavBar/nav";
import Home from "../components/Home/home";
import SubReddit from "../components/SubReddit/subReddit";

function App() {


  return (
    <div className="App">
      <SearchBar/>
      {/* <Utility/> */}
      <Routes>
        <Route path="/r/:subreddit" element={<SubReddit />}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
