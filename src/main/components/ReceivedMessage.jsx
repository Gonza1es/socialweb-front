import '../styles/ReceivedMessage.css'
import {Avatar} from "./Avatar";

export function ReceivedMessage() {
    return (
        <div className="received-message-wrapper">
            <div className="message-container">
                <div className="avatar-wrapper column">
                    <Avatar/>
                </div>
                <div className="message-text column">
                    <p className="text">Господи, как же я люблю CSS, я час не мог спозиционировать сообщение....</p>
                </div>
                <div className="sent-time column">
                    <span className="text">15:03</span>
                </div>
            </div>
        </div>
    )
}