import React, {Component} from "react";
import {Container,Row,Col} from "react-bootstrap";

import GameProject from "./GameProjects";
import WebProjects from "./WebProjects";
import MoreProjects from "./MoreProjects";

function ProjectCarousal() {

    return(
        <Container fluid={true}>

            <Row>
                <h1 className="ml-auto mr-auto mb-5 typistcolor">Web Development Projects</h1>
                <WebProjects className="pb-5 mb-5 ty"/>
                <h1 className="ml-auto mr-auto mb-5 mt-5 typistcolor" >Game Projects</h1>
                <GameProject/>
                <h1 className="ml-auto mr-auto mb-5 mt-5 typistcolor"> More Projects! </h1>
                <MoreProjects/>
            </Row>

        </Container>

    )

}

export default ProjectCarousal;