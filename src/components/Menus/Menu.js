import React from "react";
import photo from "../../photo/girl.png";
import photo1 from "../../photo/model.jpg";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FcBiotech } from "react-icons/fc";
import { GiFilmProjector } from "react-icons/gi";
import { BsFillPenFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";
import { Link } from "react-scroll";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import "./Menu.css";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>
          <div className="nav-profole-pic">
            <img src={photo1} alt="Protfolio website" />
          </div>
        </Zoom>
        <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
               <Link to="home" smooth={true} offset={-100} duration={100}>
                <FcHome /> Home
               </Link>
              </div>
              <div className="nav-link">
               <Link to="about" smooth={true} offset={-100} duration={100}>
                <FcAbout /> About
               </Link>
              </div>
              <div className="nav-link">
               <Link to="work-exp" smooth={true} offset={-100} duration={100}>
                <VscWorkspaceTrusted /> Work Experince
               </Link>
              </div>
              <div className="nav-link">
               <Link to="techstack" smooth={true} offset={-100} duration={100}>
                <FcBiotech /> Tech Stack
               </Link>
              </div>
              <div className="nav-link">
               <Link to="education" smooth={true} offset={-100} duration={100}>
                <BsFillPenFill /> Education
               </Link>
              </div>
              <div className="nav-link">
               <Link to="project" smooth={true} offset={-100} duration={100}>
                <GiFilmProjector /> Project
               </Link>
              </div>
              <div className="nav-link">
               <Link to="contact" smooth={true} offset={-100} duration={100}>
                <FcContacts /> Contact
               </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <FcHome title="Home" />
            </div>
            <div className="nav-link">
              <FcAbout title="About" />
            </div>
            <div className="nav-link">
              <VscWorkspaceTrusted title="Work Experince" />
            </div>
            <div className="nav-link">
              <FcBiotech title="Tech Stack" />
            </div>
            <div className="nav-link">
              <BsFillPenFill title="Education" />
            </div>
            <div className="nav-link">
              <GiFilmProjector title="Project" />
            </div>
            <div className="nav-link">
              <BsFillPeopleFill title="Testimonil" />
            </div>
            <div className="nav-link">
              <FcContacts title="Contact" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
