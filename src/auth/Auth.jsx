import logo from "./Лого.svg"
import "./styles/Auth.css"
import {Form} from "./components/Form";

export function Auth() {
    return (
        <div className= "container">
            <div className="logo">
                <img src={logo}/>
            </div>
            <Form/>
        </div>
    );
}