import React from "react";
import yolo from "../assets/images/exppic.png";
import csug from '../assets/images/csug.png';
import rtc from '../assets/images/rtc.png';
import conFusion from '../assets/images/confusion.png';
import khichuri from '../assets/images/khichuri.jpg';
import pipboy from '../assets/images/pipboy.png';
import ProjectCards from "./ProjectCards";
import Carousel from "react-elastic-carousel";

const webs = [
    {
        id: 0,
        title: 'Yolo Shadow',
        img: yolo,
        language: 'ReactJS, Figma, Node.js, MongoDB',
        description: 'Website I made as a Software Engineer Intern for Yolo Shadow',
        link: 'http://yoloshadow.com/'
    },
    {
        id: 1,
        title: 'CSUG Website',
        language: 'ReactJS',
        img: csug,
        description: 'Website I am currently making for my University\'s Computer Science Undergraduate Council'
    },
    {
        id: 2,
        title: 'RTC Referral Portal',
        language: 'ReactJS, Figma, JavaScript, HTML, CSS',
        img: rtc,
        description: 'Making the frontend of a Referral Portal for members of Women of Rewriting the Code that authenticates the user accessing it'
    },
    {
        id: 3,
        title: 'ConFusion',
        language: 'ReactJS, Node.js, Express, MongoDB',
        img: conFusion,
        description: 'Made a demo restaurant website to practice reactJS. First Full-Stack project!',
        link: 'Coming Soon'
    },
    {
        id: 4,
        title: 'Khichuri',
        language: 'Flask, Jinja2, HTML, CSS, Bootstrap',
        img: khichuri,
        description: 'Decorated a website to look like pipboy\'s after teaching myself basics of bootstrap',
        link:'Coming soon'
    },
    {
        id: 5,
        title: 'Pipboy',
        language: 'HTML, CSS, Bootstrap',
        img: pipboy,
        description: 'Decorated a website to look like pipboy\'s after teaching myself basics of bootstrap',
        link:'Coming soon'
    }
]

function WebProjects() {

    const makeWebs = (webs) => {
        return webs.map(web => {
            return <ProjectCards game={web} key={web.id} />
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
            {makeWebs(webs)}
        </Carousel>
    )

}

export default WebProjects;