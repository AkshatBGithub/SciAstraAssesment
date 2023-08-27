import React from 'react'
import UniversityCard from '../widgets/UniversityCard'
import TeamCard from '../widgets/TeamCard'
import MentorCard from '../widgets/MentorCard'

import './TeamPage.css'
export default function TeamPage() {
  
  const universityNames = ["Cambridge University", "Harvard University", "University of California", "ETH Curich", "MAx Planck", "University of Edinberg", "John's Hopkins", "Michigan State", "University of Illinois", "Humboldt University Berlin"]
  
  const universityCards = universityNames.map( (name)=> {return <UniversityCard name={name} key={name}/>});
  
  const teams = [
        {
          name: "Shubham",
          description: "Cambridge University"
        },
        {
          name: "Harsh Pratik",
          description: "ITI BHU"
        },
        {
          name: "Aswini",
          description:"LPU"
        },
        {
          name: "John",
          description: "Stanford"
        },
        {
          name: "Shubham Kumar",
          description: "Michigan State University"
        },
        {
          name:"Harshit Singh",
          description: "Harvard"
        },
        {
          name: "Edward Clement",
          description: "University of California"
        },
        {
          name: "Arjun",
          description: "University of Illinois"
        }
  ];
  
  const teamCards = teams.map((team) => {return <TeamCard name={team.name} description={team.description} key={team.name}/>});

    const mentors=[
      {
        name:"Dr. Omkar",
        description:"Principal Project Scientist, IIT Madras"
      },
      {
        name: "Akhil Tripathi"
      },
      {
        name:"Vivek Dwivedi"
      }
    ]

  const mentorCards = mentors.map( (mentor) => {return <MentorCard name={mentor.name} description={mentor.description} key={mentor.name}/>})

  return (
    <>
    
    <div className='teamPage__text__large'>Team Page</div>
    
    <div className='teamPage__text__medium'>Learn from Scientists, research scholars from top institutes of the world.</div>

    <div className='teamPage__universityCards'>
      {universityCards}
    </div>


    <div className="teamPage__text__large">
      Meet Your Mentors...
    </div>

    <div className='teamPage__teamCards'> {teamCards} </div>      

    <div className="teamPage__text__medium">
      Mentors & Advisors
    </div>

    <div className='teamPage__mentorCards'>
      {mentorCards}
    </div>
    </>  
  )
}
