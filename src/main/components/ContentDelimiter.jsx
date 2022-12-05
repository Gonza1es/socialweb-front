import '../styles/ContentDelimiter.css';

/**
 * @description Разделитель контента
 * @param {string} props.text текст, отображаемый над линией разделителя
 * @returns {JSX.Element}
 * @constructor
 */
export function ContentDelimiter(props) {
    return (
        <div className="content-delimiter-wrapper">
            <span className="delimiter-text">{props.text}</span>
            <svg className="delimiter-line-image">
                <line className="delimiter-line" x1="0" y1="0" x2="100%" y2="0"/>
            </svg>
        </div>
    )
}