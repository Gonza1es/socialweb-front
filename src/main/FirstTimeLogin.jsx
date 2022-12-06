import './styles/FirstTimeLogin.css';
import {ProfileEditor} from "./components/ProfileEditor";

/**
 * @description Компонент для получения дополнительных данных о пользователе после регистрации (псевдоним и т.п.)
 * @returns {JSX.Element}
 * @constructor
 */
export function FirstTimeLogin() {
    return (
        <div className="first-time-login-container">
            <ProfileEditor/>
        </div>
    )
}