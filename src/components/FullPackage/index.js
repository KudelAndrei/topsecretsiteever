import React from 'react';
import Popup from '../Popup/';
import "./style.css";

export default function FullPackage() {
    return (
        <div className="full-package">
            <h3 className="full-package-title">Don't need a full Basic Package?</h3>
            <div className="full-package-lists">
                <div className="package-item">
                    <div className="package-item__top">
                        <h4 className="package-item__title">STAND-ALONE</h4>
                        <p className="package-item__desc">TECHNOLOGY PACKAGE</p>
                        <Popup className="package-popup" link={<button className="package-item__link">More info</button>}>
                            <h3 className="package-popup__title"><strong>STAND-ALONE</strong> TECHNOLOGY PACKAGE</h3>
                            <ul className="package-popup__lists">
                                <li>Ethereum smart contract</li>
                                <li>Smart contract management system</li>
                                <li>Book building platform with 70+ cryptocurrencies and USD/EUR invoices</li>
                                <li>Consultations by developers on setting up technology tools</li>
                                <li>Automatic KYC/AML compliance, free recognition of up to 3,000 customers included</li>
                            </ul>
                            <div className="package-popup__bottom">26 BTC + 1.5% SUCCESS FEE</div>
                        </Popup>
                    </div>
                    <div className="package-item__bottom">
                        26 BTC <span> + 1.5% SUCCESS FEE</span>
                    </div>
                </div>
                <div className="package-item">
                    <div className="package-item__top">
                        <h4 className="package-item__title">STAND-ALONE</h4>
                        <p className="package-item__desc">TECHNOLOGY PACKAGE</p>
                        <button className="package-item__link">More info</button>
                    </div>
                    <div className="package-item__bottom">
                        26 BTC <span> + 1.5% SUCCESS FEE</span>
                    </div>
                </div>
            </div>
            <h3 className="full-package-title">Need more than Basic?</h3>
            <div className="full-package-lists full-package-lists__three">
                <div className="package-item">
                    <div className="package-item__top">
                        <h4 className="package-item__title">STAND-ALONE</h4>
                        <p className="package-item__desc">TECHNOLOGY PACKAGE</p>
                        <button className="package-item__link">More info</button>
                    </div>
                    <div className="package-item__bottom">
                        26 BTC <span> + 1.5% SUCCESS FEE</span>
                    </div>
                </div>
                <div className="package-item">
                    <div className="package-item__top">
                        <h4 className="package-item__title">STAND-ALONE</h4>
                        <p className="package-item__desc">TECHNOLOGY PACKAGE</p>
                        <button className="package-item__link">More info</button>
                    </div>
                    <div className="package-item__bottom">
                        26 BTC <span> + 1.5% SUCCESS FEE</span>
                    </div>
                </div>
                <div className="package-item">
                    <div className="package-item__top">
                        <h4 className="package-item__title">STAND-ALONE</h4>
                        <p className="package-item__desc">TECHNOLOGY PACKAGE</p>
                        <button className="package-item__link">More info</button>
                    </div>
                    <div className="package-item__bottom">
                        26 BTC <span> + 1.5% SUCCESS FEE</span>
                    </div>
                </div>
            </div>
            <button className="btn">order now</button>
        </div>
    );
}