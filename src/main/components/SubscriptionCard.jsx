import '../styles/SubscriptionCard.css';
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";


export function SubscriptionCard() {
    return (
        <div className="subscription-card">
            <Avatar img={testAv} online={true}/>
            <span className="subscription-name">@Максим Гнездилов</span>
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