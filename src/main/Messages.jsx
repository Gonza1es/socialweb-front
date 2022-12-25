import './styles/Messages.css'
import {MyDialogs} from "./components/MyDialogs"
import {Header} from "./components/Header";
import {ActiveChat} from "./components/ActiveChat";


export function Messages() {
    return (
        <div className="Messages">
            <Header/>
            <div className="components-wrapper">
                <MyDialogs/>
                <ActiveChat chatChosen={true}/>
            </div>
        </div>
    )
}