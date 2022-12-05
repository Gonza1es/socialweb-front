import './App.css';
import {Auth} from "./auth/Auth";
import {Profile} from "./main/Profile";
import {Header} from "./main/components/Header";
import {Feed} from "./main/Feed";
import {PostCreator} from "./main/components/PostCreator";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Feed/>*/}
            <Profile/>
        </div>
    )
}

export default App;
