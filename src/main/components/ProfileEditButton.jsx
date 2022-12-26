import '../styles/ProfileEditButton.css';

/**
 * @description Кнопка редактирования профиля
 * @returns {JSX.Element}
 * @constructor
 */
export function ProfileEditButton() {

    function popUpSelf() {
        const editorWindow = document.getElementsByClassName('profile-editor-modal')[0];
        window.onclick = (event) => {
            if (event.target == editorWindow) {
                editorWindow.style.display = 'none';
            }
        };
        editorWindow.style.display = 'flex';
    }

    return (
        <div className="edit-button-wrapper">
            <button className="edit-button" onClick={popUpSelf}>
                <span className="button-text h2">Редактировать</span>
            </button>
        </div>
    )
}
