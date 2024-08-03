import React from 'react'
import './Result.css'
import Marque from '../../Marque/Marque'
import { Vortex } from '../../ui/vortex'
import Button from '../../Button/Button'

const Result = () => {
    return (

        <div className='result'>
            <Marque />
            <Vortex
                backgroundColor="transparent"
                className="flex  flex-row justify-center items-center w-full h-full lg:p-40 py-40 px-6 gap-10"
            >
                <h3 className='result__main__title'>Round One Results are out!</h3>
                <div className="hero__buttons">
                    <div className="hero__button-left">
                        <a href={'/'} className="lg:text-4xl text-5xl" target="_blank">   <Button>ROUND 1 RESULTS!</Button></a>
                    </div>
                </div>
            </Vortex>
            <Marque />
        </div >
    )
}

export default Result