import React, { Component } from 'react';
import "./style.css";

export default class Package extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 'technology' };
        this.handleTab = this.handleTab.bind(this);
    }

    handleTab(title){
        this.setState({ activeTab: title });
    }

    render(){
        return(
            <div className="package">
                <h3 className="package-title">Basic Package includes</h3>
                <div className="tabs">
                    <div className={`tab ${this.state.activeTab === 'technology' ? 'active' : ''}`}
                        onClick={() => this.handleTab('technology')}>Technology</div>
                    <div className={`tab ${this.state.activeTab === 'review' ? 'active' : ''}`}
                         onClick={() => this.handleTab('review')}>Legal review</div>
                    <div className={`tab ${this.state.activeTab === 'bonus' ? 'active' : ''}`}
                         onClick={() => this.handleTab('bonus')}>Bonus</div>
                </div>
                {
                    this.state.activeTab === 'technology' &&
                    <div className="technology-section">
                        <h4 className="technology-section-title">SMART CONTRACT</h4>
                        <p className="technology-section-desc">Reliable solution for your token development</p>
                        <div className="lists">
                            <div className="col">
                                <div className="col-title">ERC-20 universal standard</div>
                                <p className="col-desc">Simplify integration with exchanges and other services</p>
                            </div>
                            <div className="col">
                                <div className="col-title">ERC-20 universal standard</div>
                                <p className="col-desc">Simplify integration with exchanges and other services</p>
                            </div>
                        </div>
                        <h4 className="technology-section-title">Book building platform</h4>
                        <p className="technology-section-desc">Customized solution for your needs</p>
                        <div className="lists">
                            <div className="col">
                                <div className="col-title">40 ICO features to choose from</div>
                                <p className="col-desc">Customize technology for your project</p>
                            </div>
                            <div className="col">
                                <div className="col-title">Set up the platform on your own web site</div>
                                <p className="col-desc">Bring your audience to your own site right from the start</p>
                            </div>
                            <div className="col">
                                <div className="col-title">Payments in fiat and 70+ coins</div>
                                <p className="col-desc">Don't lose clients over payment limitations</p>
                            </div>
                        </div>
                        <p className="technology-section-desc">Automate your sales processe</p>
                        <div className="lists">
                            <div className="col">
                                <div className="col-title">Built-in calculator with actual rates</div>
                                <p className="col-desc">Avoid client complaints due to rates volatility</p>
                            </div>
                            <div className="col">
                                <div className="col-title">Bonuses, promo codes, private sales</div>
                                <p className="col-desc">Automate custom pricing and motivation programs</p>
                            </div>
                            <div className="col">
                                <div className="col-title">Four-tier referral program</div>
                                <p className="col-desc">Transform your clients into your sales agents</p>
                            </div>
                            <div className="col">
                                <div className="col-title">Unique promo tokens technology</div>
                                <p className="col-desc">Send special deals to all holders of ETH wallets matching
                                    specific parameters</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.activeTab === 'review' &&
                    <div className="technology-section">
                        <h4 className="technology-section-title">Legal compliance with the US regulations</h4>
                        <p className="technology-section-desc">Legal advice by specialists experienced in ICO</p>
                        <div className="lists">
                            <div className="col">
                                <div className="col-title">ERC-20 universal standard</div>
                                <p className="col-desc">Simplify integration with exchanges and other services</p>
                            </div>
                            <div className="col">
                                <div className="col-title">ERC-20 universal standard</div>
                                <p className="col-desc">Simplify integration with exchanges and other services</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.activeTab === 'bonus' &&
                    <div className="technology-section">
                        <h4 className="technology-section-title">Bonus: ICO business and marketing expertise</h4>
                        <p className="technology-section-desc">Ensure soundness of the business model at the root of your ICO</p>
                        <div className="lists">
                            <div className="col">
                                <div className="col-title">ERC-20 universal standard</div>
                                <p className="col-desc">Simplify integration with exchanges and other services</p>
                            </div>
                            <div className="col">
                                <div className="col-title">ERC-20 universal standard</div>
                                <p className="col-desc">Simplify integration with exchanges and other services</p>
                            </div>
                        </div>
                    </div>
                }
                <div className='package-bottom'>
                    <div className="basic-price">basic package <br/> price</div>
                    <div className="amount">40</div>
                    <div className="basic-value"><span>BTC</span><br/><strong>3% SUCCESS FEE</strong></div>
                </div>
            </div>
        );
    }
}