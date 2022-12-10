import '../styles/ProfileEditor.css';
import {ProfileEditButton} from "./ProfileEditButton";
import {useRef, useState} from "react";
import axios from "axios";

/**
 * @description Модальное окно редактирования данных о пользователе
 * @returns {JSX.Element}
 * @constructor
 */
export function ProfileEditor() {

    const urlEdit = 'http://localhost:8081/api/profile/editProfile'
    const [alias, setAlias] = useState('')
    const [status, setStatus] = useState('')
    const avatarRef = useRef(null)
    const coverRef = useRef(null)

    const submitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('alias', alias)
        formData.append('status', status)
        formData.append('avatar', avatarRef.current.files[0])
        formData.append('cover', coverRef.current.files[0])

        await axios.post(urlEdit, formData, {
            headers: {
                'Authorization': 'Bearer_' + document.cookie,
                'Content-Type'  : 'multipart/form-data'
            }
        })
    }
    return (
        <div className="profile-editor-modal">

            <div className="profile-editor">

                <form className="profile-editor-form">
                    <h2>Редактирование информации о пользователе</h2>
                    <span>Псевдоним</span>
                    <input type="text"
                           value={alias}
                           onChange={(event) => setAlias(event.target.value)}
                    />
                    <span>Статус</span>
                    <input type="text"
                           value={status}
                           onChange={(event) => setStatus(event.target.value)}
                    />
                    <span>Фото профиля</span>
                    <input type="file" accept="image/*" ref={avatarRef}/>
                    <span>Обложка профиля</span>
                    <input type="file" accept="image/*" ref={coverRef}/>
                </form>

                <div className="profile-editor-button-wrapper">
                    <button className="edit-button" onClick={submitHandler}>
                        <span className="button-text">Редактировать</span>
                    </button>
                </div>

            </div>
        </div>
    )
}