import React from 'react';
import {Container,Row, Col} from "react-bootstrap";

function Content(props) {
    return(
        <Container fluid={true}>
            <Row>
                <Col>
                    {props.children()}
                </Col>
            </Row>
        </Container>
    )
}