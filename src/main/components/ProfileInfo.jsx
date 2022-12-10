import '../styles/ProfileInfo.css'
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {ProfileEditButton} from "./ProfileEditButton";
import {ProfileEditor} from "./ProfileEditor";

/**
 * @description Компонент с главной информацией о профиле
 * @param props.coverImage изображение обложки профиля
 * @returns {JSX.Element}
 * @constructor
 */
export function ProfileInfo(props) {

    return (
        <div className="profile-info-wrapper">

            <div className="profile-images-group">

                <div className="profile-cover"
                     style={
                        {backgroundImage: `url(${props.coverImage})`}
                     }
                >
                </div>

                <div className="profile-avatar">
                    <Avatar img={testAv} online={false}/>
                </div>

            </div>

            <div className="profile-info">

                <div className="dummy"></div>

                <div className="profile-name-wrapper">

                    <div className="profile-name">
                        <span>@Максим Гнездилов</span>
                    </div>

                    <div className="profile-status">
                        <span>I'm Rich. I'm Rich. I'm Rich.</span>
                    </div>

                </div>

                <div className="subscribers">
                    <span className="label">Подписчики</span>
                    <span className="count">120</span>
                </div>


                <div className="profile-action-button">
                    <ProfileEditButton/>
                </div>


                <ProfileEditor/>

            </div>
        </div>
    )
}
