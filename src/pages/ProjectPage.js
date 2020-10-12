import React from 'react';
import Hero from "../components/Hero";
import ProjectCarousal from "../components/ProjectCarousal";

function ProjectPage(props) {
    return(
        <div className="mb-5 pb-5">
            <Hero className="border-bottom" title={props.title}/>
            <ProjectCarousal/>
        </div>
    )
}

export default ProjectPage;