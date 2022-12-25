import {ModeratorPanelReportCard} from './ModeratorPanelReportCard';
import axios from "axios";
import {useEffect, useState} from "react";


export function ModeratorPanelReportsList() {
    const [reports, setReports] = useState([])

    const fetchReports = async () => {
        const response = await axios.get("http://localhost:8081/api/moder/reportList", {
            headers: {
                Authorization: 'Bearer_' + document.cookie
            }
        })
        setReports(response.data)
    }

    useEffect(() => {
        fetchReports()
    },[])
    return (
        <div className="Moderator-Panel-Reports-List">
            {reports.map(item => <ModeratorPanelReportCard report={item}/>)}
        </div>
    )
}