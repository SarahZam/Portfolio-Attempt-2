import React from "react";
import {Link} from "react-router-dom";

import Cardinfo from "./Cardinfo";

function Card(props) {
    return(

        <div className="d-inline-block z-card" onClick={(e) => props.click(props.item)}>


                <img className="z-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
                { props.item.selected && <Cardinfo title={props.item.title} subTitle={props.item.subTitle} path={props.item.path}/>}


        </div>


    )
}

export default Card;