import {Avatar} from "./Avatar";

export function PostForReportCard({post}) {
    return (
        <div className="post-card-wrapper">

            <div className="post-card-data">
                <div className="post-miniature">
                    <Avatar img={post.avatarId}/>
                </div>

                <div className="post-body">
                    <div className="post-metadata">
                        <div className="post-owner-name">
                            <span>{post.aliasProfile}</span>
                        </div>

                        <span className="post-meta-delimiter">&bull;</span>

                        <div className="post-date">
                            <span>{post.creationDate}</span>
                        </div>

                    </div>

                    <div className="post-text">
                        <span>{post.text}</span>
                    </div>
                </div>
            </div>

            <div className="post-card-media">
                <div className="post-media">
                    <img src={'http://localhost:8081/image/postImage/'+post.imageId}/>
                </div>
            </div>
        </div>
    )
}