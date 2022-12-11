import './styles/Feed.css';
import {PostCard} from "./components/PostCard";
import {ContentDelimiter} from "./components/ContentDelimiter";
import {PostCreator} from "./components/PostCreator";
import {Header} from "./components/Header";
import {useEffect, useState} from "react";
import axios from "axios";


/**
 * @description Компонент ленты новостей
 * @returns {JSX.Element}
 * @constructor
 */
export function Feed() {
    const [posts, setPosts] = useState([])
    const postUrl = 'http://localhost:8081/api/post/feed'
    const avatar = localStorage.getItem('avatar');

    const fetchPost = async () => {
        const postsResponse = await axios.get(postUrl, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        });
        setPosts(postsResponse.data)
    }

    useEffect(() => {
        fetchPost()
    },[])
    return (
        <div className="Feed">
            <Header/>
            <PostCreator avatarId={avatar}/>
            <ContentDelimiter text={"Новости"}/>
            {posts.map(item => <PostCard post={item}/>)}
        </div>
    )
}