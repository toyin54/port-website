import React from "react";
import ProjectItem from "../components/ProjectItem";
import '../styles/Projects.css'

import Image1 from '../assets/machine.jpg'
import Image2 from '../assets/regress.png'
import Image3 from '../assets/explore.jpg'



function Projects() {
    return (
        <div className="projects">
            <h1> My Personal Projects </h1>
            <div  className="projectList">
                <ProjectItem  name = "Student Management SpringBoot Application" 
                image = {Image1}/>
                <ProjectItem  name = "PacMan In JS" image = {Image2}/>
               
    
            </div>
        </div>
    )
}

export default Projects