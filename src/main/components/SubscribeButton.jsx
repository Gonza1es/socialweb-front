import {useState} from "react";
import okLogo from '../okLogo.svg';
import '../styles/SubscribeButton.css';

/**
 * @description Компонент кнопки "Подписаться"
 * @returns {JSX.Element}
 * @constructor
 */
export function SubscribeButton() {

    const [buttonText, setButtonText] = useState("Подписаться");
    const [subscriptionStatus, setSubscriptionStatus] = useState(false);

    function handleButtonStateChange() {
        if (subscriptionStatus) {
            setButtonText("Подписаться");
            setSubscriptionStatus(false);
            alert('Unsubscribed');
        }
        else {
            setButtonText("Вы подписаны");
            setSubscriptionStatus(true);
            alert('Subscribed');
        }
    }

    return (
        <div className="subscribe-button-wrapper">
            <button className="subscribe-button" onClick={handleButtonStateChange}>
                <img className="button-img" src={okLogo} style={subscriptionStatus? {} : {display: "none"}}/>
                <span className="button-text">{buttonText}</span>
            </button>
        </div>
    )
}