import React from 'react';
import Form from '../Form/';
import "./style.css";
import team from './images/team.svg';
import continents from './images/continents.svg';
import clients from './images/clients.svg';
import polygon from './images/polygon.svg';

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-info">
                <div className="info-item">
                    <div className="info-item__number" style={{backgroundImage: `url(${polygon})`}}>80+</div>
                    <div className="info-item__value">
                        <img src={team} alt="" />
                        <h3 className="info-item__title">Team Members</h3>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-item__number" style={{backgroundImage: `url(${polygon})`}}>3</div>
                    <div className="info-item__value">
                        <img src={continents} alt="" />
                        <h3 className="info-item__title">Continents</h3>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-item__number" style={{backgroundImage: `url(${polygon})`}}>40</div>
                    <div className="info-item__value">
                        <img src={clients} alt="" />
                        <h3 className="info-item__title">Clients</h3>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-item__number" style={{backgroundImage: `url(${polygon})`}}>$</div>
                    <div className="info-item__value">
                        <span className="info-item__img">300M+</span>
                        <h3 className="info-item__title">Collected</h3>
                    </div>
                </div>
            </div>
            <div className="footer-feedback" name="contact">
                <Form />
                <a href="#" className="footer-feedback__link">Or apply for basic 40 BTC package for free!</a>
                <div className="footer-icons">
                    <a className="soc-icon" target="_blank">
                        <i className="material-icons">brightness_medium</i>
                        <span>en</span>
                    </a>
                    <a className="soc-icon" target="_blank">
                        <i className="material-icons">brightness_medium</i>
                        <span>jp</span>
                    </a>
                    <a className="soc-icon" target="_blank">
                        <i className="material-icons">brightness_medium</i>
                        <span>en</span>
                    </a>
                    <a className="soc-icon" target="_blank">
                        <i className="material-icons">brightness_medium</i>
                        <span>jp</span>
                    </a>
                    <a className="soc-icon" target="_blank">
                        <i className="material-icons">brightness_medium</i>
                    </a>
                </div>
                <p className="copyright">Copyright TopSecretSiteEver © 2018</p>
            </div>
        </footer>
    );
}