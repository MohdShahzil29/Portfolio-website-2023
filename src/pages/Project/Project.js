import React from "react";
import "./style.css";
import projectImg1 from "../../photo/Project-image1.png";
import Rotate from "react-reveal/Rotate";

const Project = () => {
  return (
    <>
      <Rotate>
        <div className="container project" id="project">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Explore My Project
          </h2>
          <hr />
          <p className="pb-3 text-center">
            😎"Embark on a Journey Through My Projects 🚀 Discover a selection
            of my work, complete with live links and source code."
          </p>
          {/* card design */}
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notigy-badge">Full Stack</span>
                  <img src={projectImg1} alt="Project" />

                  <div className="card-image-overly mt-3">
                    <span className="card-detail-badge"> React js </span>
                    <span className="card-detail-badge">React Redux</span>
                  </div>
                  <div className="card-body">
                    <div className="ad-title">
                      <h5 className="text-uppercase">MovieX Website Project</h5>
                    </div>
                    <a className="ad-btn" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notigy-badge">Full Stack</span>
                  <img src={projectImg1} alt="Project" />

                  <div className="card-image-overly mt-3">
                    <span className="card-detail-badge"> React js </span>
                    <span className="card-detail-badge">React Redux</span>
                  </div>
                  <div className="card-body">
                    <div className="ad-title">
                      <h5 className="text-uppercase">MovieX Website Project</h5>
                    </div>
                    <a className="ad-btn" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notigy-badge">Full Stack</span>
                  <img src={projectImg1} alt="Project" />

                  <div className="card-image-overly mt-3">
                    <span className="card-detail-badge"> React js </span>
                    <span className="card-detail-badge">React Redux</span>
                  </div>
                  <div className="card-body">
                    <div className="ad-title">
                      <h5 className="text-uppercase">MovieX Website Project</h5>
                    </div>
                    <a className="ad-btn" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Rotate>
    </>
  );
};

export default Project;
