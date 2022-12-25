import './styles/ModeratorPanel.css';
import {ContentDelimiter} from "./components/ContentDelimiter";
import {useEffect, useState} from "react";
import {ModeratorPanelReportsList} from "./components/ModeratorPanelReportsList";
import {ModeratorPanelUsersList} from "./components/ModeratorPanelUsersList";

export function ModeratorPanel() {

    const [moderatorPanelState, setModeratorPanelState] = useState('reports');
    const defaultButtonStyle = {
        backgroundColor: "transparent",
        color: "black"
    };
    const activeButtonStyle = {
        backgroundColor: "#BFCC58",
        color: "#464C54"
    };

    return (
        <div className="Moderator-Panel">
            <div className="moderator-panel-header">
                <ContentDelimiter text={"Панель модератора"}/>
            </div>

            <div className="moderator-panel-button-group">
                <button className="reports"
                        onClick={() => setModeratorPanelState('reports')}
                        style={moderatorPanelState === 'reports'? activeButtonStyle : defaultButtonStyle}
                >
                    <span>Жалобы</span>
                </button>

                <button className="users"
                        onClick={() => setModeratorPanelState('users')}
                        style={moderatorPanelState === 'users'? activeButtonStyle : defaultButtonStyle}
                >
                    <span>Пользователи</span>
                </button>
            </div>

            <div className="cards-wrapper">
                {moderatorPanelState === 'reports' ? <ModeratorPanelReportsList/> : <ModeratorPanelUsersList/> }
            </div>
        </div>
    )
}