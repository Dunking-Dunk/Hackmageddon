import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import logo1 from './computer-solid.svg'
import logo2 from './computer.svg';
import logo3 from './message.svg';
// import { MdComputer } from "react-icons/md";
// import {FaGraduationCap} from 'react-icons/fa'


function Timeline() {
  return (
    <div className='timeline__container flex flex-col gap-10 px-20' >
      <h3 className='text-9xl'>Timeline</h3>
      <VerticalTimeline lineColor='linear-gradient(to top, #8A2387, #E94057, #8A2387)' >
        <VerticalTimelineElement style={{ marginTop: "-2rem" }} className='timeline__line'
          iconStyle={{ background: "##EEF7FF", color: "#fff" }}
          date='2005'
          icon={<img className="timeline__logo__image" src={logo1}></img>}>
          <div>
          </div>
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>PROBLEM STATEMENT</h3>
            <h4 className='timeline__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias accusamus cumque in, quia ut, id harum magni doloribus voluptate impedit blanditiis atque optio? Nisi maxime deserunt ullam quam. Numquam quasi necessitatibus facere sed omnis voluptatum! Voluptatem recusandae blanditiis saepe obcaecati architecto ipsa? Adipisci commodi iure eaque soluta aliquid est?</h4>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#EEF7FF", color: "#fff" }}
          date='2005'
          icon={<img className='timeline__logo__image' src={logo2}></img>}
        >
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>IDEATION AND SUBMISSION</h3>
            <h4 className='timeline__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias accusamus cumque in, quia ut, id harum magni doloribus voluptate impedit blanditiis atque optio? Nisi maxime deserunt ullam quam. Numquam quasi necessitatibus facere sed omnis voluptatum! Voluptatem recusandae blanditiis saepe obcaecati architecto ipsa? Adipisci commodi iure eaque soluta aliquid est?</h4>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#EEF7FF", color: "#fff" }}
          date='2005'
          icon={<img className='timeline__logo__image' src={logo3}></img>}
        >
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>FIRST ROUND SUBMISSION</h3>
            <h4 className='timeline__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias accusamus cumque in, quia ut, id harum magni doloribus voluptate impedit blanditiis atque optio? Nisi maxime deserunt ullam quam. Numquam quasi necessitatibus facere sed omnis voluptatum! Voluptatem recusandae blanditiis saepe obcaecati architecto ipsa? Adipisci commodi iure eaque soluta aliquid est?</h4>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#EEF7FF", color: "#fff" }}
          date='2005'
          icon={<img className="timeline__logo__image" src={logo1}></img>}

        >
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>FIRST ROUND RESULTS</h3>
            <h4 className='timeline__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias accusamus cumque in, quia ut, id harum magni doloribus voluptate impedit blanditiis atque optio? Nisi maxime deserunt ullam quam. Numquam quasi necessitatibus facere sed omnis voluptatum! Voluptatem recusandae blanditiis saepe obcaecati architecto ipsa? Adipisci commodi iure eaque soluta aliquid est?</h4>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#EEF7FF", color: "#fff" }}
          date='2005'
          icon={<img className="timeline__logo__image" src={logo1}></img>}
        >
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>SECOND ROUND</h3>
            <h4 className='timeline__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias accusamus cumque in, quia ut, id harum magni doloribus voluptate impedit blanditiis atque optio? Nisi maxime deserunt ullam quam. Numquam quasi necessitatibus facere sed omnis voluptatum! Voluptatem recusandae blanditiis saepe obcaecati architecto ipsa? Adipisci commodi iure eaque soluta aliquid est?</h4>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'

          iconStyle={{ background: "#EEF7FF", color: "#fff" }}
          date='2005'
          icon={<img className="timeline__logo__image" src={logo1}></img>}
        >
          <div className='timeline__inner_text'>
            <h3 className='timeline__title'>SECOND ROUND RESULTS</h3>
            <h4 className='timeline__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias accusamus cumque in, quia ut, id harum magni doloribus voluptate impedit blanditiis atque optio? Nisi maxime deserunt ullam quam. Numquam quasi necessitatibus facere sed omnis voluptatum! Voluptatem recusandae blanditiis saepe obcaecati architecto ipsa? Adipisci commodi iure eaque soluta aliquid est?</h4>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          style={{ marginBottom: "-8rem" }}
          iconStyle={{ background: "#EEF7FF", color: "#fff" }}
          date='2005'
          icon={<img className="timeline__logo__image" src={logo1}></img>}
        >
          <div className='timeline__inner_text' >
            <h3 className='timeline__title'>GRAND FINALE</h3>
            <h4 className='timeline__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla molestias accusamus cumque in, quia ut, id harum magni doloribus voluptate impedit blanditiis atque optio? Nisi maxime deserunt ullam quam. Numquam quasi necessitatibus facere sed omnis voluptatum! Voluptatem recusandae blanditiis saepe obcaecati architecto ipsa? Adipisci commodi iure eaque soluta aliquid est?</h4>
          </div>

        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Timeline
// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { MdComputer } from "react-icons/md";


// function Timeline(){
//   return(

// <VerticalTimeline>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//     date="2011 - present"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<MdComputer />}
//   >
//     <h3 className="vertical-timeline-element-title">Creative Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//     <h4>
//       Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//     </h4>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2010 - 2011"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<MdComputer />}
//   >
//     <h3 className="vertical-timeline-element-title">Art Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2008 - 2010"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<MdComputer />}
//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//     <p>
//       User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2006 - 2008"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<MdComputer />}
//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>
//       User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="April 2013"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<MdComputer />}
//   >
//     <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
//     <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//     <p>
//       Strategy, Social Media
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="November 2012"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<MdComputer />}
//   >
//     <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
//     <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="2002 - 2006"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<MdComputer />}
//   >
//     <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
//     <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//     <p>
//       Creative Direction, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//     icon={<MdComputer/>}
//   />
// </VerticalTimeline>
//   )
// }
// export default Timeline
