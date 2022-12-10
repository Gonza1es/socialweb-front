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

                <form className="post-creator-photo-button">
                    <label for="attachment-upload">
                        <img src={photoLogo}/>
                    </label>
                    <input id="attachment-upload" className="attachment" type="file" accept="image/*"/>
                    {/*<input type="file"><img src={photoLogo}/></input>*/}
                </form>

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