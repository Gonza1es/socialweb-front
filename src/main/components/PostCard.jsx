import '../styles/PostCard.css';
import testAv from '../static-tests/test-av.png';
import {Avatar} from "./Avatar";
import {PostReactionsBlock} from "./PostReactionsBlock";
import landcape from '../static-tests/landscape.png'
import {CommentCard} from "./CommentCard";


export function PostCard(props) {
    return (
        <div className="post-card-wrapper">

            <div className="post-card-data">
                <div className="post-miniature">
                    <Avatar img={testAv}/>
                </div>

                <div className="post-body">
                    <div className="post-metadata">
                        <div className="post-owner-name">
                            <span>@Максим Гнездилов</span>
                        </div>

                        <span className="post-meta-delimiter">&bull;</span>

                        <div className="post-date">
                            <span>29 ноября 2022</span>
                        </div>

                    </div>

                    <div className="post-text">
                        <span>{props.postText}</span>
                    </div>
                </div>
            </div>

            <div className="post-card-media">
                <div className="post-media">
                    <img src={landcape}/>
                </div>
            </div>

            <div className="post-card-reactions">
                <PostReactionsBlock/>
            </div>

            <div className="post-card-comments">
                <CommentCard/>
            </div>

        </div>
    )
}