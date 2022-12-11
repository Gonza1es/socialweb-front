import {ProfileInfo} from "./components/ProfileInfo";
import './styles/Profile.css'
import testImg from './static-tests/landscape.png'
import {PostCard} from "./components/PostCard";
import testCover from './static-tests/test-cov.png'
import {ContentDelimiter} from "./components/ContentDelimiter";
import {Header} from "./components/Header";
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

/**
 * @description Компонент профиля другого пользователя
 * @returns {JSX.Element}
 * @constructor
 */
export function UserProfile() {
    let { name } = useParams();
    const userProfileUrl = 'http://localhost:8081/api/profile/'+ name
    const userPostUrl = 'http://localhost:8081/api/post/'+ name
    const [posts, setPosts] = useState([])
    const [profile, setProfile] = useState({
        aliasProfile: '',
        status: '',
        avatarId: 0,
        coverId: 0,
        subscribersCount: 0,
        isSubscribed: false
    })


    async function fetchProfileInfo() {
        const response = await axios.get(userProfileUrl, {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        });
        profile.aliasProfile = response.data.aliasProfile;
        profile.status = response.data.status;
        profile.avatarId = response.data.avatarId;
        profile.coverId = response.data.coverId;
        profile.subscribersCount = response.data.subscribersCount;
        profile.isSubscribed = response.data.isSubscribed;
        setProfile(profile)
        const postsResponse = await axios.get(userPostUrl, {
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
            <ProfileInfo profile={profile} selfProfile={false} name={name}/>
            <ContentDelimiter text={"Записи"}/>
            {posts.map(item => <PostCard post={item}/>)}
        </div>
    )
}