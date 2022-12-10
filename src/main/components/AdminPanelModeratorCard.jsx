import '../styles/UserCard.css';
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";

export function AdminPanelModeratorCard() {
    return (
        <div className="user-card">
            <Avatar img={testAv} online={true}/>
            <span className="user-name">@Максим Гнездилов</span>
            <div className="user-button-block">
                <button className="go-to-profile">
                    <span>Перейти в профиль</span>
                </button>
                <button className="back-to-user">
                    <span>Сделать пользователем</span>
                </button>
                <button className="ban-user">
                    <span>В бан!</span>
                </button>
            </div>
        </div>
    )
}