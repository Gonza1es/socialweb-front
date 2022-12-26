import '../styles/ProfileInfo.css'
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {SubscribeButton} from "./SubscribeButton";
import {ProfileEditButton} from "./ProfileEditButton";
import {ProfileEditor} from "./ProfileEditor";
import {WriteMessageButton} from "./WriteMessageButton";

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
                    <Avatar className={"big-av"} img={profile.avatarId} online={false}/>
                </div>

            </div>

            <div className="profile-info">

                <div className="dummy"></div>

                <div className="profile-name-wrapper">

                    <div className="profile-name">
                        <span className="big-name">{profile.aliasProfile}</span>
                    </div>

                    <div className="profile-status">
                        <span className="h2">{profile.status}</span>
                    </div>

                </div>

                <div className="subscribers">
                    <span className="label h2">Подписчики</span>
                    <span className="count h2">{profile.subscribersCount}</span>
                </div>


                <div className="profile-action-button">
                    {
                        selfProfile ? <ProfileEditButton/>
                            :
                            <div className="profile-buttons-group">
                                <SubscribeButton isSubscribed={profile.isSubscribed} name={name}/>
                            </div>
                    }
                </div>

                {selfProfile ? <ProfileEditor/> : ""}

            </div>
        </div>
    )
}
