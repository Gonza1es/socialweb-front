import {ModeratorPanelUserCard} from './ModeratorPanelUserCard';
import {useEffect, useState} from "react";
import axios from "axios";

export function ModeratorPanelUsersList() {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8081/api/moder/users", {
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
        <div className="Moderator-Panel-Users-List">
            {users.map(item => <ModeratorPanelUserCard user = {item}/>)}
        </div>
    )
}

