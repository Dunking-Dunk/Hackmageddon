import React from "react";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { Vortex } from "../../ui/vortex";

const Statements = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full h-full  overflow-hidden">
            <div className="overflow-hidden rounded-2xl relative">
                <Vortex
                    backgroundColor="transparent"
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >
                    <div className="flex flex-col gap-10 lg:p-40 py-40 px-6 lg:backdrop-blur-0 backdrop-blur-sm">
                        <h3 className="text-9xl">Problem Staments</h3>
                        <p className="text-3xl lg:w-1/2">Here you will find a diverse range of around 120 problem statements aligned with our event's themes. Participants are encouraged to explore and engage with these challenges, and you are welcome to submit multiple solutions. Dive in, innovate, and showcase your skills by addressing these exciting problems. Happy hacking!</p>
                        <Button onClick={() => {
                            navigate('/statement')
                        }}>Statements</Button>
                    </div>
                </Vortex>


            </div>

        </div>
    )


}

export default Statements