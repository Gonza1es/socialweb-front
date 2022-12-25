import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function Form() {
    const urlAuth = 'http://localhost:8081/api/auth/';
    const [headerText, setHeaderText] = useState('Вход');
    const [buttonText, setButtonText] = useState('Войти');
    const [loginState, setLoginState] = useState(true);
    const [loginValue, setLoginValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [errorValue, setErrorValue] = useState("");

    const loginRequest = {
        username: '',
        password: ''
    }

    const regRequest = {
        username: '',
        email: '',
        password: ''
    }

    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        if (loginState) {
            loginRequest.username = loginValue;
            loginRequest.password = passwordValue;

            const response = await axios.post(urlAuth + 'login', loginRequest);
            if (response.data.code !== '1') {
                document.cookie = response.data.message;
                navigate('/my-profile');
            } else {
                setErrorValue(response.data.message)
            }
        } else {
            regRequest.username = loginValue;
            regRequest.email = emailValue;
            regRequest.password = passwordValue;

            const responseReg = await axios.post(urlAuth + 'registration', regRequest);
            if (responseReg.data.code === '2' || responseReg.data.code === '3') {
                setErrorValue(responseReg.data.message)
            } else {
                setLoginState(true)
            }
        }

    }


    function handleTopBarStateChange() {
        /** Handler for top bar Register|Login switcher **/
        if (headerText === 'Вход') {
            setHeaderText('Регистрация');
            setLoginState(false);
            setButtonText('Зарегистрироваться');
        } else {
            setHeaderText('Вход');
            setLoginState(true);
            setButtonText('Войти');
        }
    }

    return (
        <div className="auth-form">

            <ul className="top-bar">
                <li><button disabled={loginState} onClick={handleTopBarStateChange}>
                    <span style={{borderBottom: loginState? 'dotted' : 'none'}}>
                        Вход
                    </span></button>
                </li>
                <li><button disabled={!loginState} onClick={handleTopBarStateChange}>
                    <span style={{borderBottom: !loginState? 'dotted' : 'none'}}>
                        Регистрация
                    </span></button>
                </li>
            </ul>

            <h2>{headerText}</h2>

            <form>
                <ul>
                    <li><input id="login" placeholder="Логин" onChange={event => setLoginValue(event.target.value)}/></li>
                    <li><input id="email" hidden={loginState} placeholder="Email" onChange={event => setEmailValue(event.target.value)}/></li>
                    <li><input id="password" placeholder="Пароль" type="password" onChange={event => setPasswordValue(event.target.value)}/></li>
                </ul>
            </form>

            <h4 style={
                {color: "red" }
            }>
                {errorValue}</h4>
            <ul>
                <li><button id="login-register" onClick={submitHandler}>{buttonText}</button></li>
                <li><button hidden={!loginState} id="forgot-password"><span>Забыли пароль?</span></button></li>
            </ul>
        </div>
    )
}