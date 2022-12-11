import '../styles/PostReactionsBlock.css';
import likeLogo from '../likeLogo.svg';
import commentLogo from '../commentLogo.svg';

/**
 * @description Компонент с кнопками реакций на пост
 * @returns {JSX.Element}
 * @constructor
 */
export function PostReactionsBlock({like, comment}) {
    return (
        <div className="post-reaction-block-wrapper">
            <div className="like-button-wrapper">
                <button className="like-button">
                    <img src={likeLogo}/>
                    <span>{like}</span>
                </button>
            </div>

            <div className="comment-button-wrapper">
                <button className="comment-button">
                    <img src={commentLogo}></img>
                    <span>{comment}</span>
                </button>
            </div>

            <div className="report-button-wrapper" hidden={false}>
                <button className="report-button">
                    <span>Пожаловаться</span>
                </button>
            </div>

        </div>
    )
}