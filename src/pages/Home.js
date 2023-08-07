import React from "react";

import LinkedIcon from '@mui/icons-material/LinkedIn'
import  EmailIcon  from "@mui/icons-material/Email";
import GithubIcon from '@mui/icons-material/GitHub';

import '../styles/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hello, My Name is Ayyub Jose</h2>
                <div className="prompt">
                    <p>
                        I am a current DePaul Computer Science Graduate Student 
                        with a desire to learn and create</p>
                    <LinkedIcon />
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <ol className="list">
                        <li className="item">
                            <h2>
                                Front-End
                            </h2>
                            <span>
                                ReactJs ,  CSS , HTML
                            </span>
                        </li>
                        <li className="item">
                            <h2> Back-End </h2>
                            <span>
                                Java Spring , NodeJs , MySQL ,
                                PostgreSQL   
                            </span>
                        </li>
                        <li className="item">
                            <h2> Languages </h2>
                            <span>
                                Java , JavaScript ,
                                Python , C  
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
    )
}

export default Home;

// My Name is Ayyub Jose, I am a MSc in Computer Science Student 
// at Depaul University and I graduated with a Bachelors degree in Electrical Engineering from Purdue University. 
// I am an SoftWare Engineer and this website is to display the projects
// I have worked on displaying the skills I have learned. 
// I have a good foundation in I have gained a strong foundation in software development, 
// including experience with programming languages such as Java, JavaScript and C/C++ . 
// This Portfolio display my projects in Java, utilizing frameworks such as springboot , JS games and Python and SQL Data Analysis Projects