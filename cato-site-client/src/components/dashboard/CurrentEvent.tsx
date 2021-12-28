import React from 'react'
import SpellingBee from 'images/spelling-bee.png'

const CurrentEvent = () => {
    return (

        <section className="current-event">
            <div className="dual-box escape-padding">
                <div className="section">
                    <div className="event-box">
                        <div className="event-title">

                            <span className="f15 ">
                                UPCOMING EVENT: 
                                </span>
                            <span className="sentence-case">Cato Spelling Bee</span>
                        </div>

                        <div className="event-description">
                            <p>This competition aims to seek out young talents and bring them into the spotlight, as well as  promote literacy among Nigerian student by rewarding learning with amazing prizes and scholarships.</p>
                           
                            <p>
                                The contest is designed to bring out team spirit, innovation, and critical thinking in its contestants. <br />
                                It will be divided into stages, each stage tougher than the last with the top 3 contestants going home with amazing prizes. <br />
                                Contestants will also be required to work in teams and key team-players will be singled out. <br />
                            </p>
                            
                            <p>A study guide will be provided prior to the competition and on registration that will be key in scaling the contest.</p>



                            {/* Every child will be give the opportunity to spell one or two things they've been taught in school. */}
                        </div>



                        <div className="info-box">
                            <div className="title">
                                To Be Eligible
                            </div>

                            <div className="info-body">
                                <ul className="enumeration-list">
                                    <li>
                                        <span>1</span> Contestant must not be older than 14 years
                                    </li>
                                    <li>
                                        <span>2</span> Contestant must live in Nigeria.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="info-box">
                            <div className="title">
                                Criteria
                            </div>

                            <div className="info-body">
                                <ul className="enumeration-list">
                                    <li>
                                        <span>1</span> Contestant must have registered and made full payment prior to the competitoion
                                    </li>
                                    
                                </ul>


                            </div>
                        </div>

                        <div className="info-box">
                            <div className="title">
                                Study Piece
                            </div>

                            <div className="info-body">
                                Contestants are advised to read the following article in preparation for the competition.
                                <div className="file-download-indicator mt-2">
                                    <div className="icon">
                                        <i className="fal fa-file-alt">

                                        </i>
                                    </div>

                                    <div className="file-name">
                                        A trip to the river bank by peter obi and his son
                                    </div>

                                    <div className="download-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-box mt-4">
                            Cato reserves the right to disqualify any contestant who fails to meet up with the requirements, before or during the competition.

                        </div>

                        {/* <div className="event-age">
                        Ages: 6 - 15
                    </div> */}

                        <div className="event-date-price">
                            <div className="event-date">
                                20 August, 2021
                            </div>

                            <div className="event-price">
                                Entry Fee: $5000
                            </div>
                        </div>

                        <div className="center-child-horizontally">
                            <div className="event-cta">
                                Enroll Now
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="event-image">
                        {/* <img src={SpellingBee} alt="" /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentEvent
