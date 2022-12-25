import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function Form() {
    const urlAuth = 'http://localhost:8081/api/auth/';
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errorValue, setErrorValue] = useState("");

    const loginRequest = {
        username: '',
        password: ''
    }

    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        loginRequest.username = loginValue;
        loginRequest.password = passwordValue;

        const response = await axios.post(urlAuth + 'login', loginRequest);
        if (response.data.code !== '1') {
            document.cookie = response.data.message;
            navigate('/admin-panel');
        } else {
            setErrorValue(response.data.message)
        }
    }

    return (
        <div className="auth-form">

            <h2>Вход</h2>

            <form>
                <ul>
                    <li><input id="login" placeholder="Логин" onChange={event => setLoginValue(event.target.value)}/></li>
                    <li><input id="password" placeholder="Пароль" type="password" onChange={event => setPasswordValue(event.target.value)}/></li>
                </ul>
            </form>

            <h4 style={
                {color: "red" }
            }>
                {errorValue}</h4>
            <ul>
                <li><button id="login-register" onClick={submitHandler}>Войти</button></li>
                <li><button id="forgot-password"><span>Забыли пароль?</span></button></li>
            </ul>
        </div>
    )
}