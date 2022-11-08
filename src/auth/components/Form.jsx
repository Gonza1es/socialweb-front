import {useState} from "react";

export function Form() {
    const [headerText, setHeaderText] = useState('Вход');
    const [buttonText, setButtonText] = useState('Войти');
    const [loginState, setLoginState] = useState(true);

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
                    <li><input id="login" placeholder="Логин"/></li>
                    <li><input id="email" hidden={loginState} placeholder="Email"/></li>
                    <li><input id="password" placeholder="Пароль" type="password"/></li>
                </ul>
            </form>

            <ul>
                <li><button id="login-register" onClick={testFunc}>{buttonText}</button></li>
                <li><button hidden={!loginState} id="forgot-password"><span>Забыли пароль?</span></button></li>
            </ul>

        </div>
    )
}

function testFunc() {
    alert('test');
}