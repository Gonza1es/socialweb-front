import '../styles/MyDialogs.css'
import {DialogHistoryCard} from "./DialogHistoryCard";

export function MyDialogs() {
    return (
        <div className="my-dialogs-wrapper">
            <div className="my-dialogs-header">
                <span className="h2">Мои диалоги</span>
            </div>
            <div className="my-dialogs-list">
                {Array(10).fill('').map(() => <DialogHistoryCard/>)}
            </div>
        </div>
    )
}
