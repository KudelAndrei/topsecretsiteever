import React from 'react';
import "./style.css";

import image1 from './images/moskovski.jpg';

export default function Team() {
    return (
        <section className="team" name="team">
            <div className="team-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h2 className="team-title">Team</h2>
            <div className="team-container">
                <div className="item">
                    <div className="img">
                        <div><img src={image1} alt="" /></div>
                    </div>
                    <div className="name">Alex Moskovski<br />CEO</div>
                    <a href="#" target="_blank">LinkedIn</a>
                </div>
                <div className="item">
                    <div className="img">
                        <div><img src={image1} alt="" /></div>
                    </div>
                    <div className="name">Alex Moskovski<br />CEO</div>
                    <a href="#" target="_blank">LinkedIn</a>
                </div>
                <div className="item">
                    <div className="img">
                        <div><img src={image1} alt="" /></div>
                    </div>
                    <div className="name">Alex Moskovski<br />CEO</div>
                    <a href="#" target="_blank">LinkedIn</a>
                </div>
                <div className="item">
                    <div className="img">
                        <div><img src={image1} alt="" /></div>
                    </div>
                    <div className="name">Alex Moskovski<br />CEO</div>
                    <a href="#" target="_blank">LinkedIn</a>
                </div>
                <div className="item">
                    <div className="img">
                        <div><img src={image1} alt="" /></div>
                    </div>
                    <div className="name">Alex Moskovski<br />CEO</div>
                    <a href="#" target="_blank">LinkedIn</a>
                </div>
            </div>
        </section>
    );
}