import '../styles/CommentWriter.css';
import sendLogo from '../sendComment.svg';
import testAv from '../static-tests/test-av.png';
import {Avatar} from './Avatar';
import {useState} from "react";
import axios from "axios";

export function CommentWriter({avatarId, postId}) {
    const [textValue, setTextValue] = useState('')

    const request = {
        postId: 0,
        text: ''
    }
    const submitHandler = async (event) => {
        request.postId = postId;
        request.text = textValue;
        event.preventDefault();
        await axios.post('http://localhost:8081/api/post/addComment', request, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        });
        setTextValue('');
    }

    return (
        <div className="comment-writer-wrapper">
            <div className="writer-miniature">
                <Avatar img={avatarId}/>
            </div>
            <form className="writer-body">
                <input type="text" placeholder="Оставить комментарий..." required
                    value={textValue}
                    onChange={event => setTextValue(event.target.value)}
                />
                <button onClick={submitHandler}>
                    <img src={sendLogo}/>
                </button>
            </form>

        </div>
    )
}