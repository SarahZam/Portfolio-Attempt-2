import React from "react";
import ProjectCards from "./ProjectCards";
import Carousel from "react-elastic-carousel";
import cat from '../assets/images/cat.jpg';
import rmdb from '../assets/images/rmdb.png';
import prank from '../assets/images/prank.png';
import uofr from '../assets/images/uofr.jpg';

const projects = [
    {
        id: 0,
        title: 'Cognitive Assessment Test',
        img: cat,
        language: 'IOS development, Swift',
        description: 'App I created that assesses cognitive response of a user.',
        link: 'https://github.com/SarahZam/Cognitive-Assessment-Test'
    },
    {
        id: 1,
        title: 'Relational Data Model Project',
        language: 'C',
        img: rmdb,
        description: 'Created an effective database system for a school using Relational Algebra operands'
    },
    {
        id: 2,
        title: 'Image Prank',
        language: 'chrome extension, javascript',
        img: prank,
        description: 'Prank your friends by changing all images on their browser to a prank image.',
        link: 'https://github.com/SarahZam/ImageReplacer'
    },
    {
        id: 3,
        title: 'School GPS',
        language: 'Java',
        img: uofr,
        description: 'DijkstraÕs algorithm to calculate the shortest path from one point to another in University of Rochester',
        link: 'https://github.com/SarahZam/School-Map-With-Djikstra'
    }
]

function MoreProjects() {
    const makeProjects = (projects) => {
        return projects.map(project => {
            return <ProjectCards game={project} key={project.id} />
        })
    }

    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4}
    ];

    return(
        <Carousel className="" breakPoints={breakPoints}>
            {makeProjects(projects)}
        </Carousel>
    )

}

export default MoreProjects;