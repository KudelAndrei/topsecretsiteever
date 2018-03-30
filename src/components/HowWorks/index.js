import React from 'react';
import works from './style.css';
import bonus from './images/bonus.svg';
import Package from '../Package/';
import FullPackage from '../FullPackage/';

export default function HowWorks(){
    return(
        <section className="works">
            <h2 className="works-title">How Icobox works</h2>
            <div className="works-cards">
                <div className="card">
                    <h3 className="card-title">Basic package</h3>
                    <ul className="card-items">
                        <li><b>Technology</b><br/><span>solution</span></li>
                        <li>
                            <span className="card-item__icon"><i className="material-icons">add</i></span>
                            <b>Legal</b><br/><span>solution</span>
                        </li>
                        <li className="card-item__bonus">
                            <img src={bonus} alt="" />
                            <span className="card-item__icon"><i className="material-icons">add</i></span>
                            <b>Business</b><br/><span>consulting</span>
                        </li>
                        <li className="card-item__bonus">
                            <img src={bonus} alt="" />
                            <span className="card-item__icon"><i className="material-icons">add</i></span>
                            <b>Marketing</b><br/><span>consulting</span>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <h3 className="card-title">Additional packages</h3>
                    <ul className="card-items">
                        <li><b>MARKETING</b><br/><span>SUPPORT</span></li>
                        <li><b>LANDING</b><br/><span>PAGE</span></li>
                        <li><b>WHITE</b><br/><span>PAPER</span></li>
                    </ul>
                </div>
            </div>
            <Package />
            <FullPackage />
        </section>
    );
}