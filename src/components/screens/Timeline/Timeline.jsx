import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import logo1 from './edit-list-icon.svg'
import logo2 from './ICON 1.svg';
import logo3 from './ICON 1 (1).svg';
import logo4 from './ICON 1 (2).svg'
// import { MdComputer } from "react-icons/md";
// import {FaGraduationCap} from 'react-icons/fa'


function Timeline() {
  return (
    <div className='timeline__container flex flex-col gap-10 lg:p-20 px-4 ' >
      <h3 className='text-9xl'>Timeline</h3>
      <VerticalTimeline lineColor='linear-gradient(to top, #8A2387, #E94057, #8A2387)' >
        <VerticalTimelineElement style={{ marginTop: "-2rem" }} className='timeline__line'
          iconStyle={{ background: "#fff", color: "#fff" }}
          date='June 15 - July 14'
          icon={<img className="timeline__logo__image" src={logo1}></img>}>
          <div>
          </div>
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>REGISTRATION AND PROBLEM STATEMENTS</h3>
            <h4 className='timeline__para'>From June 15 onwards, teams can register online, providing member details and ensuring eligibility. The list of official problem statements are released, allowing teams to begin brainstorming and planning their projects.</h4>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#fff", color: "#fff" }}
          date='July 14'
          icon={<img className='timeline__logo__image' src={logo2}></img>}
        >
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>FIRST ROUND</h3>
            <h4 className='timeline__para'>By July 14, teams submit a PowerPoint presentation (maximum of 4 slides) detailing their project idea. The submissions are reviewed, and the top teams are shortlisted and announced within the next week, advancing to the next round.</h4>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#fff", color: "#fff" }}
          date='Last few weeks of July'
          icon={<img className="timeline__logo__image" src={logo3}></img>}
        >
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>SECOND ROUND</h3>
            <h4 className='timeline__para'>Shortlisted teams from the first round must submit a 90-second video presenting their project idea by July 28. These videos will be evaluated based on clarity, presentation skills, and the potential impact of the idea. The top 30 teams will be announced on the first week of August, advancing to the grand finale.</h4>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          style={{ marginBottom: "-8rem" }}
          iconStyle={{ background: "#fff", color: "#fff" }}
          date='August'
          icon={<img className="timeline__logo__image" src={logo4}></img>}
        >
          <div className='timeline__inner_text' >
            <h3 className='timeline__title'>GRAND FINALE</h3>
            <h4 className='timeline__para'>Within the first few weeks as soon as the ODD semester starts of 2024, the top 30 finalist teams will participate in a 24-hour hackathon held at the REC campus. During this intense competition, teams will work tirelessly to develop and refine their projects based on the provided problem statements. The event will culminate in final project submissions, which will be judged based on innovation, technical proficiency, design, and presentation. Winners will be announced during the closing ceremony, where prizes will be awarded to the most outstanding projects.</h4>
          </div>

        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Timeline
