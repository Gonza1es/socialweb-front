import '../styles/WriteMessageButton.css'
import sendMessage from "../sendComment.svg";

export function WriteMessageButton() {
    return (
        <div className="write-msg-btn-wrapper">
            <button className="write-msg-button">
                <img className="button-img" src={sendMessage}/>
            </button>
        </div>
    )
}