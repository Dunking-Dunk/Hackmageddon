import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
// import "./path/to/pixel-borders.scss";
import 'react-vertical-timeline-component/style.min.css';
import { Balloon, Sprite, Button, Container } from "nes-react";
import { FaGraduationCap } from 'react-icons/fa';
import {ReactComponent as Logo} from './computer.svg'

// import "/path/to/pixel-borders.scss";
import './Timeline.css'
function Timeline() {
  return (
    
    <div className='real_container'>
      <VerticalTimeline linecolor="#000">
        <VerticalTimelineElement className='icon_1' 
        iconStyle={{background:"#000",color:"#fff"}}
        date='2005'
        dateClassName='dates'
        icon={<Logo/>}>
            <div>
              <Balloon fromLeft>Would you like to hear a joke?</Balloon>
            </div>
            <div className='inner_text'>
                <h2>HURSUN</h2>
                <h2>Software developer</h2>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='icon_1'
   
        iconStyle={{background:"#000",color:"#fff"}}
        date='2005'
       
        >
             <div className='inner_text'>
                <h2>HURSUN</h2>
                <h2>Software developer</h2>
            </div>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement className='icon_1'
         
         iconStyle={{background:"#000",color:"#fff"}}
         date='2005'
        
         >
              <div className='inner_text'>
                <h2>HURSUN</h2>
                <h2>Software developer</h2>
            </div>
         
         </VerticalTimelineElement>
         <VerticalTimelineElement className='icon_1'
         
         iconStyle={{background:"#000",color:"#fff"}}
         date='2005'
      
         >
             <div className='inner_text'>
                <h2>HURSUN</h2>
                <h2>Software developer</h2>
            </div>
         
         </VerticalTimelineElement>
         <VerticalTimelineElement className='icon_1'
         
         iconStyle={{background:"#000",color:"#fff"}}
         date='2005'
        
         >
              <div className='inner_text'>
                <h2>HURSUN</h2>
                <h2>Software developer</h2>
            </div>
         
         </VerticalTimelineElement>
         <VerticalTimelineElement className='icon_1'
         
         iconStyle={{background:"#000",color:"#fff"}}
         date='2005'
        
         >
              <div className='inner_text'>
                <h2>HURSUN</h2>
                <h2>Software developer</h2>
            </div>
         
         </VerticalTimelineElement>
         
        
        
      </VerticalTimeline>
      <VerticalTimelineElement className='icon_1'
         
         iconStyle={{background:"#000",color:"#fff"}}
         date='2005'
        
         >
              <div className='inner_text'>
                <h2>HURSUN</h2>
                <h2>Software developer</h2>
            </div>
         
         </VerticalTimelineElement>
      {/* <Heading size='large' centered>Grid layouts with &lt;Row&gt; and &lt;Col&gt;</Heading> */}

<Row>
  <Col type='1-of-2'>
    <Container roundedCorners>
      &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
    </Container>
  </Col>
  <Col type='1-of-2'>
    <Container roundedCorners>
      &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
    </Container>
  </Col>
</Row>

<Row>
  <Col type='1-of-3'>
    <Container roundedCorners>
      &lt;Col type=&quot;1-of-3&quot;&gt;
    </Container>
  </Col>
  <Col type='2-of-3'>
    <Container roundedCorners>
      &lt;Col type=&quot;2-of-3&quot;&gt;...&lt;/Col&gt;
    </Container>
  </Col>
</Row>

<Row>
  <Col type='1-of-4'>
    <Container roundedCorners>
      &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
    </Container>
  </Col>
  <Col type='1-of-4'>
    <Container roundedCorners>
      &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
    </Container>
  </Col>
  <Col type='1-of-4'>
    <Container roundedCorners>
      &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
    </Container>
  </Col>
  <Col type='1-of-4'>
    <Container roundedCorners>
      &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
    </Container>
  </Col>
</Row>
<Row style={{ position: 'relative' }}>
  <SourceCodeButton style={{ right: 0, bottom: -30 }} path="/docs/components/demos/GridDemo.tsx#L8" />
</Row>
    </div>
  )
}

export default Timeline
