import React from "react";
import Card from "react-bootstrap/Card";


function ProjectCards(props) {

    return(
        <Card className="text-center card-size d-inline-block">
            <div className="overflow-hidden">
                <img className="cis" src={props.game.img} alt/>
            </div>

            <Card.Body>
                <Card.Title>
                    {props.game.title}
                </Card.Title>
                <Card.Text className="text-secondary">
                    {props.game.description}
                </Card.Text>
                {props.game.link &&  <a href={props.game.link}>Check it out!</a>}
            </Card.Body>
        </Card>
    )
}

export default ProjectCards;