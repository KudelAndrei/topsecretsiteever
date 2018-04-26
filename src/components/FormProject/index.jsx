import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Calendar from 'react-calendar';
import axios from 'axios';
import Input from '../Input';
import "./style.css";

export default class FormProject extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeTab: 0,
            country: '',
            region: '',
            date: new Date(),
            sent: false,
            load: false,
            ProjectName: '',
            ContactName: '',
            ProjectWeb: '',
            Description: '',
            Tel: '',
            Mail: '',
            Funding: '',
            startedSelect: 'true',
            fundingSelect: 'true',
            businessSelect: 'true',
            investorsSelect: 'true',
            experienceSelect: 'true',
            profitableSelect: 'true',
            sectorSelect: 'Infrastructure',
            developmentSelect: 'Not developed',

        };
        this.handleTab = this.handleTab.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.selectRegion = this.selectRegion.bind(this);
        this.onChangeCalendar = this.onChangeCalendar.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.changeTextArea = this.changeTextArea.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.changeChecked = this.changeChecked.bind(this);
        this.arr = [];
    }

    onChangeCalendar(value){
        this.setState({ date: value })
    }

    handleTab(index){
        this.setState({ activeTab: index });
    }

    selectCountry (val) {
        this.setState({ country: val });
    }

    selectRegion (val) {
        this.setState({ region: val });
    }

    formClear(){
        this.state = {
            activeTab: 0,
            country: '',
            region: '',
            date: new Date(),
            sent: false,
            load: false,
            ProjectName: '',
            ContactName: '',
            ProjectWeb: '',
            Description: '',
            Tel: '',
            Mail: '',
            Funding: '',
            startedSelect: 'true',
            fundingSelect: 'true',
            businessSelect: 'true',
            investorsSelect: 'true',
            experienceSelect: 'true',
            profitableSelect: 'true',
            sectorSelect: 'Infrastructure',
            developmentSelect: 'Not developed',
        };
    }

    submitForm(e){
        e.preventDefault();
        const url = 'https://api.telegram.org/bot';
        const token = '465765796:AAHA5-w2EGDhAtllvFcn6ng6izCYsJg9aqA';
        const chatID = '-315566184';

        this.setState({ load: true });

        let getChecked = '';
        this.arr.map(item => {
            getChecked += `${item}, `;
        });

        let messageText = `Заявка с сайта !%0A` +
        `<b>Project Name:</b> ${this.state.ProjectName};%0A` +
        `<b>Country:</b> ${this.state.country};%0A` +
        `<b>Region:</b> ${this.state.region};%0A` +
        `<b>Contact Name:</b> ${this.state.ContactName};%0A` +
        `<b>WebSite: </b> ${this.state.ProjectWeb};%0A` +
        `<b>Telephone:</b> ${this.state.Tel};%0A ` +
        `<b>E-mail: </b> ${this.state.Mail};%0A` +
        `<b>Have you already started ICO?</b> ${this.state.startedSelect}; %0A` +
        `<b>Date:</b> ${this.state.date};%0A` +
        `<b>Description:</b> ${this.state.Description};%0A` +
        `<b>Have you raised funding before for this or other projects? If yes, how much and what type?:</b> ${this.state.fundingSelect};%0A` +
        `<b>Funding:</b> ${this.state.Funding};%0A` +
        `<b>Do founders or significant team members have executive business experience? -</b> ${this.state.businessSelect};%0A` +
        `<b>Were your previous project(s) funded by other entities? (Investors, funds etc.) -</b> ${this.state.investorsSelect};%0A` +
        `<b>Do founders or significant team members have international scaling experience? -</b> ${this.state.experienceSelect};%0A` +
        `<b>Were your previous project(s) profitable? -</b> ${this.state.profitableSelect};%0A` +
        `<b>Please tell us in what sector of economy you are working -</b> ${this.state.sectorSelect};%0A` +
        `<b>Please tell us in what stage of development your project is -</b> ${this.state.developmentSelect};%0A` +
        `<b>lease, read about our solutions and pick what suits your needs the best - </b> ${getChecked}`
        ;

        // console.log(messageText)
        axios.get(`${url}${token}/sendMessage?chat_id=${chatID}&text=${messageText}&parse_mode=HTML`)
            .then(res => {
                setTimeout(() => {
                    this.setState({ load: false, sent: true });
                }, 200);
                setTimeout(() => {
                    this.formClear();
                }, 2000);
            })
            .catch(err => {
                console.log(err);
            });
    }

    changeInput(type, value){
        switch (type){
            case 'ProjectName':
                this.setState({ ProjectName: value });
                break;
            case 'ContactName':
                this.setState({ ContactName: value });
                break;
            case 'ProjectWeb':
                this.setState({ ProjectWeb: value });
                break;
            case 'Tel':
                this.setState({ Tel: value });
                break;
            case 'Mail':
                this.setState({ Mail: value });
                break;
            case 'funding':
                this.setState({ Funding: value });
                break;
        }
    }

    changeSelect(event){
        const value = event.target.value == 1 ? 'true' : 'false';
        console.log(value)
        switch (event.target.name){
            case 'started':
                this.setState({ startedSelect: value });
                break;
            case 'funding':
                this.setState({ fundingSelect: value });
                break;
            case 'business':
                this.setState({ businessSelect: value });
                break;
            case 'investors':
                this.setState({ investorsSelect: value });
                break;
            case 'experience':
                this.setState({ experienceSelect: value });
                break;
            case 'profitable':
                this.setState({ profitableSelect: value });
                break;
            case 'sector':
                this.setState({ sectorSelect: value });
                break;
            case 'development':
                this.setState({ developmentSelect: value });
                break;

        }
    }

    changeTextArea(event){
        this.setState({ Description: event.target.value})
    }

    changeChecked(event){
        this.arr.indexOf(event.target.value) == -1 ?
            this.arr.push(event.target.value)
        :
            this.arr.splice(this.arr.indexOf(event.target.value), 1)
    }

    render(){
        return(
            <form>
                {
                    this.state.sent ?
                        <div className="form-success">
                            <div className="form-success__icon"><i className="material-icons">done</i></div>
                            <h3 className="form-success__title">Thank you for send message!</h3>
                        </div>
                        :
                        <div className="form-project__wrap">
                            <h3 className="form-project__title">Submit your project</h3>
                            <div className="form-project__container">
                                <div className="form-project__tabs">
                                    <div className={`tab ${this.state.activeTab === 0 ? 'active' : ''}`}
                                         onClick={() => this.handleTab(0)}><span>1.</span> Project details</div>
                                    <div className={`tab ${this.state.activeTab === 1 ? 'active' : ''}`}
                                         onClick={() => this.handleTab(1)}><span>2.</span> Description</div>
                                    <div className={`tab ${this.state.activeTab === 2 ? 'active' : ''}`}
                                         onClick={() => this.handleTab(2)}><span>3.</span> Services</div>
                                </div>
                                {
                                    this.state.activeTab === 0 &&
                                    <div className="form-project__content form-project__content--first">
                                        <div className="form-project__row">
                                            <label className="form-label">
                                                <Input onChange={this.changeInput} typeInput="ProjectName" type="text" placeholder="Project Name*" />
                                            </label>
                                            <label className="form-project__name">
                                                COUNTRY OF PROJECT
                                            </label>
                                            <CountryDropdown
                                                value={this.state.country}
                                                classes="form-project__select"
                                                onChange={(val) => this.selectCountry(val)} />
                                            <RegionDropdown
                                                country={this.state.country}
                                                value={this.state.region}
                                                classes="form-project__select"
                                                onChange={(val) => this.selectRegion(val)} />
                                            <label className="form-label">
                                                <Input onChange={this.changeInput} typeInput="ContactName" type="text" placeholder="Contact Name*" />
                                            </label>
                                            <label className="form-label">
                                                <Input onChange={this.changeInput} typeInput="ProjectWeb" type="text" placeholder="Project website* http(s)://your.site" />
                                            </label>
                                        </div>
                                        <div className="form-project__row">
                                            <label className="form-project__name">
                                                CONTACT PHONE NUMBER
                                            </label>
                                            <label className="form-label">
                                                <Input onChange={this.changeInput} typeInput="Tel" type="text" placeholder="+X XXX XXX XXXX" />
                                            </label>
                                            <label className="form-label">
                                                <Input onChange={this.changeInput} typeInput="Mail" type="text" placeholder="Contact info (e-mail)*" />
                                            </label>
                                            <label className="form-label__default">
                                                <span>Have you already started ICO?</span>
                                                <select onChange={this.changeSelect} name="started" defaultValue="Yes" className="form-project__select">
                                                    <option value="1">Yes</option>
                                                    <option value="0">No</option>
                                                </select>
                                            </label>
                                            <label className="form-label">
                                                <Calendar
                                                    onChangeCalendar={this.onChange}
                                                    value={this.state.date}
                                                />
                                            </label>
                                        </div>
                                        <div className="form-project__row">
                                            <label className="form-label">
                                                <p>Small description <span>(140 words)</span></p>
                                                <textarea onChange={this.changeTextArea} type="Description" className="form-project__textarea" cols="30" rows="10" placeholder=""></textarea>
                                            </label>
                                            <button className="btn" onClick={() => this.handleTab(1)}>Next step</button>
                                        </div>
                                    </div>
                                }
                                {
                                    this.state.activeTab === 1 &&
                                        <div className="form-project__content form-project__content--second form-project__desc">
                                            <label className="form-project__name">
                                                FUNDING
                                            </label>
                                            <div className="form-project__col">
                                                <div className="form-project__row">
                                                    <label className="form-label__text">
                                                        <span>Have you raised funding before for this or other projects? If yes, how much and what type?</span>
                                                        <select onChange={this.changeSelect} name="funding" defaultValue="Yes" className="form-project__select">
                                                            <option value="1">Yes</option>
                                                            <option value="0">No</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                <div className="form-project__row">
                                                    <label className="form-label">
                                                        <Input onChange={this.changeInput} typeInput="funding" type="text" placeholder="Funding" />
                                                    </label>
                                                </div>
                                            </div>
                                            <label className="form-project__name">
                                                EXPERIENCE
                                            </label>
                                            <div className="form-project__col">
                                                <label className="form-label__text form-project__row">
                                                    <span>Do founders or significant team members have executive business experience?</span>
                                                    <select onChange={this.changeSelect} name="business" defaultValue="Yes" className="form-project__select">
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </select>
                                                </label>
                                                <label className="form-label__text form-project__row">
                                                    <span>Were your previous project(s) funded by other entities? (Investors, funds etc.)</span>
                                                    <select onChange={this.changeSelect} name="investors" defaultValue="Yes" className="form-project__select">
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="form-project__col">
                                                <label className="form-label__text form-project__row">
                                                    <span>Do founders or significant team members have international scaling experience?</span>
                                                    <select onChange={this.changeSelect} name="experience" defaultValue="Yes" className="form-project__select">
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </select>
                                                </label>
                                                <label className="form-label__text form-project__row">
                                                    <span>Were your previous project(s) profitable?</span>
                                                    <select onChange={this.changeSelect} name="profitable" defaultValue="Yes" className="form-project__select">
                                                        <option value="1">Yes</option>
                                                        <option value="0">No</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="form-project__col">
                                                <div className="form-project__row form-project__bottom">
                                                    <label className="form-project__name">
                                                        SECTOR OF ECONOMY
                                                    </label>
                                                    <p>Please tell us in what sector of economy you are working.</p>
                                                    <select onChange={this.changeSelect} name="sector" defaultValue="Infrastructure"  className="form-project__select">
                                                        <option value="1">Infrastructure</option>
                                                        <option value="2">Payments</option>
                                                        <option value="3">Trading &amp; Investing</option>
                                                        <option value="4">Finance</option>
                                                        <option value="5">Gaming</option>
                                                        <option value="6">Commerce &amp; Advertising</option>
                                                        <option value="7">Gambling &amp; Betting</option>
                                                        <option value="8">Identity &amp; Reputation</option>
                                                        <option value="9">Data Storage</option>
                                                        <option value="10">Commodities</option>
                                                        <option value="11">Drugs &amp; Healthcare</option>
                                                        <option value="12">Real Estate</option>
                                                        <option value="13">Social Network</option>
                                                        <option value="14">Recruitment</option>
                                                        <option value="15">Communications</option>
                                                        <option value="16">Content Management</option>
                                                        <option value="17">Art &amp; Music</option>
                                                        <option value="18">Events &amp; Entertainment</option>
                                                        <option value="19">Supply Chain &amp; Logistics</option>
                                                        <option value="20">Infrastructure</option>
                                                        <option value="21">Payments</option>
                                                        <option value="22">Trading &amp; Investing</option>
                                                        <option value="23">Finance</option>
                                                        <option value="24">Gaming</option>
                                                        <option value="25">Commerce &amp; Advertising</option>
                                                        <option value="26">Gambling &amp; Betting</option>
                                                        <option value="27">Identity &amp; Reputation</option>
                                                        <option value="28">Data Storage</option>
                                                        <option value="29">Commodities</option>
                                                        <option value="30">Drugs &amp; Healthcare</option>
                                                        <option value="31">Real Estate</option>
                                                        <option value="32">Social Network</option>
                                                        <option value="33">Recruitment</option>
                                                        <option value="34">Communications</option>
                                                        <option value="35">Content Management</option>
                                                        <option value="36">Art &amp; Music</option>
                                                        <option value="37">Events &amp; Entertainment</option>
                                                        <option value="38">Supply Chain &amp; Logistics</option>
                                                        <option value="">Other</option>
                                                    </select>
                                                </div>
                                                <div className="form-project__row form-project__bottom">
                                                    <label className="form-project__name">
                                                        STAGE OF DEVELOPMENT
                                                    </label>
                                                    <p>Please tell us in what stage of development your project is</p>
                                                    <select onChange={this.changeSelect} name="development" defaultValue="Not developed" className="form-project__select">
                                                        <option value="1">Not developed</option>
                                                        <option value="2">Prototype</option>
                                                        <option value="3">Final stage of development</option>
                                                        <option value="4">Developed</option>
                                                    </select>
                                                    {/*<input type="text" placeholder="What is your crowdsale goal? (up to 255 chars)" />*/}
                                                </div>
                                            </div>
                                            <div className="project-form__btn">
                                                <button className="btn" onClick={() => this.handleTab(0)}>back</button>
                                                <button className="btn" onClick={() => this.handleTab(2)}>next step</button>
                                            </div>
                                        </div>
                                }
                                {
                                    this.state.activeTab === 2 &&
                                        <div className="form-project__content form-project__content--last">
                                            <label className="form-project__name">
                                                PRESENTATIONS
                                            </label>
                                            <div className="form-project__col form-project__btn">
                                                <button className="btn-show">Basic Package</button>
                                                <button className="btn-show">Marketing Support</button>
                                            </div>
                                            <label className="form-project__name">
                                                YOUR FUNDING NEEDS
                                            </label>
                                            <p className="text">lease, read about our solutions and pick what suits your needs the best.</p>
                                            <div className="form-project__check">
                                                <div className="simple_checkbox">
                                                    <input onChange={this.changeChecked} className="form-check-input" type="checkbox" name="ICOBox" value="ICOBox"
                                                           id="defaultCheck1" />
                                                        <label htmlFor="defaultCheck1">ICOBox</label>
                                                </div>
                                                <div className="simple_checkbox">
                                                    <input onChange={this.changeChecked} className="form-check-input" type="checkbox" name="Legal" value="Legal"
                                                           id="defaultCheck2" />
                                                    <label htmlFor="defaultCheck2">Legal</label>
                                                </div>
                                                <div className="simple_checkbox">
                                                    <input onChange={this.changeChecked} className="form-check-input" type="checkbox" name="Escrow" value="Escrow"
                                                           id="defaultCheck3" />
                                                    <label htmlFor="defaultCheck3">Escrow</label>
                                                </div>
                                                <div className="simple_checkbox">
                                                    <input onChange={this.changeChecked} className="form-check-input" type="checkbox" name="Marketing" value="Marketing"
                                                           id="defaultCheck4" />
                                                    <label htmlFor="defaultCheck4">Marketing</label>
                                                </div>
                                                <div className="simple_checkbox">
                                                    <input onChange={this.changeChecked} className="form-check-input" type="checkbox" name="Bookbuilding" value="Bookbuilding platform"
                                                           id="defaultCheck5" />
                                                    <label htmlFor="defaultCheck5">Bookbuilding platform</label>
                                                </div>
                                                <div className="simple_checkbox">
                                                    <input onChange={this.changeChecked} className="form-check-input" type="checkbox" name="Store" value="Store"
                                                           id="defaultCheck6" />
                                                    <label htmlFor="defaultCheck6">Store</label>
                                                </div>
                                                <div className="simple_checkbox">
                                                    <input onChange={this.changeChecked} className="form-check-input" type="checkbox" name="Smart" value="Smart contract"
                                                           id="defaultCheck7" />
                                                    <label htmlFor="defaultCheck7">Smart contract</label>
                                                </div>
                                            </div>
                                            <div className="project-form__btn">
                                                <button className="btn" onClick={() => this.handleTab(1)}>back</button>
                                                {
                                                    this.state.load ?
                                                        <button className="btn btn-load" disabled><i className="material-icons">replay</i> loading...</button>
                                                        :
                                                        <button className="btn" onClick={this.submitForm}>submit</button>
                                                }
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    }
            </form>
        );
    }
}