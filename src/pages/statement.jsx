import './statement.css'
import React from "react";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { StarField } from 'retro-react';
import Table from '../components/ui/Table/table'

const Statement = () => {
    return (
        <div className="statement">
            <StarField
                numStars={100}
                size={2}
                speed={1}
                starColor="white"
                style={{ zIndex: -1, position: 'absolute' }} />

            <div className='statement__container'>
                <h3 className='text-9xl'>Problem Statements</h3>
                <div className='flex items-center justify-center h-full'>
                    <h3 className='lg:text-[14rem] text-9xl text-center'>Problem Statement Coming soon .... </h3>
                </div>

            </div>

            <Link className='statement__back__container' to={'/'}>
                <span className='menu__line' style={{ transform: 'rotate(45deg)', top: 2 }}></span>
                <span className='menu__line' style={{ transform: 'rotate(-45deg)', top: 0 }}></span>
            </Link>

        </div>
    )

}

export default Statement