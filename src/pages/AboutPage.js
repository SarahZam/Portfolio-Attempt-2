import React from 'react';
import Hero from "../components/Hero";
import Content from "../components/Content";
import Contact from "../components/Contact";

function AboutPage(props) {
    return(
        <div className="bot">
            <Hero title={props.title} />
            <Content>
               I'm an aspiring Full-Stack developer and Software Engineer pursuing a Bachelor of Science degree in Computer Science and Minoring in Digital Media Studies and Psychology at the University of Rochester.
                I am interested in Human-Computer Interaction and Artificial Intelligence and passionate about learning new technology.
                I want to use my programming skills to create unforgettable experiences for people.
                I value innovative, creative, and diverse workspaces. I am someone who will go above and beyond to make sure my team is efficient and achieving the best results it can. <br/>
                <br/>
                I have experience building websites with JavaScript, ReactJS, MongoDB, and Node.js. My primary language is Java, but I have experience working with python as a Research Assistant at my University's HCI lab.
                When I'm not making websites, I love making complex games with amazing graphics for fun.
                <br/>
                <br/>
                I am currently looking for Summer 2021 Internships for Software Engineering position!
                <br/>
                <br/>
                <Contact/>
            </Content>


        </div>
    )
}

export default AboutPage;