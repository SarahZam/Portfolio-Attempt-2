import React from 'react';
import Hero from "../components/Hero";
import Carousal from "../components/Carousal";

function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousal/>
        </div>

    )
}

export default HomePage;