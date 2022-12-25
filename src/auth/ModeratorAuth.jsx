import logo from "./Лого.svg"
import "./styles/Auth.css"
import {Form} from "./components/ModeratorLoginForm";

export function ModeratorAuth() {
    return (
        <div className= "container">
            <div className="logo">
                <img src={logo}/>
            </div>
            <Form/>
        </div>
    );
}