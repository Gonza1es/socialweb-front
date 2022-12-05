import '../styles/ContentDelimiter.css';

export function ContentDelimiter(props) {
    return (
        <div className="content-delimiter-wrapper">
            <span className="delimiter-text">{props.delimiterText}</span>
            <svg className="delimiter-line-image">
                <line className="delimiter-line" x1="0" y1="0" x2="100%" y2="0"/>
            </svg>
        </div>
    )
}