import '../styles/PostCard.css';
import testAv from '../static-tests/test-av.png';
import {Avatar} from "./Avatar";
import {PostReactionsBlock} from "./PostReactionsBlock";
import {CommentCard} from "./CommentCard";
import {CommentWriter} from "./CommentWriter";

/**
 * @description Компонент карточки поста
 * @param props.text текст поста
 * @param props.media прикрепленное изображение / null
 * @returns {JSX.Element}
 * @constructor
 */
export function PostCard({post}) {

    return (
        <div className="post-card-wrapper">

            <div className="post-card-data">
                <div className="post-miniature">
                    <Avatar img={post.avatarId}/>
                </div>

                <div className="post-body">
                    <div className="post-metadata">
                        <div className="post-owner-name h2">
                            <span>{post.aliasProfile}</span>
                        </div>

                        <span className="post-meta-delimiter h3">&bull;</span>

                        <div className="post-date h3">
                            <span>{post.creationDate}</span>
                        </div>

                    </div>

                    <div className="post-text">
                        <span className="text">{post.text}</span>
                    </div>
                </div>
            </div>

            <div className="post-card-media">
                <div className="post-media">
                    <img src={'http://localhost:8081/image/postImage/'+post.imageId} alt=""/>
                </div>
            </div>

            <div className="post-card-reactions">
                <PostReactionsBlock likeProps={post.likes} comment={post.commentsCount} postId={post.id}/>
            </div>

            <div className="post-card-comments">
                {post.comments.map(comment => <CommentCard comment={comment}/>)}
            </div>

            <CommentWriter postId={post.id}/>

        </div>
    )
}