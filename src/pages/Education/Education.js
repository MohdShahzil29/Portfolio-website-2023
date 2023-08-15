import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdCastForEducation } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import Swing from "react-reveal/Swing";
import "./style.css";
const Education = () => {
  return (
    <>
      <Swing>
        <div className="education" id="education">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdCastForEducation />}
            >
              <h3 className="vertical-timeline-element-title">12th grade</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">Sitarganj</h4> */}
              <p>Completed From Up borad</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2023 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdCastForEducation />}
            >
              <h3 className="vertical-timeline-element-title">BCA</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">Sitarganj</h4> */}
              <p>
                Currently pursuing in MJP (Mahatma Jyotiba Phule) University
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </Swing>
    </>
  );
};

export default Education;
