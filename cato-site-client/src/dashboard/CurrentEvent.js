import React from 'react'

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
                    <img src="images/spelling-bee.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default CurrentEvent
