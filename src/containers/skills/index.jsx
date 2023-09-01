import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import {Animate,AnimateKeyframes} from 'react-simple-animate';
import { Line } from "rc-progress";
import './styles.scss'

export const skillsData=[
    {
    label: "WEBTECHNOLOGIES",
    data: [
        {
            skillName: "HTML",
            percentage : "90",
        },
        {
            skillName: "CSS",
            percentage : "60",
        },
        {
            skillName: "JAVASCRIPT",
            percentage : "70",
        },

    ],
},
{
    label: "PROGRAMMINGLANGUAGES",
    data:[
        {
            skillName : "PYTHON",
            percentage: "95",
        },
        {
            skillName : "JAVA",
            percentage: "65",
        },
        {
            skillName : "C",
            percentage: "50",
        },
    ],
},
{
    label: "DATABASES",
    data : [
        {
            skillName: "MYSQL",
            percentage :"70",
        },

    ],
},
{
    label: "OTHER SKILLS",
    data:[
        {
            skillName: "MICROSOFT365",
            percentage: "85",
        },
        {
            skillName:"UI/UX DESIGN",
            percentage:"50",
        },
        {
            skillName: "GIT",
            percentage: "80",
        }
    ]
}
]
const Skills=() => {
    return(
        <section id="skills" className="skills">
        <PageHeaderContent
        headerText = "My Skills"
        icon={<BsInfoCircleFill size={40}/>}
        
        />
        <div className="skills__content-wrapper">{
            skillsData.map((item,i)=>(
                <div key={i} className="skills__content-wrapper__inner-content">
                    <Animate
                    play
                    duration={1}
                    delay={0.3}
                    start={{
                        transform:'translateX(-200px)'
                    }}
                    end={{
                        transform:'translateX(0px)'
                    }}
                    >
                        <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                        <div className="skills__content-wrapper__inner-content__progressbar-container">
                            {
                                item.data.map((skillItem,j)=>(
                                    <AnimateKeyframes
                                    play
                                    duration={1}
                                    keyframes={["opacity:1","opacity:0"]}
                                    iterationCount={1}
                                    >
                                        <div className="progressbar-wrapper" key={j}>
                                            <p>{skillItem.skillName}</p>
                                            <Line
                                            percent = {skillItem.percentage}
                                            strokeWidth="2"
                                            strokeColor="var(--blue-theme-main-color)"
                                            trailWidth={"2"}
                                            strokeLinecap="square"
                                            />
                                
                                        </div>
                                        </AnimateKeyframes>
                                    
                                ))
                            }
                        </div>
                    </Animate>

                </div>
                
            ))
        }
            
        </div>

    </section>
    )
}
export default Skills;