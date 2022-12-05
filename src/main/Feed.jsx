import './styles/Feed.css';
import {PostCard} from "./components/PostCard";
import {ContentDelimiter} from "./components/ContentDelimiter";
import {PostCreator} from "./components/PostCreator";


/**
 * @description Компонент ленты новостей
 * @returns {JSX.Element}
 * @constructor
 */
export function Feed() {
    const posts = Array(20).fill("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies. In nisl nisi scelerisque eu ultrices. Consequat nisl vel pretium lectus quam id leo in.Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Interdum velit euismod in pellentesque massa. Pulvinar sapien et ligula ullamcorper malesuada proin.");
    return (
        <div className="Feed">
            <PostCreator/>
            <ContentDelimiter text={"Новости"}/>
            {posts.map(item => <PostCard text={item}/>)}
        </div>
    )
}