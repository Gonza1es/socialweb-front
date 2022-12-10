import {AdminPanelUserCard} from "./AdminPanelUserCard";

export function AdminPanelUsersList() {
    return (
        <div className="Admin-Panel-Users-List">
            {Array(10).fill("").map(item => <AdminPanelUserCard/>)}
        </div>
    )
}