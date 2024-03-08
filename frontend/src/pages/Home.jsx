import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useNavigate();

    return (
        <div>
            <section id="banner">
                <p className='about-club'>Founded in Kandy by Ruvini Yatigammana, Ru Netters aims to provide equal opportunity for netball players to compete at provincial and national levels, enhancing their individual skills. Their vision is to empower sportswomen both on and off the court, making them well-rounded individuals.</p>
                <div class="container">
                    <button onClick={() => history('/coaching-plan')} class="btn1"><a class="text">Coaching Plan</a></button>
                </div>
            </section>
        </div>
    )
}

export default Home