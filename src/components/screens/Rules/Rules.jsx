import React from "react";
import { CanvasRevealEffect } from "../../ui/canvas-reveal-effect";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const rules = [
    "Team Size: Each team must consist of 5 members.",
    "Diversity Requirement: Each team must have at least one female member.",
    "Eligibility: All participants must be current students of Rajalakshmi Engineering College (REC).",
    "Registration Deadline: Teams must register by July 14, as they submit their solutions for the first round.",
    "Respect and Professionalism: All participants must maintain respect and professionalism throughout the event. Any form of harassment or discrimination will result in disqualification.",
    "Collaboration: Collaboration within the team is encouraged, but collaboration between teams is prohibited.",
    "Theme: Projects should adhere to the theme provided at the start of the hackathon.",
    "Technology Stack: Teams are free to use any programming languages, frameworks, or tools.",
    "PPT Submission: Teams must submit a PowerPoint presentation (maximum of 4 slides) detailing their project idea by July 14.",
    "Video Submission: Shortlisted teams must submit a 90-second video presenting their project idea by [submission deadline].",
    "Evaluation: Videos will be judged on clarity, presentation skills, and the potential impact of the idea.",
    "Shortlisting: The top 30 teams will be selected for the final round.",
    "Hackathon: The final 30 teams will participate in a 24-hour hackathon at the REC campus."
];

const Rules = () => {

    return (
        <div id='rule' className="w-full h-full lg:px-20 lg:py-20 px-4 overflow-hidden">
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
                    <ul className='list-disc pl-14'>
                        {rules.map((rule, index) => (
                            <li key={index} className='mb-6 lg:text-3xl text-5xl '>{rule}</li>
                        ))}
                    </ul>
                    {/* <Button onClick={() => {
                        navigate('/Rules')
                    }}>Rules </Button> */}
                </div>

            </div>

        </div>
    )
}

export default Rules