import React from 'react';
import Coach from '../assets/coach.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="vision-container">
        <h2 className="vision-title">Vision</h2>
        <p className="vision-text">
          To strive as sportswomen in both in & out of the Netball court.
        </p>
      </div>

      <div className="vision-container mission">
        <h2 className="vision-title">Mission</h2>
        <p className="vision-text">
        To be established as the most recognized netball club in Sri Lanka, by providing all rounders in
        netball whom are enriched in skills, ethics & the true sportsmanship.
        </p>
      </div>

      <div className="vision-container aim">
        <h2 className="vision-title">Main aim of the club</h2>
        <p className="vision-text">
        To provide a proper practice & an equal opportunity for the players in Kandy district to represent
        netball in the national level and in the international level tournaments
        </p>
      </div>

      <div className="vision-container objectives">
        <h2 className="vision-title">Objectives and Goals</h2>
        <p className="vision-text">
          <ul>
            <li>Skill Development</li>
            <li>Identify specific areas for improvement</li>
            <li>Design targeted drills and exercises</li>
            <li>Team Cohesion</li>
            <li>Implement team-building activities</li>
            <li>Foster effective communication and camaraderie</li>
          </ul>
        </p>
      </div>

      <div className="vision-container coach">
        <h2 className="vision-title">Coach</h2>
        <div className='flex-d'>
        <p className="vision-text trainee">
        Ruvini Yatigammana, a former Sri Lankan netball champion, boasts an impressive career. As a player, she captained her school team, won national accolades, and represented Sri Lanka at various levels. Currently, she coaches at multiple institutions, inspiring the next generation while pursuing a Master's degree in sports sciences. Her journey reflects dedication, athletic prowess, and a passion for coaching.
        </p>
        <img className='trainee-img' src={Coach} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
