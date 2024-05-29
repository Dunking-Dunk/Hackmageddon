import './Timeline.css'

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as Logo } from './computer.svg'

function Timeline() {
  return (
    <div className='timeline__container'>
      <VerticalTimeline linecolor="#000">
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#000", color: "#fff" }}
          date='2005'
          dateClassName='dates'
          icon={<Logo />}>
          <div>
          </div>
          <div className='inner_text'>
            <h3 className='timeline__title'>HURSUN</h3>
            <p className='timeline__para'>Software developer</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#000", color: "#fff" }}
          date='2005'
        >
          <div className='inner_text'>
            <h3 className='timeline__title'>HURSUN</h3>
            <p className='timeline__para'>Software developer</p>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#000", color: "#fff" }}
          date='2005'
        >
          <div className='inner_text'>
            <h3 className='timeline__title'>HURSUN</h3>
            <p className='timeline__para'>Software developer</p>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#000", color: "#fff" }}
          date='2005'

        >
          <div className='inner_text'>
            <h3 className='timeline__title'>HURSUN</h3>
            <p className='timeline__para'>Software developer</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'
          iconStyle={{ background: "#000", color: "#fff" }}
          date='2005'

        >
          <div className='inner_text'>
            <h3 className='timeline__title'>HURSUN</h3>
            <p className='timeline__para'>Software developer</p>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement className='timeline__line'

          iconStyle={{ background: "#000", color: "#fff" }}
          date='2005'
        >
          <div className='inner_text'>
            <h3 className='timeline__title'>HURSUN</h3>
            <p className='timeline__para'>Software developer</p>
          </div>

        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Timeline
