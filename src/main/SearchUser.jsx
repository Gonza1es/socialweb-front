import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {ContentDelimiter} from "./components/ContentDelimiter";
import './styles/SearchUser.css'

export function SearchUser() {
    return(
        <div className="Search">
            <Header/>
            <Search/>
            <ContentDelimiter text={"Найти пользователя"}/>
        </div>
    )
}