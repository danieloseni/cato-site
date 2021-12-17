import React from 'react'
import SpellingBee from 'images/spelling-bee.png'

const CurrentEvent = () => {
    return (
        <section class="current-event">
        <div class="dual-box escape-padding">
            <div class="section">
                <div class="event-box">
                    <div class="event-title">
                        UPCOMING EVENT: CATO SPELLING BEE
                    </div>

                    <div class="event-description">
                        Every child will be give the opportunity to spell one or two things they've been taught in school.
                    </div>

                    

                    <div className="info-box">
                        <div className="title">
                            Criteria
                        </div>

                        <div className="info-body">
                            <ul className="enumeration-list">
                                <li>
                                   <span>1</span> Contestant must not be older than 14 years
                                </li>
                                <li>
                                    <span>2</span> Cato reserves the right to disqualify any contestant who failes to meet up with the requirements, before or during the competition.
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
                            <div className="file-download-indicator mt-4">
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

                    <div class="event-age">
                        Ages: 6 - 15
                    </div>

                    <div class="event-date-price">
                        <div class="event-date">
                            20 August, 2021
                        </div>

                        <div class="event-price">
                            Entry Fee: $5000
                        </div>
                    </div>

                    <div class="center-child-horizontally">
                        <div class="event-cta">
                            Enroll Now
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="event-image">
                    <img src={SpellingBee} alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default CurrentEvent
