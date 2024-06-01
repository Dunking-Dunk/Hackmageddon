import React from 'react';
import { StarField } from 'retro-react';
import { Link } from 'react-router-dom';

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
    <div className='w-full h-screen relative'>
      <StarField
        numStars={100}
        size={2}
        speed={1}
        starColor="white"
        style={{ zIndex: -1, position: 'absolute' }}
      />
      <Link className='absolute left-24 top-24' to={'/'}>
        <span className='menu__line' style={{ transform: 'rotate(45deg)', top: 2 }}></span>
        <span className='menu__line' style={{ transform: 'rotate(-45deg)', top: 0 }}></span>
      </Link>

      <div className='rules-container absolute top-32 left-32'>
        <h1 className='text-2xl font-bold mb-4'>Hackathon Rules</h1>
        <ul className='list-disc pl-5'>
          {rules.map((rule, index) => (
            <li key={index} className='mb-2'>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rules;
