import React from "react";
import Button from "../../Button/Button";
import { Vortex } from "../../ui/vortex";
import statement from '../../../assets/final ps.pdf'
import template from '../../../assets/PPTTemplate.pdf'

const Statements = () => {


    return (
        <div className="w-full h-full  overflow-hidden">
            <div className="overflow-hidden rounded-2xl relative">
                <Vortex
                    backgroundColor="transparent"
                    className="flex items-start flex-col justify-center  w-full h-full lg:p-40 py-40 px-6 gap-10"
                >
                    <div className="flex flex-col gap-10 lg:backdrop-blur-0 backdrop-blur-sm">
                        <h3 className="text-9xl">Problem Statements</h3>
                        <p className="lg:text-3xl text-5xl lg:w-1/2">Here you will find a diverse range of around 120 problem statements aligned with our event's themes. Participants are encouraged to explore and engage with these challenges, and you are welcome to submit multiple solutions. Dive in, innovate, and showcase your skills by addressing these exciting problems. Happy hacking!</p>
                        <a href={statement} className="lg:text-4xl text-5xl" download={statement}>   <Button>Statements</Button></a>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-14">
                        <h3 className="text-6xl">Presentation Template</h3>
                        <a href={'https://drive.usercontent.google.com/download?id=1Int_fDCg1Wl_TbWnMADuvQf7-UhN6Lvs&export=download&authuser=0&confirm=t&uuid=fecc50ea-2a21-4950-92af-e0e2263ddf5a&at=APZUnTX9HDnJY77G7jEj8z-yvm94:1717728856379'} className="lg:text-4xl text-5xl" download={'https://drive.usercontent.google.com/download?id=1Int_fDCg1Wl_TbWnMADuvQf7-UhN6Lvs&export=download&authuser=0&confirm=t&uuid=fecc50ea-2a21-4950-92af-e0e2263ddf5a&at=APZUnTX9HDnJY77G7jEj8z-yvm94:1717728856379'}>   <Button>Template</Button></a>
                    </div>

                </Vortex>

            </div>

        </div>
    )


}

export default Statements