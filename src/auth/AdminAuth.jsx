import logo from "./Лого.svg"
import "./styles/Auth.css"
import {Form} from "./components/AdminLoginForm";

export function AdminAuth() {
    return (
        <div className= "container">
            <div className="logo">
                <img src={logo}/>
            </div>
            <Form/>
        </div>
    );
}