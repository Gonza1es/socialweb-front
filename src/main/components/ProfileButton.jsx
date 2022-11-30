export function ProfileButton(props) {
    return (
        props.personalProfile ?
            <button onClick={props.btnHandler}>Редактировать</button>
                    :
            <button onClick={props.btnHandler}>Кнопка</button>
    )
}