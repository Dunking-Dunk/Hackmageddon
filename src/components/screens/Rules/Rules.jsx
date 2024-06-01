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
                    showGradient={false}
                    opacities={[0.5, 0.6, 0.4, 0.6, 0.5, 0.5, 0.8, 0.7, 0.5, 1]}
                    dotSize={2}
                />
                <div className="px-10 py-20 flex flex-col gap-10">
                    <h3 className="text-9xl">Rules and Regulation</h3>
                    <p className="text-3xl lg:w-2/3">This is the rules and regulations page for Hackmagaddon! It is crucial that all participants adhere to the guidelines outlined here to ensure a fair, enjoyable, and productive experience for everyone involved. By participating in this event, you agree to follow these rules strictly. Please remember that the judges' decisions are final and binding in all matters related to the competition. Thank you for your cooperation and commitment to maintaining the integrity of Hackamagaddeon.</p>
                    <Button onClick={() => {
                        navigate('/Rules')
                    }}>Rules </Button>
                </div>

            </div>

        </div>
    )
}

export default Rules