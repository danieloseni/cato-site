import React from 'react'
import Netflix from 'images/netflix.png';
import Nestle from 'images/nestle.png'
import Always from 'images/always.png'
import Cadbury from 'images/cadbury.png'
import Maggi from 'images/maggi..png'
import Mtn from 'images/mtn.png';
import Airtel from 'images/airtel.png'
import Zenith from 'images/zenith-bank.png'
import Glo from 'images/glo.png';
import GTBank from 'images/gtbank.png';

const Sponsors = () => {
    return (
        <section class="sponsors">
            <div class="title">
                Catotournament is Proudly Sponsored by
            </div>

            <div class="sponsor-grid">
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Netflix} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Nestle} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Always} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Cadbury} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Maggi} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Mtn} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Airtel} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Zenith} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={Glo} alt="" />
                    </div>
                </div>
                <div class="sponsor">
                    <div class="sponsor-logo">
                        <img src={GTBank} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
