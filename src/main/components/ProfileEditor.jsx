import '../styles/ProfileEditor.css';
import {ProfileEditButton} from "./ProfileEditButton";

/**
 * @description Модальное окно редактирования данных о пользователе
 * @returns {JSX.Element}
 * @constructor
 */
export function ProfileEditor() {
    return (
        <div className="profile-editor-modal">
            <div className="profile-editor">
                <form className="profile-editor-form">
                    <h2>Редактирование информации о пользователе</h2>
                    <span>Псевдоним</span>
                    <input type="text"/>
                    <span>Статус</span>
                    <input type="text"/>
                    <span>Фото профиля</span>
                    <input type="file" accept="image/*"/>
                    <span>Обложка профиля</span>
                    <input type="file" accept="image/*"/>
                </form>
                <div className="profile-editor-button-wrapper">
                    <ProfileEditButton/>
                </div>
            </div>
        </div>
    )
}