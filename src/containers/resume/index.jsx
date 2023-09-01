import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import './styles.scss'
import {MdWork} from 'react-icons/md';

export const data={
    education:[
        {
            title : "M.E(ComputerScience and Engineering)",
            subTitle: "SSN College Of Engineering",
            description:"CGPA:9.34",
            description1:"2022 - Present"
        },
        {
            title : "B.E(CmputerScience and Engineering)",
            subTitle: "St.Joseph's College Of Engineering",
            description:"CGPA:9.26",
            description1:"2018 - 2022"
        },
        {
            title : "12th Grade",
            subTitle: "Sacred Heart Matriculation Higher Secondary School,ChurchPark",
            description:"Percentage:93.58",
            description1:"2016 - 2018"
        },
        {
            title : "10th Grade",
            subTitle: "St.William's Anglo Indian High School",
            description:"Percentage:98.80",
            description1:"2015 - 2016"
        },
    ],
    internships:[
        {
            title : "DataScience Intern",
            subTitle: "HCL, Shollinganallur",
            description:"Worked on realtime datasets and explored how to analyze and visualize real-time data",
            description1:"July 24,2023-August 24,2023"
        },
        {
            title : "WebDeveloper",
            subTitle: "Exposys Datalabs, Banglore(Remote)",
            description:"Developed an e-commerce website using HTML,CSS,Javascript",
            description1: "May 6,2021-June 6,2021"
        },


        
    ],
 
    achievement:[
        {
            title : "District First in SSLC Examination",
            description1:"March 2016"
        },
        {
            title : "World Record Certification on World Biggest International Hands-On IOT And Ethical Hacking Workshop",
            description1:"January 2020"
        },
        {
            title : "Won First Prize in Innovative Ideathon Event-National Level Technical Symposium held at Manakula Vinakayar Institute of Technology,Puducherry",
            description1:"March 2022"
            
        },
        {
            title : "Won second prize in SSN hackle and Tackle 4.0",
            description1:"March 2022"
           
        },
       
    ],
}
const Resume=() => {
    return(
        <section id="resume" className="resume">
        <PageHeaderContent
        headerText = "My Resume"
        icon={<BsInfoCircleFill size={40}/>}
        
        />
        <div className="timeline">
            <div className="timeline__education">
                <h3 className="timeline__education__header-text">Education</h3>
                <VerticalTimeline
                layout={'1-column'}
                lineColor="var(--blue-theme-main-color)"
                >
                    {
                        data.education.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__education__vertical-timeline-element"
                            contentStyle={{
                                background:'none',
                                color:'var(--blue-theme-sub-text-color)',
                                border:'1.5px  solid var(--blue-theme-main-color)'
                            }}
                            icon={<MdWork/>}
                            iconStyle={{
                                background:'#181818',
                                color:'var(--blue-theme-main-color)'

                            }}
                            >

                                
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    
                                    

                                   
                                </div>
                                <h4 className="vertical-timeline-element-title-wrapper-head">
                                    {item.subTitle}
                                    </h4>
                                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                                <p className="vertical-timeline-element-title-wrapper-description1">{item.description1}</p>
                            </VerticalTimelineElement>
                        ))
                    }
                    
                </VerticalTimeline>
            </div>
            
            <div className="timeline__achievement">
            <h3 className="timeline__achievement__header-text">Achievements</h3>
            <VerticalTimeline
                layout={'1-column'}
                lineColor="var(--blue-theme-main-color)"
                >
                    {
                        data.achievement.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__achievement__vertical-timeline-element"
                            contentStyle={{
                                background:'none',
                                color:'var(--blue-theme-sub-text-color)',
                                border:'1.5px  solid var(--blue-theme-main-color)'
                            }}
                            icon={<MdWork/>}
                            iconStyle={{
                                background:'#181818',
                                color:'var(--blue-theme-main-color)'

                            }}>
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description1">{item.description1}</p>
                            </VerticalTimelineElement>
                        ))
                    }
                    
                </VerticalTimeline>
            </div>
            <div className="timeline__internships">
            <h3 className="timeline__internships__header-text">Internships</h3>
            <VerticalTimeline
                layout={'1-column'}
                lineColor="var(--blue-theme-main-color)"
                >
                    {
                        data.internships.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__internship__vertical-timeline-element"
                            contentStyle={{
                                background:'none',
                                color:'var(--blue-theme-sub-text-color)',
                                border:'1.5px  solid var(--blue-theme-main-color)'
                            }}
                            icon={<MdWork/>}
                            iconStyle={{
                                background:'#181818',
                                color:'var(--blue-theme-main-color)'

                            }}>
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 >
                                        {item.title}
                                    </h3>

                                  

                                </div>
                                <h4 className="vertical-timeline-element-title-wrapper-head">
                                            {item.subTitle}
                                    </h4>
                                <p className="vertical-timeline-element-title-wrapper-description"> {item.description}</p>
                                    <p className="vertical-timeline-element-title-wrapper-description1">{item.description1}</p>
                            </VerticalTimelineElement>
                        ))
                    }
                    
                </VerticalTimeline>
            </div>
        </div>
    </section>
    )
}
export default Resume;