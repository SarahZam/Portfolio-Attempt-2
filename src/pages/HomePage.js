import React from 'react';
import Hero from "../components/Hero";
import Carousal from "../components/Carousal";
import AboutPage from "./AboutPage";

function HomePage(props) {
    const typist = true;
    return(

        <div className="bot">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} typist={typist}/>
            <Carousal/>

        </div>

    )
}

export default HomePage;