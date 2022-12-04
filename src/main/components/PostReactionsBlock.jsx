import '../styles/PostReactionsBlock.css';
import likeLogo from '../likeLogo.svg';
import commentLogo from '../commentLogo.svg';
import {useState} from "react";

export function PostReactionsBlock() {
    return (
        <div className="post-reaction-block-wrapper">
            <div className="like-button-wrapper">
                <button className="like-button">
                    <img src={likeLogo}/>
                    <span>15</span>
                </button>
            </div>

            <div className="comment-button-wrapper">
                <button className="comment-button">
                    <img src={commentLogo}></img>
                    <span>3</span>
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