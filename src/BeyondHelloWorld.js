import React from 'react';
import './stylesheets/BeyondHelloWorld.css';

import BHW from './assets/bhw.png';

function BeyondHelloWorld() {
    return (
        <div className="mainDiv">
            <div className="card">
                <div className="cardContainer">
                    <div className="imageWrapper">
                        <img src={BHW} className="bhwImage"/>
                    </div>
                    <div class="bhwText">
                        <span className="bhwTitle">BeyondHelloWorld</span>
                        <span className="fadedTitle">Beyond</span>
                        <span className="bhwDescription">BeyondHelloWorld is a learning community for budding programmers. It is aimed at equipping amateurs with easy knowledge of the tech world through engaging content like New Tech information, tips & tricks & BTS of a developers life!</span>
                        <span className="bhwDescription">A lot of community problems can be solved using technology. BeyondHelloWorld aims to influence non-programmers into the world of programming.</span>
                        <a href="https://www.instagram.com/beyondhelloworld/"><button className="btn btn-outline-light btn-lg">Visit</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeyondHelloWorld
