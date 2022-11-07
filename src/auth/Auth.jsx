
import logo from "./Лого.svg"
import "./styles/auth.css"
import {Form} from "./components/Form";

export function Auth() {
    return (
        <div classname= "container">
            <img src={logo}/>
            <Form/>
        </div>
    );

}
