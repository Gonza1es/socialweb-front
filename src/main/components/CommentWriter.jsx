import '../styles/CommentWriter.css';
import sendLogo from '../sendComment.svg';
import testAv from '../static-tests/test-av.png';
import {Avatar} from './Avatar';

export function CommentWriter() {
    return (
        <div className="comment-writer-wrapper">
            <div className="writer-miniature">
                <Avatar img={testAv}/>
            </div>
            <form className="writer-body">
                <input type="text" placeholder="Оставить комментарий..." required/>
                <button type="submit">
                    <img src={sendLogo}/>
                </button>
            </form>

        </div>
    )
}