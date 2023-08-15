import React from 'react'
import "./style.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { MdCastForEducation } from "react-icons/md";
const WorkExp = () => {
  return (
    <>
    <div className="container woek" id='work-exp'>
        <div className="work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experince
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title">React Devloper</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Sitarganj</h4> */}
            <p>xyz pvt ltd</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title">Andriod Devloper</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Sitarganj</h4> */}
            <p>xyz pvt ltd</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title">Web Devloper</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Sitarganj</h4> */}
            <p>xyz pvt ltd</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </div>
    
    </>
  )
}

export default WorkExp