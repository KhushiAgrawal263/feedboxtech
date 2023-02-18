import React from "react";
import "./landing.css";
import { Typewriter } from "react-simple-typewriter";
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-scroll";
import whatsApp from "../../image/whatsapp.svg";
import Bubbles from "./Bubbles";

export default function Landing() {
  return (
    <>
      <section className="hero_container" id="hero-home">
        {/* <section className='hero_container' id="hero-home"> */}
            
            <div className="hero_home_video_hld">
                <Link to="contact" spy={true} smooth={true}>
                <div className="hero_home_contact_btn">Contact Us</div></Link>
                <div className="btn-social-icon">
                    <a href="https://www.linkedin.com/company/feedbox-smm/mycompany/" target="_blank"> <span className='linkedin hero_home_social_icon'><ImLinkedin2 size={25} /></span></a>
                    <a href="https://twitter.com/teamfeedBox" target="_blank"> <span className='twitter hero_home_social_icon'><IoLogoTwitter size={25} /></span></a>
                    <a href="https://www.instagram.com/teamfeedbox/" target="_blank"> <span className='instagram hero_home_social_icon'><FaInstagramSquare  size={25} /></span></a>
                    <a href="https://www.facebook.com/feedbox.online" target="_blank"><span className='facebook hero_home_social_icon'><ImFacebook size={25} /></span></a> 
                </div>
                <video src="https://gravityteam.co/wp-content/uploads/2022/07/hero-animation.mp4" className='hero_home_video' muted={true} loop={true} autoPlay={true}></video>
            </div>
            
            <div className="hero_home_content">
                    <Bubbles/>
               
                    <span className='typewriter tw-top' style={{ color: '#fff' }}>Handling</span>
                    <span className='typewriter' style={{ color: '#0090ee', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Web Development', 'App Development']}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={500}
                            />
                    </span>
                    <div className="hero_home_content_desc">
                        <span>Get ahead in this transformative world of online marketing with our full bodied strategies, well defined processes, and deep knowledge of tech!</span >
                    </div>
                    <div className="btn-mobile-new-container">
                        <Link to="contact" spy={true} smooth={true}>
                            <div className="btn-mobile-new">Contact Us</div>
                        </Link>
                    </div>
            </div>
 
            <div className="hero_home_social mobile_view_hero">
               <a href="https://www.linkedin.com/company/feedbox-smm/mycompany/" target="_blank"> <span className='linkedin hero_home_social_icon'><ImLinkedin2 size={25} /></span></a>
               <a href="https://twitter.com/teamfeedBox" target="_blank"> <span className='twitter hero_home_social_icon'><IoLogoTwitter size={25} /></span></a>
               <a href="https://www.instagram.com/teamfeedbox/" target="_blank"> <span className='instagram hero_home_social_icon'><FaInstagramSquare  size={25} /></span></a>
               <a href="https://www.facebook.com/feedbox.online" target="_blank"><span className='facebook hero_home_social_icon'><ImFacebook size={25} /></span></a> 
            </div>
        

      {/* </section> */}
      </section>
    </>
  );
}
