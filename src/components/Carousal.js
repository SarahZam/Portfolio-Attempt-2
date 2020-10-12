import React, {Component} from "react";
import propic from '../assets/images/propic.jpg';
import projectpic from '../assets/images/git.png';
import exppic from '../assets/images/exppic.png';
import {Container,Row,Col} from "react-bootstrap";

import Card from "./Card";
class Carousal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Projects',
                    subTitle: 'Check out my Projects',
                    imgSrc: projectpic,
                    path: '/projects',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Sarah Zaman',
                    subTitle: 'Get to know me a little better',
                    imgSrc: propic,
                    path: '/about',
                    selected: false
                },
                {
                    id: 2,
                    title: 'My Experience',
                    subTitle: 'Catch a glimpse of what I\'ll bring to your team',
                    imgSrc: exppic,
                    path:'/experience',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id}/>
        })
    }

    render() {
        return(
           <Container fluid={true}>
               <Row className="justify-content-around">
                   {this.makeItems(this.state.items)}
               </Row>
           </Container>
        )
    }

}

export default Carousal;