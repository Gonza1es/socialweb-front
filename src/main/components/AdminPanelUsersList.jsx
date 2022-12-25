import {AdminPanelUserCard} from "./AdminPanelUserCard";
import axios from "axios";
import {useEffect, useState} from "react";

export function AdminPanelUsersList() {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8081/api/admin/users", {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        })
        setUsers(response.data)
    }

    useEffect(() => {
        fetchUsers()
    },[])
    return (
        <div className="Admin-Panel-Users-List">
            {users.map(item => <AdminPanelUserCard user = {item}/>)}
        </div>
    )
}