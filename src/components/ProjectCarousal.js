import React, {Component} from "react";
import {Container,Row,Col} from "react-bootstrap";
import GameProject from "./GameProjects";
import WebProjects from "./WebProjects";

function ProjectCarousal() {

    return(
        <Container fluid={true}>

            <Row>
                <h1 className="border-bottom offset-1 mb-4">Web Development Projects</h1>
                <WebProjects/>
                <h1 className="border-bottom offset-1 mb-4" >Game Projects</h1>
                <GameProject/>
            </Row>

        </Container>

    )

}

export default ProjectCarousal;