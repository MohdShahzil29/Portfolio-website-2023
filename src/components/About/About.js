import React from 'react'
import "./about.css"
import Img2 from "../../photo/model.jpg"
import Wobble from 'react-reveal/Wobble';
const About = () => {
  return (
    <>
    <Wobble>
    <div className="about" id='about'>
        <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img src={Img2} alt="Mohd Shahzil" />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
          <h1>About me</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea cumque, dolores ad sint nam nostrum facere officia tenetur, excepturi ipsa. Rem amet debitis excepturi, numquam quod doloribus et cumque quibusdam dolor facilis nobis inventore animi ipsam placeat consequuntur, eaque explicabo nulla sint suscipit dolore sit vero. Officia obcaecati eum dolore magni nesciunt et, aperiam a adipisci, ipsa assumenda ex natus vero beatae ullam? Quasi eum iste voluptatum dolore officiis vitae laboriosam ex, incidunt ullam temporibus consequatur, adipisci tempora commodi aperiam veritatis exercitationem id expedita repudiandae non quibusdam esse. Nulla odio, dolorum delectus temporibus aliquam repudiandae? </p>
        </div>
        </div>
    </div>
    </Wobble>
    </>
  )
}

export default About