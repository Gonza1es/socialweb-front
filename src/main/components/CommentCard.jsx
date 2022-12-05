import '../styles/CommentCard.css';
import {Avatar} from "./Avatar";
import girlAvatar from "../static-tests/girl.png";

export function CommentCard(props) {
    return (
        <div className="comment-wrapper">

            <div className="comment-avatar-wrapper">
                <Avatar img={girlAvatar}/>
            </div>

            <div className="comment-body">
                <div className="comment-name">
                    <span>@Ксения Печерских</span>
                </div>

                <div className="comment-text">
                    <span>Господи, чем я занимаюсь, господи...</span>
                </div>

                <div className="comment-date">
                    <span>29 ноября 2022</span>
                </div>
            </div>

        </div>
    )
}