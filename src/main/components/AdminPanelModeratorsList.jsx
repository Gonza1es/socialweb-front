import {AdminPanelModeratorCard} from "./AdminPanelModeratorCard";

export function AdminPanelModeratorsList() {
    return (
        <div className="Admin-Panel-Moderator-List">
            {Array(10).fill("").map(item => <AdminPanelModeratorCard/>)}
        </div>
    )
}