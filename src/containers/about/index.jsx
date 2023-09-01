import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs'
import {Animate} from 'react-simple-animate';
import {DiApple,DiAndroid} from 'react-icons/di'
import {FaDev,FaDatabase} from 'react-icons/fa'

import './styles.scss';
const personalDetails=[
    {
        label: "Name",
        value: "Ishwarya B"
    },
    {
        label: "Date Of Birth",
        value: "17/08/2000"
    },
    {
        label: "Address",
        value: " Chennai"
    },
    {
        label: "Nationality",
        value: " India"
    },
    {
        label: "Email",
        value: "abc@gmail.com"
    },
    {
        label: "PhoneNumber",
        value: "1234567890"
    },
    {
        label: "Father's Name",
        value: "J.Balaji"
    },
    {
        label: "Mother's Name",
        value: "B.Krishna Kumari"
    },
    {
        label: "Hobbies",
        value: "Painting,Singing,Gardening"
    },
    {
        label: "Languages Known",
        value: "Tamil,English"
    },
]

const jobSummary = 'Contribute to the success and growth of the organisation being positive catalyst and essential ingredient in growth process by using innovative acumen and technical expertise- in pursuit of excellence.'


const About=() => {
    return(
        <section id="about" className="about">
            <PageHeaderContent
            headerText = "About Me"
            icon={<BsInfoCircleFill size={40}/>}
            
            />
            <div className="about__content" >
            <div className="about__content__personalWrapper">
            <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                    transform:'translateX(-900px)'
                }}
                end={
                    {
                        transform:'translatex(0px)'
                    }
                }
                >
                <h3>Software Engineer</h3>
                <p>{jobSummary}</p>
                </Animate>

                <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                    transform:'translateX(500px)'
                }}
                end={
                    {
                        transform:'translatex(0px)'
                    }
                }
                >
                <h3 className="personalInformationHeaderText">Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
                </Animate>
            </div>
            <div className="about__content__servicesWrapper">
            <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                    transform:'translateX(600px)'
                }}
                end={
                    {
                        transform:'translatex(0px)'
                    }
                }
                >
                <div className="about__content__servicesWrapper__innerContent">
                <div><FaDev size={60} color="var(--blue-theme-main-color)"/></div>
                    <div><DiAndroid size={60} color="var(--blue-theme-main-color)"/></div>
                    <div><FaDatabase size={60} color="var(--blue-theme-main-color)"/></div>
                    <div><DiApple size={60} color="var(--blue-theme-main-color)"/></div>
                </div>
                 </Animate>   
            
            </div>
            </div>

        </section>
    )
}
export default About;
