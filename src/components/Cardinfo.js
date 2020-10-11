import React from "react";
import {useSpring, animated} from "react-spring";
import {Link} from "react-router-dom";

function Cardinfo(props){

    const style  = useSpring({opacity: 1, from:{opacity: 0}});

    return(
        <animated.div className="z-card-info" style={style}>
            <p className="z-card-title">{props.title}</p>
            <p className="z-card-subtitle">{props.subTitle}</p>
            <Link className="nav-link p-0" to={props.path}>
            View
            </Link>
        </animated.div>
    )

}
export default Cardinfo;