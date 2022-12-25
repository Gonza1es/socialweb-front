import {Header} from "./Header";
import {Search} from "./Search";
import {ContentDelimiter} from "./ContentDelimiter";

export function SearchUser() {
    return(
        <div className="Search">
            <Header/>
            <Search/>
            <ContentDelimiter text={"Найти пользователя"}/>
        </div>
    )
}