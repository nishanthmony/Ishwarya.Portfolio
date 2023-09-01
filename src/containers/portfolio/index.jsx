import React, { useState } from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/image1.jpg'
import ImageTwo from '../../images/image2.jpg'
import ImageThree from '../../images/image3.jpg'
import ImageFour from '../../images/image4.jpg'
import ImageFive from '../../images/image5.jpg'
import './styles.scss'
const portfolioData=[
    {
        id : 2,
        name: "Child Tracking Device using  IOT",
        image: ImageOne,
        link:''
        
    },
    {
        id : 2,
        name: "Shoplaza-Ecommerce Website",
        image: ImageTwo,
        link:''
        
    },
    {
        id : 2,
        name: "Portfolio using ReactJS",
        image: ImageThree,
       link:''
    },
    {
        id : 2,
        name: "Writers Stop-Ecommerce app",
        image:ImageFour,
        link:''
       
    },
    {
        id : 3,
        name: "PlantDisease Detection",
        image:ImageFive,
        link:''
        
    },
]

const filterData =[
    {
        filterId:1 ,
        label : 'All'
    },
    {
        filterId:2 ,
        label : 'Completed'
    },
    {
        filterId:3 ,
        label : 'Currently Doing'
    },
]

const Portfolio=() => {
    const [filteredvalue,setFilteredValue]= useState(1)
    const [hoveredValue,setHoveredValue] = useState(null)
    function handleFilter(currentId){
        setFilteredValue(currentId)
    };

    function handleHover(index){
        setHoveredValue(index)
    }

    console.log('===========================')
    console.log(filteredvalue)
    console.log('=====================')

    const filteredItems = filteredvalue===1 ? portfolioData:
    portfolioData.filter(item=>item.id===filteredvalue)

    console.log(filteredItems);
    return(
        <section id="portfolio" className="portfolio">
        <PageHeaderContent
        headerText = "My Portfolio"
        icon={<BsInfoCircleFill size={40}/>}
        
        />
        <div className="portfolio__content">

            <ul className="portfolio__content__filter">
                {
                    filterData.map(item =>(
                        <li className={item.filterId === filteredvalue ? 'active' : ''}onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                            {
                                item.label
                            }
                        </li>
                    ))
                }
            </ul>
            <div className="portfolio__content__cards">
                {
                    filteredItems.map((item,index)=>(
                        <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                        onMouseEnter={()=> handleHover(index)}
                        onMouseLeave={()=>handleHover(null)}>
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <a href="https://elaborate-paprenjak-ace803.netlify.app">
                                    <img alt="dummy data" src={item.image}/>
                                </a>
                                 </div>
                                 <div className="overlay">
                                        {
                                            index===hoveredValue && (
                                                <div>
                                                    <p>{item.name}</p>
                                                    <button>Visit</button>
                                                </div>
                                            )
                                        }
                                 </div>
                             </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}
export default Portfolio;