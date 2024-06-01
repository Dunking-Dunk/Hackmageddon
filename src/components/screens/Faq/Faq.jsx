import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "How do I register for the hackathon?",
            content: "Registration can be completed online through the official hackathon website. Ensure you provide all necessary team member details and meet the eligibility criteria."
        },
        {
            title: "What is the maximum team size, and are there any specific requirements?",
            content: "Each team must consist of 5 members, with at least one female member."
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
        },
        {
            title: "What is the package version",
            content: "v1.0.5"
        }],

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