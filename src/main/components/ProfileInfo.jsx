import '../styles/profile-info.css'
import testAv from '../static-tests/test-av.png'
import testCover from '../static-tests/test-cov.png'
import {Avatar} from "./Avatar";
import {ProfileButton} from "./ProfileButton";


export function ProfileInfo(props) {
    return (
        <div className="profile-info-wrapper">
            <div className="profile-images-group">
                <div className="profile-cover">
                    <img src={testAv} alt=""/>
                </div>

                <div className="profile-avatar">
                    <Avatar online={true} avatar={testAv} className="profile-avatar"/>
                </div>
            </div>

            <div className="profile-info">
                <div className="dummy"></div>
                <div className="profile-name-wrapper">
                    <div className="profile-name">
                        <span>Максим Гнездилов</span>
                    </div>

                    <div className="profile-status">
                        <span>I'm Rich. I'm Rich. I'm Rich.</span>
                    </div>
                </div>

                <div className="subscribers">
                    <span>Подписчики</span>
                    <span>120</span>
                </div>

                <div className="profile-action-button">
                    <ProfileButton personalProfile={true} btnHandler={test}/>
                </div>

            </div>
        </div>
    )
}


function test() {
    alert('TEST!');
}
