import '../styles/PostReactionsBlock.css';
import likeLogo from '../likeLogo.svg';
import commentLogo from '../commentLogo.svg';
import axios from "axios";
import {useState} from "react";

/**
 * @description Компонент с кнопками реакций на пост
 * @returns {JSX.Element}
 * @constructor
 */
export function PostReactionsBlock({likeProps, comment, postId}) {

    let [like, setLike] = useState(likeProps)

    const incrementLike = async () => {
        axios.get('http://localhost:8081/api/post/like/'+postId, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        })
        setLike(like+1)
    }

    const sendReport = async (event) => {
        event.preventDefault();
        await axios.get('http://localhost:8081/api/post/report/'+postId, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        })
    }
    return (
        <div className="post-reaction-block-wrapper">
            <div className="like-button-wrapper">
                <button className="like-button" onClick={incrementLike}>
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
                <button className="report-button" onClick={sendReport}>
                    <span>Пожаловаться</span>
                </button>
            </div>

        </div>
    )
}