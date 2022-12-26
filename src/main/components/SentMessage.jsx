import '../styles/SentMessage.css'
import {Avatar} from "./Avatar";

export function SentMessage() {
    return (
        <div className="sent-message-wrapper">
            <div className="message-container">
                <div className="sent-time column">
                    <span className="text">15:03</span>
                </div>
                <div className="message-text column">
                    <p className="text">Нормальные диски поставь ээээ</p>
                </div>
                <div className="avatar-wrapper column">
                    <Avatar/>
                </div>
            </div>
        </div>
    )
}