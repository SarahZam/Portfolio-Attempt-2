import React from 'react';
import {Container,Row, Col} from "react-bootstrap";
import Hero from "../components/Hero";

function ExperiencePage(props) {
    return(
        <div>
            <Hero title={props.title}/>
        </div>

    )
}

export default ExperiencePage;