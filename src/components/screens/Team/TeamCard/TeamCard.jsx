import './TeamCard.css'
import React from 'react'


const Card = ({ name, designation, image }) => {
    return (
        <div class="team__card">
            <img
                alt={'profile image'}
                className='team__card__img'
                src={image}
            />
            <div>
                <h3 className='team__card__name'>{name}</h3>
                <p class="team__card__footer">{designation}</p>
            </div>

        </div>
    )
}

export default Card