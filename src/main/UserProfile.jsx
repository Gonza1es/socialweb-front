import {ProfileInfo} from "./components/ProfileInfo";
import './styles/Profile.css'
import testImg from './static-tests/landscape.png'
import {PostCard} from "./components/PostCard";
import testCover from './static-tests/test-cov.png'
import {ContentDelimiter} from "./components/ContentDelimiter";
import {Header} from "./components/Header";
import axios from "axios";
import {useEffect, useState} from "react";

/**
 * @description Компонент профиля другого пользователя
 * @returns {JSX.Element}
 * @constructor
 */
export function UserProfile() {

    const profileUrl = 'http://localhost:8081/api/profile/current'
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
        console.log(profile)
        setPosts(response.data.posts);
    }

    useEffect(() => {
        fetchProfileInfo()
    },[])

    return (
        <div className="Profile">
            <Header/>
            <ProfileInfo profile={profile} selfProfile={false}/>
            <ContentDelimiter text={"Записи"}/>
            {posts.map(item => <PostCard text={item} media={testImg}/>)}
        </div>
    )
}