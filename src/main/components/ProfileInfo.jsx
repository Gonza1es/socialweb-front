import '../styles/ProfileInfo.css'
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {SubscribeButton} from "./SubscribeButton";
import {ProfileEditButton} from "./ProfileEditButton";
import {ProfileEditor} from "./ProfileEditor";

/**
 * @description Компонент с главной информацией о профиле
 * @param props информация профиля
 * @returns {JSX.Element}
 * @constructor
 */

export function ProfileInfo({profile, selfProfile, name}) {

    const coverUrl = 'http://localhost:8081/image/cover/'

    return (
        <div className="profile-info-wrapper">

            <div className="profile-images-group">

                <div className="profile-cover"
                     style={
                        {backgroundImage: `url(${coverUrl+ profile.coverId})`}
                     }
                >
                </div>

                <div className="profile-avatar">
                    <Avatar img={profile.avatarId} online={false}/>
                </div>

            </div>

            <div className="profile-info">

                <div className="dummy"></div>

                <div className="profile-name-wrapper">

                    <div className="profile-name">
                        <span>{profile.aliasProfile}</span>
                    </div>

                    <div className="profile-status">
                        <span>{profile.status}</span>
                    </div>

                </div>

                <div className="subscribers">
                    <span className="label">Подписчики</span>
                    <span className="count">{profile.subscribersCount}</span>
                </div>


                <div className="profile-action-button">
                    {selfProfile ? <ProfileEditButton/> : <SubscribeButton isSubscribed={profile.isSubscribed} name={name}/>}
                </div>

                {selfProfile ? <ProfileEditor/> : ""}

            </div>
        </div>
    )
}

function test() {
    alert('TEST!');
}
