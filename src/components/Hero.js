import React from 'react';
import Jumbotron from "react-bootstrap/cjs/Jumbotron";
import {Container,Row,Col} from "react-bootstrap";
import Typical from 'react-typical';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-3 text-center font-weight-bolder">
                            {props.title}

                        </h1> }
                        { props.subTitle && <h3 className="display-4 text-center border-bottom font-weight-light">{props.subTitle}
                            {props.typist && <Typical
                                className="typistcolor"
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'a Full Stack Developer',
                                    1000,
                                    'a Designer',
                                    1000,
                                    'an Aspiring Software Engineer',
                                    1000
                                ]}
                            />}


                        </h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;