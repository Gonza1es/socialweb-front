import {ModeratorPanelReportCard} from './ModeratorPanelReportCard';


export function ModeratorPanelReportsList() {
    return (
        <div className="Moderator-Panel-Reports-List">
            {Array(10).fill("").map(item => <ModeratorPanelReportCard/>)}
        </div>
    )
}