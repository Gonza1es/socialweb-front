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
import {ModeratorAuth} from "./auth/ModeratorAuth";
import {AdminAuth} from "./auth/AdminAuth";
import {Messages} from "./main/Messages";
import {SearchUser} from "./main/SearchUser";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="moderator-login" element={<ModeratorAuth/>}/>
                <Route path="admin-login" element={<AdminAuth/>}/>
                {/*<Route index element={<Profile/>}/>*/}
                <Route path="my-profile" element={<Profile/>}/>
                <Route path="user/:name" element={<UserProfile/>}/>
                <Route path="feed" element={<Feed/>}/>
                <Route path="messages" element={<Messages/>}/>
                <Route path="subscriptions" element={<Subscriptions/>}/>
                <Route path="additional-info" element={<FirstTimeLogin/>}/>
                <Route path="moderator-panel" element={<ModeratorPanel/>}/>
                <Route path="admin-panel" element={<AdminPanel/>}/>
                <Route path="search" element={<SearchUser/>}/>
            </Routes>
        </div>
    )
}

export default App;
