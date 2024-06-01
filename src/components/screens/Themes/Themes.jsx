import React from "react";
import './Themes.css'

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../ui/canvas-reveal-effect";

export default function Theme() {
    return (
        <div className="flex flex-col lg:p-40 px-8 py-40 gap-20">

            <h3 className="text-9xl">Problem Themes</h3>
            <div className="flex flex-wrap items-center justify-center w-full lg:gap-y-20 gap-4 mx-auto">

                <Card title="Smart Technology & Automation" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Health and Well-being" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/20 dark:bg-black/90" />
                </Card>
                <Card title="Culture, Education, and Tourism" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
                <Card title="Agriculture and Sustainability" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Cybersecurity, & DeFi" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/20 dark:bg-black/90" />
                </Card>
                <Card title="Disaster Management & Space Technology" icon={<AceternityIcon />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </div>
    );
}

const Card = ({
    title,
    icon,
    children,
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-white/[0.4] group/canvas-card flex items-center justify-center  lg:max-w-xl w-full mx-auto p-4 relative lg:h-[40rem] h-[50rem] rounded-xl"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white " />
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="text-white text-4xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
                    {title}
                </h2>
            </div>
        </div>
    );
};

const AceternityIcon = () => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white group-hover/canvas-card:text-white "
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="white"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
                style={{ mixBlendMode: "darken" }}
            />
        </svg>
    );
};

export const Icon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};