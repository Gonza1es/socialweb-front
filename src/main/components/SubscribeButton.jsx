import {useEffect, useState} from "react";
import okLogo from '../okLogo.svg';
import '../styles/SubscribeButton.css';
import axios from "axios";

/**
 * @description Компонент кнопки "Подписаться"
 * @returns {JSX.Element}
 * @constructor
 */
export function SubscribeButton({isSubscribed, name}) {

    const [buttonText, setButtonText] = useState('Подписаться');
    const [subscriptionStatus, setSubscriptionStatus] = useState(isSubscribed);

    useEffect(()=> {
        if (isSubscribed) {
            setButtonText('Вы подписаны')
            setSubscriptionStatus(isSubscribed)
        }
    })

    async function handleButtonStateChange() {
        if (subscriptionStatus) {
            setButtonText('Подписаться')
            setSubscriptionStatus(!subscriptionStatus);
            await axios.get('http://localhost:8081/api/profile/unsubscribe/'+name, {
                headers: {
                    Authorization: 'Bearer_' + document.cookie
                }
            })
        }
        else {
            setButtonText('Вы подписаны')
            setSubscriptionStatus(!subscriptionStatus);
            await axios.get('http://localhost:8081/api/profile/subscribe/'+name, {
                headers: {
                    Authorization: 'Bearer_' + document.cookie
                }
            })
        }
    }

    return (
        <div className="subscribe-button-wrapper">
            <button className="subscribe-button" onClick={handleButtonStateChange}>
                {/*{subscriptionStatus? setButtonText("Вы подписаны") : setButtonText("Подписаться")}*/}
                <img className="button-img" src={okLogo} style={subscriptionStatus? {} : {display: "none"}}/>
                <span className="button-text">{buttonText}</span>
            </button>
        </div>
    )
}