import '../styles/PostCreator.css';
import {Avatar} from "./Avatar";
import testAv from '../static-tests/test-av.png'
import photoLogo from '../photoLogo.svg'

/**
 * @description Компонент для создания поста
 * @returns {JSX.Element}
 * @constructor
 */
export function PostCreator() {
    return (
        <div className="post-creator-wrapper">

            <div className="miniature-wrapper">
                <Avatar img={testAv}/>
            </div>

            <div className="post-creator-body">
                <div className="post-creator-input">
                    <textarea placeholder="Новая запись..."></textarea>
                </div>

                <button className="post-creator-photo-button">
                    <img src={photoLogo}/>
                </button>

                <button className="post-creator-publish-button" onClick={test}>
                    <span>Опубликовать</span>
                </button>
            </div>
        </div>
    )
}

function test() {
    alert('Post published');
}