import '../styles/ModeratorPanelReportCard.css';
import {PostCard} from "./PostCard";
import {PostForReportCard} from "./PostForReportCard";
import axios from "axios";

export function ModeratorPanelReportCard({report}) {

    const reject = async (event) => {
        event.preventDefault()
        await axios.delete('http://localhost:8081/api/moder/reject/'+report.id, {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
    }

    const deletePost = async (event) => {
        event.preventDefault()
        await axios.delete('http://localhost:8081/api/moder/deletePost/'+report.id, {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
    }

    const deleteUser = async (event) => {
        event.preventDefault()
        await axios.delete('http://localhost:8081/api/moder/deleteUser/'+report.id, {
            headers: {
                Authorization: 'Bearer_'+document.cookie
            }
        })
    }

    return (
        <div className="report-card-wrapper">
            <span className="report-card-header">Жалоба от: {report.reporterUsername}</span>
            <PostForReportCard post={report}/>
            <div className="report-card-button-block">
                <button className="decline-button" onClick={reject}>
                    <span>Отклонить</span>
                </button>
                <button className="delete-post-button" onClick={deletePost}>
                    <span>Удалить пост</span>
                </button>
                <button className="ban-user-button" onClick={deleteUser}>
                    <span>В бан!</span>
                </button>
            </div>
        </div>
    )
}