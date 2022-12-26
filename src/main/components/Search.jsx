import {Avatar} from "./Avatar";
import photoLogo from "../photoLogo.svg";
import {useState} from "react";
import '../styles/PostCreator.css'
import '../styles/Search.css'

export function Search() {
    const [text, setText] = useState('')
    const avatar = localStorage.getItem('avatar');
    return (
        <div className="post-creator-wrapper">

            <div className="miniature-wrapper">
                <Avatar img={avatar}/>
            </div>

            <div className="post-creator-body">
                <div className="post-creator-input">
                    <textarea placeholder="Найти пользователя..."
                              value={text}
                              onChange={event => setText(event.target.value)}
                    ></textarea>
                </div>

                <button className="search-button">
                    <span className="button-text">Найти</span>
                </button>
            </div>
        </div>
    )
}