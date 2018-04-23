import React from 'react';
import Navigation from '../Navigation';
import "./style.css";
import FormProject from "../FormProject";
import Popup from '../Popup';

export default function Header() {
    return (
        <header className="header" name="header">
            <div className="bg"></div>
            <div className="wrap">
                <Navigation />
                <div className="text-box">
                    <span className="mark">
                        <span>Box solution for conducting ICOs <b>for 40 BTC</b></span>
                    </span>
                    <h1>2 weeks for preparation <br /> + <span>1 month for PR campaign</span></h1>
                    <p className="header__desc">ICOBox is the first and the biggest new generation <span>Blockchain Growth <br />Promoter</span> and
                        <span>Business Facilitator</span> for companies seeking to sell their <br />products via ICO crowdsales                </p>
                    <Popup className="form-project" link={<button className="gradient-btn">Order Now</button>}>
                        <FormProject />
                    </Popup>
                </div>
            </div>
        </header>
    );
}