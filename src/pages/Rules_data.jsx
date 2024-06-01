import React from 'react'
import { StarField } from 'retro-react';
import './Rules_data.css'
import { useParams,useNavigate, Link } from 'react-router-dom';
import Statement from './statement';
// import Rules_data from '../components/ui/Rules_data';
function Rules_data() {
    const { id } = useParams()
    const navigate = useNavigate()
  return (
    <>
    <div className='Rules'>
      <StarField
                numStars={100}
                size={2}
                speed={1}
                starColor="white"
                style={{ zIndex: -1, position: 'absolute' }}
                 />
    </div>
    <Link className='Rules__back__container' to={'/'}>
            <span className='menu__line' style={{ transform: 'rotate(45deg)', top: 2 }}></span>
            <span className='menu__line' style={{ transform: 'rotate(-45deg)', top: 0 }}></span>
    </Link>
    
    
    </>
    
  )
}

export default Rules_data
