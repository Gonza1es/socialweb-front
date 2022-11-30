import '../styles/header.css'
import logo from './logo.svg'


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