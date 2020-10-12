import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function ExperienceSection(props) {

    const makeDes = (description) => {
        return description.map(des => {
            return <div des={des}  >
                <ul>
                    <li>{des}</li>
                </ul>
            </div>
        })
    }

    return(
        <Container className="pb-5">
            <Row>
                <Col md={12}>
                    <h3 className="typistcolor border-bottom">{props.exp.company}</h3>
                </Col>
            </Row>
            <Row>
                <Col md={8} sm={12}>
                   <h4 className="mt-2">{props.exp.jobtitle}</h4>
                </Col>
                <Col md={4} sm={12}>
                    <h5 className="text-md-right">{props.exp.date}</h5>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col md={9}>
                    {makeDes(props.exp.description)}
                </Col>
            </Row>
        </Container>
    )
}

export default ExperienceSection;