import '../styles/Avatar.css'
import {useState} from "react";


export function Avatar(props) {

    // const [networkStatus, setNetworkStatus] = useState(false);
    const online = true;
    // function handleNetworkStatus() {
    //     setNetworkStatus(online);
    //     // if (online) {
    //     //     setNetworkStatus(true);
    //     // }
    //     // else {
    //     //     setNetworkStatus(false)
    //     // }
    // }


    return (
        <div className="avatar">
            <svg className="img">
                <mask id="circle" style={props.showStatus? {}: {display: "none"}}>
                    <circle fill="white" cx="80" cy="84" r="87.7"></circle>
                    <circle fill="black" cx="85.7%" cy="87%" r="11"></circle>
                </mask>
                <g mask={props.showStatus? "url(#circle)" : "none"}>
                    <image x="0" y="0" height="100%"
                           preserveAspectRatio="xMidYMid slice"
                           width="100%"
                           xlinkHref={props.avatar}>
                    </image>
                </g>
            </svg>
            <span className="badge"
                  style={online ?
                        {backgroundColor: '#BFCC58'} : {backgroundColor: 'red'}}>
            </span>
        </div>
    )
}