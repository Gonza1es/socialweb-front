import '../styles/Header.css'
import logo from '../logo.svg'
import {NavLink} from "react-router-dom";

/**
 * @description Хедер с логотипом и нав. баром
 * @returns {JSX.Element}
 * @constructor
 */
export function Header() {

    const navLinkStyle = {
        margin: "auto",
        outline: "none",
        textDecoration: "none",
        color: "#464C54"
    };

    const navLinkActiveStyle = {
        margin: "auto",
        outline: "none",
        textDecoration: "none",
        color: "#6D7783",
        textDecorationLine: "underline",
        textUnderlineOffset: "7px"
    };

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-logo">
                    <img src={logo}/>
                    <span className="h1">SaraFun</span>
                </div>

                <div className="header-navbar">
                    <NavLink
                        className="h2"
                        to="/my-profile"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Моя страница
                    </NavLink>

                    <NavLink
                        className="h2"
                        to="/feed"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Новости
                    </NavLink>

                    <NavLink
                        className="h2"
                        to={"/search"}
                        style={({isActive}) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                    }
                    >
                        Поиск
                    </NavLink>

                    <NavLink
                        className="h2"
                        to="/subscriptions"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Подписки
                    </NavLink>

                    <NavLink
                        className="h2"
                        to="/"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Выход
                    </NavLink>
                    {/*<a>Моя страница</a>*/}
                    {/*<a href="#">Новости</a>*/}
                    {/*<a href="#">Сообщения</a>*/}
                    {/*<a href="#">Подписки</a>*/}
                    {/*<a href="#">Выход</a>*/}
                </div>
            </div>
        </div>
    )
}