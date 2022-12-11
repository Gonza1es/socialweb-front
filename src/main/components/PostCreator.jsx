import '../styles/PostCreator.css';
import {Avatar} from "./Avatar";
import testAv from '../static-tests/test-av.png'
import photoLogo from '../photoLogo.svg'
import {useRef, useState} from "react";
import axios from "axios";

/**
 * @description Компонент для создания поста
 * @returns {JSX.Element}
 * @constructor
 */
export function PostCreator({avatarId}) {

    const url = 'http://localhost:8081/api/post/createPost'

    const [text, setText] = useState('')
    const imageRef = useRef(null)

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('text', text)
        formData.append('file', imageRef.current.files[0])

        await axios.post(url, formData, {
            headers: {
                Authorization: 'Bearer_'+document.cookie,
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    return (
        <div className="post-creator-wrapper">

            <div className="miniature-wrapper">
                <Avatar img={avatarId}/>
            </div>

            <div className="post-creator-body">
                <div className="post-creator-input">
                    <textarea placeholder="Новая запись..."
                        value={text}
                        onChange={event => setText(event.target.value)}
                    ></textarea>
                </div>

                <form className="post-creator-photo-button">
                    <label for="attachment-upload">
                        <img src={photoLogo}/>
                    </label>
                    <input id="attachment-upload" className="attachment" type="file" accept="image/*" ref={imageRef}/>
                    {/*<input type="file"><img src={photoLogo}/></input>*/}
                </form>

                <button className="post-creator-publish-button" onClick={submitHandler}>
                    <span>Опубликовать</span>
                </button>
            </div>
        </div>
    )
}

function test() {
    alert('Post published');
}