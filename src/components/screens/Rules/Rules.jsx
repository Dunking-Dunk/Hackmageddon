import React from "react";
import { CanvasRevealEffect } from "../../ui/canvas-reveal-effect";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const Rules = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full h-full lg:px-20 lg:py-20 px-4 overflow-hidden">
            <div className="overflow-hidden rounded-3xl relative">
                <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-transparent absolute z-[-1]"
                    colors={[
                        [255, 0, 0],
                        [191, 64, 191],
                    ]}
                    opacities={[0.5, 0.6, 0.4, 0.6, 0.5, 0.5, 0.8, 0.7, 0.5, 1]}
                    dotSize={2}
                />
                <div className="px-10 py-20 flex flex-col gap-10">
                    <h3 className="text-9xl">Rules and Regulation</h3>
                    <p className="text-3xl lg:w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eligendi porro neque odio, perspiciatis minima eaque dolor quidem quae sint dolorum, assumenda aliquam, explicabo maiores delectus suscipit officia eveniet quo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eligendi porro neque odio, perspiciatis minima eaque dolor quidem quae sint dolorum, assumenda aliquam, explicabo maiores delectus suscipit officia eveniet quo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eligendi porro neque odio, perspiciatis minima eaque dolor quidem quae sint dolorum, assumenda aliquam, explicabo maiores delectus suscipit officia eveniet quo!</p>
                    <Button onClick={() => {
                        navigate('/Rules')
                    }}>Rules </Button>
                </div>

            </div>

        </div>
    )
}

export default Rules