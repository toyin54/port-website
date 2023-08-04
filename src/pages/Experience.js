import React from "react";
import {
    VerticalTimeline ,
    VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import '../styles/Experience.css'

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/WorkHistory";


function Experience() {
    return  (

        <div className="experience ">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                className="vertical-timeline-element-education"
                date="January 2022 - April 2022"
                iconStyle={ {background : "#e9d35b" , color : "#fff"}}
                icon = {< WorkIcon />} >
                    <h3 className="vertical-timeline-element-title">
                        Research Analyst DePaul University
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Chicago , IL
                    </h4>
                    <p>
                    Analyzed large-scale biological sequence data using open-source bioinformatics 
                    software Blastfrost..
                    </p>
                </VerticalTimelineElement> 
                <VerticalTimelineElement
                className="vertical-timeline-element-education"
                date="January 2022- Present"
                iconStyle={ {background : "#3e497a" , color : "#fff"}}
                icon = {< SchoolIcon />} >
                    <h3 className="vertical-timeline-element-title">
                        Depaul University, Chicago , IL.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Masters's Degree
                    </h4>
                    <p>
                     Computer Science
                    </p>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element-education"
                date="September 2021 -October 2021"
                iconStyle={ {background : "#e9d35b" , color : "#fff"}}
                icon = {< WorkIcon />} >
                    <h3 className="vertical-timeline-element-title">
                        Product Analyst , IRestify
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Toronto , Canada
                    </h4>
                    <p>
                    Integrated complex data sources to perform advanced SQL queries & BI reports.

                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element-education"
                date="September 2019 - December 2020"
                iconStyle={ {background : "#e9d35b" , color : "#fff"}}
                icon = {< WorkIcon />} >
                    <h3 className="vertical-timeline-element-title">
                        Project Engineer Telnet Nigeria
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Lagos  , Nigeria
                    </h4>
                    <p>
                    Worked on hardware team in the development of a IoT Energy Management system
                    to be used on il-rigs for remotemonitoring of battery systems.
                    Managed and deplyed facial recognition software(ATCMON) for over bank ATMs
                    Leveraged data-driven insights and data visualization tools to 
                    design and present a proposals for software solutions.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element-education"
                date="2013-2019"
                iconStyle={ {background : "#3e497a" , color : "#fff"}}
                icon = {< SchoolIcon />} >
                    <h3 className="vertical-timeline-element-education">
                        Purdue University, West Lafayette , IN.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>
                    <p>
                     Electrical Engineering
                    </p>

                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}

export default Experience;