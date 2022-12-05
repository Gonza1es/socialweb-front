import './App.css';
import {Auth} from "./auth/Auth";
import {Profile} from "./main/Profile";
import {Feed} from "./main/Feed";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {FirstTimeLogin} from "./main/FirstTimeLogin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route index element={<Auth/>}/>
                <Route path="my-profile" element={<Profile/>}/>
                <Route path="feed" element={<Feed/>}/>
                <Route path="additional-info" element={<FirstTimeLogin/>}/>
            </Routes>
        </div>
    )
}

export default App;
