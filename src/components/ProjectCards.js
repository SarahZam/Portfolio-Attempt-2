import React from "react";
import Card from "react-bootstrap/Card";


function ProjectCards(props) {

    return(
        <Card className="text-center card-size d-inline-block overflow-auto">
            <div className="">
                <img className="cis" src={props.game.img} alt/>
            </div>

            <Card.Body>
                <Card.Title>
                    {props.game.title}
                </Card.Title>
                {props.game.language && <Card.Text> {props.game.language}</Card.Text>}
                <Card.Text className="text-secondary">
                    {props.game.description}
                </Card.Text>
                {props.game.link &&  <a href={props.game.link}>Check it out!</a>}
            </Card.Body>
        </Card>
    )
}

export default ProjectCards;