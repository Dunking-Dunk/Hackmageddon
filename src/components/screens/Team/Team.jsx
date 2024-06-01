import './Team.css'
import React from "react";
import Card from './TeamCard/TeamCard'
import Carousel from '../../Carousel/Carousel'

import Hursun from '../../../assets/images/organisers/hursun.webp'


const Team = () => {
    const coordinator = [<Card name='Keerthana' designation='Coordinator' image={Hursun} />, <Card name='Prajein' designation='Coordinator' image={Hursun} />, <Card name='Hursun S S' designation='Coordinator' image={Hursun} />
    ]

    const faculty_coordinator = [
        <Card name='Mrs.Reenuka' designation='Coordinator' image={Hursun} />,
        <Card name='Mrs.Sree Subha' designation='Coordinator' image={Hursun} />,

    ]
    return (
        <div className='team' id='team'>
            <div className='team__container'>
                <h3 className='team__title'>Faculty Coordinators</h3>
                <Carousel elements={faculty_coordinator} />
                <h3 className='team__title'>Student Coordinators</h3>
                <Carousel elements={coordinator} />
            </div>
        </div>
    )
}

export default Team