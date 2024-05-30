import './statement.css'
import React from "react";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { StarField } from 'retro-react';
import Table from '../components/Table/table'

const Statement = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className="statement">
            <StarField
                numStars={100}
                size={2}
                speed={1}
                starColor="white"
                style={{ zIndex: -1, position: 'absolute' }} />

            <div className='statement__container'>
                <h1 className='text-7xl'>Problem Statements</h1>
                <Table />
            </div>

            <Link className='statement__back__container' to={'/'}>
                <span className='menu__line' style={{ transform: 'rotate(45deg)', top: 2 }}></span>
                <span className='menu__line' style={{ transform: 'rotate(-45deg)', top: 0 }}></span>
            </Link>

        </div>
    )

}

export default Statement