import '../styles/DialogHistoryCard.css'
import {Avatar} from "./Avatar";

export function DialogHistoryCard() {
    return (
        <div className="dialog-history-card-wrapper">
            <div className="avatar-wrapper">
                <Avatar/>
            </div>

            <div className="card-body">
                <div className="card-meta">
                    <div className="receiver-name">
                        <span className="h3">@Дорогой Брат</span>
                    </div>

                    <div className="sent-received-time">
                        <span className="text">15:03</span>
                    </div>
                </div>

                <div className="last-message">
                    <span className="text">Салам Аллейкум</span>
                </div>
            </div>
        </div>
    )
}
