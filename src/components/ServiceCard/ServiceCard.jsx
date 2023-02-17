import React, { useEffect } from "react";
import './ServiceCard.css'
import Vector from '../../image/s-vector.png'
import g_shadow from '../../image/g-shadow.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import service from '../ServiceFullPage/ServicesFullPage'
import { Link } from "react-router-dom";
import Atropos from 'atropos/react';
import 'atropos/css'

export default function ({ aos,icon, desc, title, linkTo }) {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 100,
    //         // offset: -250
    //     })
    // },[])
    return (
        <div data-aos={aos} className="serviceCard">
            <div className="card_vector">
                <img src={icon} alt="" />
            </div>
            {/* <div className="shadow"><img src={g_shadow} alt="" /></div> */}

           <Atropos>
            <div className="card_content">

                <h1>
                    {title}
                </h1>
                <p>
                    {desc}
                </p>


                <Link to={linkTo} state={{swipe:"Swipeleft"}} className="sc_btn">
                        View More
                
                </Link>
            </div>
            </Atropos>
            {/* <div className="sc-btn">
                <a href="#"><AiOutlineArrowRight color={"white"} size={20}/></a>
                </div> */}

        </div>
    )
}