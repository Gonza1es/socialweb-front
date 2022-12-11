import './App.css';
import {Auth} from "./auth/Auth";
import {Profile} from "./main/Profile";
import {Feed} from "./main/Feed";
import {Route, Routes} from "react-router-dom";
import {FirstTimeLogin} from "./main/FirstTimeLogin";
import {Subscriptions} from "./main/ Subscriptions";
import {ModeratorPanel} from "./main/ModeratorPanel";
import {AdminPanel} from "./main/AdminPanel";
import {UserProfile} from "./main/UserProfile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Auth/>}/>
                {/*<Route index element={<Profile/>}/>*/}
                <Route path="my-profile" element={<Profile/>}/>
                <Route path="user/:name" element={<UserProfile />}/>
                <Route path="feed" element={<Feed/>}/>
                <Route path="subscriptions" element={<Subscriptions/>}/>
                <Route path="additional-info" element={<FirstTimeLogin/>}/>
                <Route path="moderator-panel" element={<ModeratorPanel/>}/>
                <Route path="admin-panel" element={<AdminPanel/>}/>
            </Routes>
        </div>
    )
}

export default App;
