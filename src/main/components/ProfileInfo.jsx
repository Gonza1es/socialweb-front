import '../styles/ProfileInfo.css'
import testAv from '../static-tests/test-av.png'
import {Avatar} from "./Avatar";
import {SubscribeButton} from "./SubscribeButton";

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
                    <Avatar online={true} avatar={testAv}/>
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
                    <SubscribeButton/>
                </div>

            </div>
        </div>
    )
}

function test() {
    alert('TEST!');
}
