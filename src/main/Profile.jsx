import {ProfileInfo} from "./components/ProfileInfo";
import './styles/Profile.css'
import testImg from './static-tests/landscape.png'
import {PostCreator} from "./components/PostCreator";
import {PostCard} from "./components/PostCard";
import testCover from './static-tests/test-cov.png'
import {ContentDelimiter} from "./components/ContentDelimiter";
import {Header} from "./components/Header";
import axios from "axios";
import {useEffect, useState} from "react";

/**
 * @description Компонент профиля
 * @returns {JSX.Element}
 * @constructor
 */
export function Profile() {

    const profileUrl = 'http://localhost:8081/api/profile/current'
    const postUrl = 'http://localhost:8081/api/post/current'
    const [posts, setPosts] = useState([])
    const [profile, setProfile] = useState({
        aliasProfile: '',
        status: '',
        avatarId: 0,
        coverId: 0,
        subscribersCount: 0
    })


    async function fetchProfileInfo() {
        const response = await axios.get(profileUrl, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        });
        profile.aliasProfile = response.data.aliasProfile;
        profile.status = response.data.status;
        profile.avatarId = response.data.avatarId;
        profile.coverId = response.data.coverId;
        profile.subscribersCount = response.data.subscribersCount;
        setProfile(profile)
        const postsResponse = await axios.get(postUrl, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        })
        setPosts(postsResponse.data)
    }

    useEffect(() => {
        fetchProfileInfo()
    },[])

    return (
        <div className="Profile">
            <Header/>
            <ProfileInfo profile={profile}/>
            <PostCreator/>
            <ContentDelimiter text={"Мои записи"}/>
            {posts.map(item => <PostCard post={item}/>)}
        </div>
    )
}
