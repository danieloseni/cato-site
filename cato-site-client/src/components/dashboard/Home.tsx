import React from 'react'
import { Link } from 'react-router-dom';
import Children from 'images/children.png';
import HeroBackground from 'images/backgrounds/hero-background.jpg'
function Home() {
    return (
        <section className="hero">
            <div className="image-overlay">
                <img src={HeroBackground} alt="hero background" />
            </div>
            <div className="hero-info w-80 full-width flex-column align-center g-6 ">
                <div className="secondary-text-2 text-align-center f60-m40">
                     Are you talented and smart? Do you have what it takes to become a champion?
                </div>

                <div className="white-text f40-m20 text-align-center">
                    We organize and host series of competitions for youths who are not afraid of a challenge.

                </div>

                <div className="cta">
                    Enroll Now
                </div>


            </div>
        </section>

    );
}

export default Home

