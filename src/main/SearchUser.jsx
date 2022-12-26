import {Header} from "./components/Header";
import {ContentDelimiter} from "./components/ContentDelimiter";
import './styles/SearchUser.css'
import './styles/PostCreator.css';
import './styles/Search.css'
import {useState} from "react";
import {Avatar} from "./components/Avatar";
import axios from "axios";
import {Link} from "react-router-dom";
import {SubscribeButton} from "./components/SubscribeButton";

export function SearchUser() {
    const [text, setText] = useState('')
    const [profile, setProfile] = useState({
        name: '',
        avatar: 0,
        isSubscribe: false,
        username: ''
    })
    const avatar = localStorage.getItem('avatar');

    const searchProfile = async (event) => {
        event.preventDefault()

        const response = await axios.get('http://localhost:8081/api/profile/'+text, {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
        if (response.data !== null) {
            let newProfile = {
                name: '',
                avatar: 0,
                isSubscribe: false,
                username: ''
            }
            newProfile.name = response.data.aliasProfile
            newProfile.avatar = response.data.avatarId
            newProfile.isSubscribe = response.data.isSubscribed
            newProfile.username = text;
            setProfile(newProfile)
        }
        setText('')
    }
    return(
        <div className="Search">
            <Header/>
            <div className="post-creator-wrapper">

                <div className="miniature-wrapper">
                    <Avatar img={avatar}/>
                </div>

                <div className="post-creator-body">
                    <div className="post-creator-input">
                    <textarea placeholder="Найти пользователя..."
                              value={text}
                              onChange={event => setText(event.target.value)}
                    ></textarea>
                    </div>

                    <button className="search-button" onClick={searchProfile}>
                        <span className="button-text">Найти</span>
                    </button>
                </div>
            </div>
            <ContentDelimiter text={"Найти пользователя"}/>
            <div className="subscription-card">
                <Avatar img={profile.avatar} online={true}/>
                <Link to={`/user/${profile.username}`} className="subscription-name">{profile.username}</Link>
                <div className="button-block">
                    <SubscribeButton isSubscribed={profile.isSubscribe} name={profile.username}/>
                </div>
            </div>
        </div>
    )
}