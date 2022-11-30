import '../styles/avatar.css'

export function Avatar(props) {
    return (
        <div className="avatar">
            <svg className="img">
                <mask id="circle">
                    <circle fill="white" cx="80" cy="84" r="87.7"></circle>
                    <circle fill="black" cx="85.7%" cy="87%" r="11"></circle>
                </mask>
                <g mask="url(#circle)">
                    <image x="0" y="0" height="100%"
                           preserveAspectRatio="xMidYMid slice"
                           width="100%"
                           xlinkHref={props.avatar}>
                    </image>
                </g>
            </svg>
            <span className="badge"
                  style={props.online ?
                        {backgroundColor: '#BFCC58'} : {backgroundColor: 'red'}}>
            </span>
        </div>
    )
}