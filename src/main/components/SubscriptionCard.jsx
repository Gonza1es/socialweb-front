import '../styles/SubscriptionCard.css';
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {Link} from "react-router-dom";
import axios from "axios";


export function SubscriptionCard({card}) {

    const unsubscribe = async (event) => {
        event.preventDefault();

        await axios.get('http://localhost:8081/api/profile/unsubscribe/'+card.username, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        })
    }


    return (
        <div className="subscription-card">
            <Avatar img={card.avatarId} online={true}/>
            <Link to={`/user/${card.username}`} className="subscription-name">{card.username}</Link>
            <div className="button-block">
                <button className="unsubscribe" onClick={unsubscribe}>
                    <span>Отписаться</span>
                </button>
            </div>
        </div>
    )
}