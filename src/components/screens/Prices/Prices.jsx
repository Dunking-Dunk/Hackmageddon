import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import GoldTrophy from '../../../assets/images/icons/goldCup.svg'

const Prices = () => {
    return (
        <div className="w-full h-full lg:p-40 px-8 py-20">
            <h3 className="text-9xl">Prize Pool</h3>
            <div className="w-full h-full flex lg:flex-row flex-col items-center justify-evenly">
                {/* <CardContainer className="inter-var ">
                    <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] lg:w-[40rem]
                     w-[80%] h-auto rounded-xl p-24 border flex flex-col items-center gap-8  backdrop-blur-lg
                    ">
                        <CardItem
                            translateZ="50"
                            className="text-8xl font-bold text-white"
                        >
                            2nd Price
                        </CardItem>
                        <CardItem translateZ="100" className="w-[70%] mt-4">
                            <img src={GoldTrophy} className="h-50" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-5xl max-w-sm mt-2 text-neutral-300"
                            >
                                ₹ 6,000
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer> */}
                <CardContainer className="inter-var">
                    <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] lg:w-[50rem]
                    w-[80%] h-auto rounded-xl p-24 border flex flex-col items-center gap-8  backdrop-blur-lg
                    ">
                        <CardItem
                            translateZ="50"
                            className="text-8xl font-bold text-white"
                        >
                            Prize Pool
                        </CardItem>
                        <CardItem translateZ="100" className="w-[70%] mt-4">
                            <img src={GoldTrophy} className="h-50" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-5xl max-w-sm mt-2 text-neutral-300"
                            >
                                ₹ 30,000 +
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                {/* <CardContainer className="inter-var">
                    <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] lg:w-[40rem]  w-[80%] h-auto rounded-xl p-24 border flex flex-col items-center gap-8 backdrop-blur-lg">
                        <CardItem
                            translateZ="50"
                            className="text-8xl font-bold text-white"
                        >
                            3rd Price
                        </CardItem>
                        <CardItem translateZ="100" className="w-[70%] mt-4">
                            <img src={GoldTrophy} className="h-50" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-5xl max-w-sm mt-2 text-neutral-300"
                            >
                                ₹ 3,000
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer> */}
            </div>
        </div>
    )
}

export default Prices