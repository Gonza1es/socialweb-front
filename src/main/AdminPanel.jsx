import './styles/AdminPanel.css';
import {ContentDelimiter} from "./components/ContentDelimiter";
import {useState} from "react";
import {AdminPanelUsersList} from "./components/AdminPanelUsersList";
import {AdminPanelModeratorsList} from "./components/AdminPanelModeratorsList";

export function AdminPanel() {

    const [adminPanelState, setAdminPanelState] = useState('users');
    const defaultButtonStyle = {
        backgroundColor: "transparent",
        color: "black"
    };
    const activeButtonStyle = {
        backgroundColor: "#BFCC58",
        color: "#464C54"
    };


    return (
        <div className="Admin-Panel">
            <div className="admin-panel-header">
                <ContentDelimiter text={"Панель администратора"}/>
            </div>

            <div className="admin-panel-button-group">
                <button className="users"
                        onClick={() => setAdminPanelState('users')}
                        style={adminPanelState === 'users'? activeButtonStyle : defaultButtonStyle}
                >
                    <span>Пользователи</span>
                </button>

                <button className="moderators"
                        onClick={() => setAdminPanelState('moderators')}
                        style={adminPanelState === 'moderators'? activeButtonStyle : defaultButtonStyle}
                >
                    <span>Модераторы</span>
                </button>
            </div>

            <div className="cards-wrapper">
                {adminPanelState === 'users' ? <AdminPanelUsersList/> : <AdminPanelModeratorsList/> }
            </div>

        </div>
    )
}