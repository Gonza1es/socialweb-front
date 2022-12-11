import './styles/Subscriptions.css';
import {Header} from "./components/Header";
import {ContentDelimiter} from "./components/ContentDelimiter";
import {SubscriptionCard} from "./components/SubscriptionCard";
import axios from "axios";
import {useEffect, useState} from "react";

export function Subscriptions() {
    const [subscriptions, setSubscriptions] = useState([])

    const fetchSubscriptions = async () => {
        const response = await axios.get('http://localhost:8081/api/profile/subscriptions', {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        });
        setSubscriptions(response.data)
    }

    useEffect(() => {
        fetchSubscriptions()
    })
    function getNumEnding(iNumber, aEndings) {
        let sEnding, i;
        iNumber = iNumber % 100;
        if (iNumber >= 11 && iNumber <= 19) {
            sEnding = aEndings[2];
        } else {
            i = iNumber % 10;
            switch (i) {
                case (1):
                    sEnding = aEndings[0];
                    break;
                case (2):
                case (3):
                case (4):
                    sEnding = aEndings[1];
                    break;
                default:
                    sEnding = aEndings[2];
            }
        }
        return sEnding;
    }


    return (
        <div className="Subscriptions">
            <Header/>
            <ContentDelimiter text={"Мои подписки"}/>
            <div className="subscriptions-count">
                <span>Вы подписаны на {subscriptions.length} {getNumEnding(subscriptions.length, ["человека", "человека", "человек"])}.</span>
            </div>
            {subscriptions.map(card => <SubscriptionCard card={card}/>)}
        </div>
    )
}