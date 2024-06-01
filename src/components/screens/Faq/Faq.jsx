import React from 'react';
import Faq from 'react-faq-component';

const data = {
    title: "FAQ",
    rows: [
        {
            title: "How do I register for the hackathon?",
            content: "Registration can be completed online through the official hackathon website. Ensure you provide all necessary team member details and meet the eligibility criteria."
        },
        {
            title: "What is the team size, and are there any specific requirements?",
            content: "Each team must mandatorily consist of 5 members, with at least one female member."
        },
        {
            title: "Is there any entry fee for the hackathon?",
            content: "No, there isn’t any entry fee for the hackathon. Registration is completely free."
        },
        {
            title: "Are there any specific themes or problem statements for the hackathon?",
            content: "Yes, problem statements will be released on June 15, and projects should adhere to these themes."
        },
        {
            title: "What if we need to change a team member after registration?",
            content: "You can make changes to your team by contacting the organizers. Please do this as soon as possible to avoid any issues."
        },
        {
            title: "What are the submission requirements for the first round?",
            content: "Teams must submit a PowerPoint presentation (maximum of 4 slides) detailing their project idea by July 14."
        },
        {
            title: "Is this a hardware hackathon?",
            content: "Not exactly. This is primarily a software-based hackathon. However, you are welcome to integrate sensors, IoT devices, or small hardware solutions into your projects if they enhance your software application."
        },
        {
            title: "What facilities and resources will be provided during the 24-hour hackathon?",
            content: "Accommodation, internet access, refreshments and workspaces will be provided for all participants during the hackathon."
        },
        {
            title: "Can we use pre-existing code or projects?",
            content: "No, all work must be original and created during the hackathon. Pre-existing code or projects are not allowed."
        },
        {
            title: "What technologies can we use for our project?",
            content: "Teams are free to use any programming languages, frameworks, or tools that best suit their project needs."
        }
    ]
}

const styles = {
    bgColor: 'transparent',
    titleTextColor: 'white',
    rowContentColor: 'white',
    rowTitleColor: 'white',
    arrowColor: 'white',
    titleTextSize: '10rem'
}
const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};


const FaqScreen = () => {
    return (
        <div className='lg:p-24 px-20'>
            <Faq data={data} styles={styles} config={config} />
        </div>
    )
}

export default FaqScreen