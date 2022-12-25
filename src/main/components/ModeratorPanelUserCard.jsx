import '../styles/UserCard.css';
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export function ModeratorPanelUserCard({user}) {
    const banUser = async (event) => {
        event.preventDefault()
        await axios.delete('http://localhost:8081/api/moder/ban/'+user.id, {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
    }
    const navigate = useNavigate()
    const toProfile = () => {
        navigate('/user/'+user.username)
    }
    return (
        <div className="user-card">
            <Avatar img={user.avatarId}/>
            <span className="user-name">{user.username} ({user.profileAlias})</span>
            <div className="user-button-block">
                <button className="go-to-profile" onClick={toProfile}>
                    <span>Перейти в профиль</span>
                </button>
                <button className="ban-user" onClick={banUser}>
                    <span>В бан!</span>
                </button>
            </div>
        </div>
    )
}