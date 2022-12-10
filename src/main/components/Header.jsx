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
        color: "#464C54",
        fontSize: "21px",
        fontWeight: "600",
        lineHeight: "25px"
    };

    const navLinkActiveStyle = {
        margin: "auto",
        outline: "none",
        textDecoration: "none",
        color: "#6D7783",
        fontSize: "21px",
        fontWeight: "600",
        lineHeight: "25px",
        textDecorationLine: "underline",
        textUnderlineOffset: "7px"
    };

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-logo">
                    <img src={logo}/>
                    <span>SaraFun</span>
                </div>

                <div className="header-navbar">
                    <NavLink
                        to="/my-profile"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Моя страница
                    </NavLink>

                    <NavLink
                        to="/feed"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Новости
                    </NavLink>

                    <NavLink
                        to="/messages"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Сообщения
                    </NavLink>

                    <NavLink
                        to="/subscriptions"
                        style={({ isActive }) =>
                            isActive ? navLinkActiveStyle : navLinkStyle
                        }
                    >
                        Подписки
                    </NavLink>

                    <NavLink
                        to="/logout"
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