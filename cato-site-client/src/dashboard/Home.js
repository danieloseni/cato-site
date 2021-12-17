import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <section class="hero">
        <div class="dual-box">
            <div class="section">
                <div class="hero-content">
                    <div class="hero-title">
                        Are you talented and smart?
                        <br />
                        Do you have what it takes to become a champion?
                    </div>

                    <div class="hero-title-medium">
                        We organize and host series of competitions for youths who are not afraid of a challenge
                    </div>

                    <div class="cta">
                        Enroll now
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="hero-image">
                    <img src="images/children.png" alt="" />
                </div>
            </div>
        </div>
    </section>

    );
}

export default Home

