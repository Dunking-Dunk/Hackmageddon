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
    <div className='timeline__container flex flex-col gap-10 px-4' >
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
