import '../styles/SubscriptionCard.css';
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {Link} from "react-router-dom";


export function SubscriptionCard() {

    const testUserName = "tester";

    return (
        <div className="subscription-card">
            <Avatar img={testAv} online={true}/>
            <Link to={`/user/${testUserName}`} className="subscription-name">@Максим Гнездилов</Link>
            <div className="button-block">
                <button className="send-msg">
                    <span>Написать</span>
                </button>
                <button className="unsubscribe">
                    <span>Отписаться</span>
                </button>
            </div>
        </div>
    )
}