import './styles/Subscriptions.css';
import {Header} from "./components/Header";
import {ContentDelimiter} from "./components/ContentDelimiter";
import {SubscriptionCard} from "./components/SubscriptionCard";

export function Subscriptions() {

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

    const testCount = 1;
    const testSubs = Array(1).fill(<SubscriptionCard/>);
    return (
        <div className="Subscriptions">
            <Header/>
            <ContentDelimiter text={"Мои подписки"}/>
            <div className="subscriptions-count">
                <span>Вы подписаны на {testCount} {getNumEnding(testCount, ["человека", "человека", "человек"])}.</span>
            </div>
            {testSubs.map(card => card)}
        </div>
    )
}