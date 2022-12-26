import '../styles/MessageSender.css'
import {Avatar} from "./Avatar";
import sendLogo from "../sendComment.svg";

export function MessageSender() {

    function submitHandler() {
        alert('test!')
    }

    return (
        <div className="message-sender-wrapper">
            <form className="sender-body">
                <input className="text" type="text" placeholder="Написать сообщение..." required/>
                <button onClick={submitHandler}>
                    <img src={sendLogo}/>
                </button>
            </form>

        </div>
    )
}