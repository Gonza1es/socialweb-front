import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Form() {
    const urlAuth = 'http://localhost:8081/api/auth/';
    const urlContent = 'http://localhost:8081/api/content/';
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

    const testIsFirstTime = false;
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        let response
        if (loginState) {
            loginRequest.username = loginValue;
            loginRequest.password = passwordValue;
            try {
                response = await axios.post(urlAuth + 'login', loginRequest);
                   const authAttribute = await axios.get(urlContent, {
                        headers: {
                            Authorization: 'Bearer '+ response.data.token
                        }
                    }, response);
                   // alert(authAttribute.data);
                   if (testIsFirstTime) {
                       navigate('/additional-info');
                   } else {
                       navigate('/my-profile');
                   }
            } catch {
                alert(response.data.message);
            }
        } else {
            regRequest.username = loginValue;
            regRequest.email = emailValue;
            regRequest.password = passwordValue;
            try {
                response = axios.post(urlAuth + 'registration', regRequest);
                // alert(response.data.message);
            } catch {
                // alert(response.data.message);
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

            <ul>
                <li><button id="login-register" onClick={submitHandler}>{buttonText}</button></li>
                <li><button hidden={!loginState} id="forgot-password"><span>Забыли пароль?</span></button></li>
            </ul>
            <h2>{errorValue}</h2>
        </div>
    )
}

function testFunc() {
    alert('test');
}