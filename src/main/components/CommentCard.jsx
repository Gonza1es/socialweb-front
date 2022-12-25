import '../styles/CommentCard.css';
import {Avatar} from "./Avatar";
import girlAvatar from "../static-tests/girl.png";

/**
 * @description Компонент карточки комментария
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export function CommentCard({comment}) {
    return (
        <div className="comment-wrapper">

            <div className="comment-avatar-wrapper">
                <Avatar img={comment.avatarId}/>
            </div>

            <div className="comment-body">
                <div className="comment-name">
                    <span>{comment.profileAlias}</span>
                </div>

                <div className="comment-text">
                    <span>{comment.text}</span>
                </div>

                <div className="comment-date">
                    <span>{comment.creationDate}</span>
                </div>
            </div>

        </div>
    )
}