import './App.css';
import {Auth} from "./auth/Auth";
import {Profile} from "./main/Profile";
import {Header} from "./main/components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Profile/>
        </div>
    )
}

export default App;
