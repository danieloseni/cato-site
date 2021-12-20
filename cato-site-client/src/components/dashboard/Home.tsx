import React from 'react'
import { Link } from 'react-router-dom';
import Children from 'images/children.png';

function Home() {
    return (
        <section className="hero">
            <div className="dual-box">
                <div className="section">
                    <div className="hero-content">
                        <div className="hero-title">
                            Are you talented and smart?
                            <br />
                            Do you have what it takes to become a champion?
                        </div>

                        <div className="hero-title-medium">
                            We organize and host series of competitions for youths who are not afraid of a challenge
                        </div>

                        <div className="cta">
                            Enroll now
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="hero-image">
                        <img src={Children} alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Home

