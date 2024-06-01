import React from 'react'
import { StarField } from 'retro-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Statement from './statement';

const Rules = () => {

  return (
    <div className='w-full h-screen relative'>
      <StarField
        numStars={100}
        size={2}
        speed={1}
        starColor="white"
        style={{ zIndex: -1, position: 'absolute' }}
      />
      <Link className='absolute left-24 top-24' to={'/'}>
        <span className='menu__line' style={{ transform: 'rotate(45deg)', top: 2 }}></span>
        <span className='menu__line' style={{ transform: 'rotate(-45deg)', top: 0 }}></span>
      </Link>

      <h1>Hello</h1>

    </div>

  )
}

export default Rules
