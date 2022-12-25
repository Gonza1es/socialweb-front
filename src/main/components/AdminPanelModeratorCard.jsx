import '../styles/UserCard.css';
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function AdminPanelModeratorCard({moderator}) {
    const setRoleUrl = 'http://localhost:8081/api/admin/setRole/'
    const navigate = useNavigate()
    const toProfile = () => {
        navigate('/user/'+moderator.username)
    }

    const makeUser = async (event) => {
        event.preventDefault()
        await axios.get(setRoleUrl+moderator.id+'/3', {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
    }
    return (
        <div className="user-card">
            <Avatar img={moderator.avatarId} online={true}/>
            <span className="user-name">{moderator.username} ({moderator.profileAlias})</span>
            <div className="user-button-block">
                <button className="go-to-profile" onClick={toProfile}>
                    <span>Перейти в профиль</span>
                </button>
                <button className="back-to-user" onClick={makeUser}>
                    <span>Сделать пользователем</span>
                </button>
                <button className="ban-user">
                    <span>В бан!</span>
                </button>
            </div>
        </div>
    )
}