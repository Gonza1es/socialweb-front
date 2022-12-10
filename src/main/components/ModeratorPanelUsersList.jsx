import {ModeratorPanelUserCard} from './ModeratorPanelUserCard';

export function ModeratorPanelUsersList() {
    return (
        <div className="Moderator-Panel-Users-List">
            {Array(10).fill("").map(item => <ModeratorPanelUserCard/>)}
        </div>
    )
}

