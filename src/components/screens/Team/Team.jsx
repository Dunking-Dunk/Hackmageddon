import './Team.css'
import React from "react";
import Card from './TeamCard/TeamCard'
import Carousel from '../../Carousel/Carousel'

import Hursun from '../../../assets/images/organisers/hursun.webp'
import Keerthana from '../../../assets/images/organisers/keerthana.webp'
import Prajein from '../../../assets/images/organisers/prajein.webp'
import Rakesh from '../../../assets/images/organisers/rakesh.webp'
import Kumar from '../../../assets/images/organisers/kumar.webp'

const Team = () => {

    const coordinator = [
        <Card name='Hursun S S' designation='Coordinator' image={Hursun} phone={'8056201341'} />,
        <Card name='Keerthana M G' designation='Coordinator' image={Keerthana} phone={'9445087093'} />, <Card name='Prajein C K' designation='Coordinator' image={Prajein} phone={'7200246022'} />
    ]

    const faculty_coordinator = [
        <Card name='Dr Kumar P' designation='Director-Computing and Information Science' image={Kumar} />,
        <Card name='Dr Rakesh kumar M' designation='Faculty Coordinator' image={Rakesh} phone={'9840627292'} />
    ]

    return (
        <div className='team' id='team'>
            <div className='team__container'>
                <h3 className='team__title'>Organizing team</h3>
                <Carousel elements={faculty_coordinator} />
                {/* <h3 className='team__title'>Student Coordinators</h3> */}
                <Carousel elements={coordinator} />
            </div>
        </div>
    )
}

export default Team