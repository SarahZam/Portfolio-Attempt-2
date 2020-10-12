import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

function Footer() {
    return(
        <footer className="mt-5 fixed-bottom bg-light" >
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                       Follow Me <br/>
                       <div className="btn-group-sm">
                           <a className="btn-sm btn-info mr-1" href="https://github.com/SarahZam"><i className="fa fa-github"></i></a>
                           <a className="btn-sm btn-info mr-1" href="https://www.linkedin.com/in/sarah-zaman/"><i className="fa fa-linkedin"></i></a>
                           <a className="btn-sm btn-info mr-1" href="https://www.facebook.com/sarahzamann/"><i className="fa fa-facebook"></i></a>
                       </div>

                    </Col>
                    <Col className="p-0 d-flex justify-content-end mt-1" md={3}>
                        This site is made by Sarah Zaman
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;