import '../styles/UserCard.css';
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function AdminPanelUserCard({user}) {
    const setRoleUrl = 'http://localhost:8081/api/admin/setRole/'
    const navigate = useNavigate()
    const toProfile = () => {
        navigate('/user/'+user.username)
    }

    const makeModerator = async (event) => {
        event.preventDefault()
        await axios.get(setRoleUrl+user.id+'/1', {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
    }

    const banUser = async (event) => {
        event.preventDefault()
        await axios.delete('http://localhost:8081/api/admin/ban/'+user.id, {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
    }

    return (
        <div className="user-card">
            <Avatar img={user.avatarId}/>
            <span className="user-name">{user.username} ({user.profileAlias})</span>
            <div className="user-button-block">
                <button className="go-to-profile" onClick={toProfile}>
                    <span>Перейти в профиль</span>
                </button>
                <button className="up-to-moderator" onClick={makeModerator}>
                    <span>Сделать модератором</span>
                </button>
                <button className="ban-user" onClick={banUser}>
                    <span>В бан!</span>
                </button>
            </div>
        </div>
    )
}