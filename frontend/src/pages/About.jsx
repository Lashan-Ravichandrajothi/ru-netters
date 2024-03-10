import React from 'react';
import Coach from '../assets/coach.jpg'
import Logo from '../assets/logo.jpg'

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

      <div className="vision-container officials">
        <h2 className="vision-title">Information about club officials</h2>
        <p className="vision-text">
          <p className='off-tag'>President</p>
          <ul>
            <li>Mr. Sanjeewa Weerakkody - The Assistant Sports Director<br /> Zonal Educational Department – Kandy <br /> 071-0906194</li>
          </ul>
        </p>
        
        <p className="vision-text">
          <p className='off-tag'>Secretary</p>
          <ul>
            <li>Mrs. Ruvini Yatigammana - Head of the Physical Training Department<br />Greenhill International School – Kandy<br />077-3878033</li>
          </ul>
        </p>

        <p className="vision-text">
          <p className='off-tag'>Treasurer</p>
          <ul>
            <li>Mr. Mangala Mallimarachchi - The Managing Director<br />Sahas Uyana – Kandy<br />075-7951017</li>
          </ul>
        </p>

        <p className="vision-text">
          <p className='off-tag'>Advisors</p>
          <ul>
            <li>Dr. Daminda Attanayake – Chief Medical Officer – Sri Lanka Cricket - 071-9995445</li>
            <li>Mrs. Thushara Samarathunga – Assistant Sports Director – Central Province 071-1678184</li>
            <li>Ms. Inoka Senadeera – District Netball Coach – Kandy District 071-6815077</li>
          </ul>
        </p>

        <p className="vision-text">
          <p className='off-tag'>Committee Members</p>
          <ul>
            <li>Mrs. Niroshini Mathawan – Assistant Manager – LB Finance PLC Kandy 077-6535116</li>
            <li>Mr. Shehan Rajapaksha – Junior executive – NDB Bank Digana 077-5905031</li>
            <li>Mr. Dilan Kumara – Businessman 077-3575576</li>
            <li>Mr. Lakmal Madurawela – Businessman 077-3119576</li>
          </ul>
        </p>
      </div>

      <div className="vision-container logo-abt">
        <h2 className="vision-title">Logo</h2>
        <div className='flex-d'>
        <p className="vision-text trainee">
        The logo is established! This is the "nike" goddess, the divine of sports, victory and good luck according to the Greek mythology.
        </p>
        <img className='logo-img' src={Logo} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default About;
