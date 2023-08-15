import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../components/assets/Docs/resume.text"
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h1>Hi I am a</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Mern Stack Devloper !", "or A Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-button">
           <button className="btn btn-hire">Hire me </button>
           <a className="btn btn-cv" href={Resume} download="Mohd Shahzil">My Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
