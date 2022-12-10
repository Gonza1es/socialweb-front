import '../styles/ModeratorPanelReportCard.css';
import {PostCard} from "./PostCard";

export function ModeratorPanelReportCard() {

    const test = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
        " dolore magna aliqua. Pharetra pharetra massa massa ultricies. In nisl nisi scelerisque eu ultrices. Consequat" +
        "nisl vel pretium lectus quam id leo in.Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Interdum velit euismod" +
        " in pellentesque massa. Pulvinar sapien et ligula ullamcorper malesuada proin";

    return (
        <div className="report-card-wrapper">
            <span className="report-card-header">Жалоба от стукача :)</span>
            <PostCard text={test}/>
            <div className="report-card-button-block">
                <button className="decline-button">
                    <span>Отклонить</span>
                </button>
                <button className="delete-post-button">
                    <span>Удалить пост</span>
                </button>
                <button className="ban-user-button">
                    <span>В бан!</span>
                </button>
            </div>
        </div>
    )
}