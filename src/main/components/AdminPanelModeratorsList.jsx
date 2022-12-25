import {AdminPanelModeratorCard} from "./AdminPanelModeratorCard";
import {useEffect, useState} from "react";
import axios from "axios";

export function AdminPanelModeratorsList() {
    const [moderators, setModerators] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8081/api/admin/moderators", {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        })
        setModerators(response.data)
    }
    useEffect(() => {
        fetchUsers()
    },[])
    return (
        <div className="Admin-Panel-Moderator-List">
            {moderators.map(item => <AdminPanelModeratorCard moderator = {item}/>)}
        </div>
    )
}