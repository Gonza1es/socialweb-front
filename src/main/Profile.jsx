import {ProfileInfo} from "./components/ProfileInfo";
import './styles/Profile.css'
import {PostCreator} from "./components/PostCreator";
import {PostCard} from "./components/PostCard";
import testCover from './static-tests/test-cov.png'
import {ContentDelimiter} from "./components/ContentDelimiter";
import {CommentCard} from "./components/CommentCard";

/**
 * @description Компонент профиля
 * @returns {JSX.Element}
 * @constructor
 */
export function Profile() {

    const posts = Array(10).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies. In nisl nisi scelerisque eu ultrices. Consequat nisl vel pretium lectus quam id leo in.Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Interdum velit euismod in pellentesque massa. Pulvinar sapien et ligula ullamcorper malesuada proin.");
    return (
        <div className="Profile">
            <ProfileInfo coverImage={testCover}/>
            <PostCreator/>
            <ContentDelimiter text={"Мои записи"}/>
            {posts.map(item => <PostCard postText={item}/>)}
        </div>
    )
}
