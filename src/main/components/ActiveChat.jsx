import '../styles/ActiveChat.css'
import {SentMessage} from "./SentMessage";
import {ReceivedMessage} from "./ReceivedMessage";
import {Avatar} from "./Avatar";
import {MessageSender} from "./MessageSender";
import {DialogHistoryCard} from "./DialogHistoryCard";

export function ActiveChat(props) {
    return (
        <div className="active-chat-wrapper">
            {
                props.chatChosen ?

                    <div className="active-chat">
                        <div className="active-chat-header">
                            <div className="header-avatar">
                                <Avatar/>
                            </div>
                            <div className="companion-name">
                                <span className="h2">@Максим Гнездилов</span>
                            </div>
                        </div>

                        <div className="active-chat-scroll-body">
                            <ReceivedMessage/>
                            {Array(10).fill('').map(() => <SentMessage/>)}
                        </div>
                        <div className="message-sender">
                            <MessageSender/>
                        </div>
                    </div>

                    :

                    <div className="none-chat">
                        <span className="h2">Выберите диалог</span>
                    </div>
            }
        </div>
    )
}
