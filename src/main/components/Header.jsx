import '../styles/Header.css'
import logo from '../logo.svg'

/**
 * @description Хедер с логотипом и нав. баром
 * @returns {JSX.Element}
 * @constructor
 */
export function Header() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-logo">
                    <img src={logo}/>
                    <span>SaraFun</span>
                </div>

                <div className="header-navbar">
                    <a href="#">Моя страница</a>
                    <a href="#">Новости</a>
                    <a href="#">Сообщения</a>
                    <a href="#">Подписки</a>
                    <a href="#">Выход</a>
                </div>
            </div>
        </div>
    )
}