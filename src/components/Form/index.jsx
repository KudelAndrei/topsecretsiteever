import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input/';
import "./style.css";

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            email: '',
            projectName: '',
            telephone: '',
            message: '',
            load: false,
            sent: false
        }
        this.changeInput = this.changeInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.formClear = this.formClear.bind(this);
    }

    changeInput(type, value){
        switch (type){
            case 'fullName':
                this.setState({ fullName: value });
                break;
            case 'email':
                this.setState({ email: value });
                break;
            case 'projectName':
                this.setState({ projectName: value });
                break;
            case 'telephone':
                this.setState({ telephone: value });
                break;
            case 'message':
                this.setState({ message: value });
                break;
        }
    }

    formClear(){
        this.setState({
            fullName: '',
            email: '',
            projectName: '',
            telephone: '',
            message: '',
            sent: false,
            load: false
        });
    }

    submitForm(e){
        e.preventDefault();
        const url = 'https://api.telegram.org/bot';
        const token = '465765796:AAHA5-w2EGDhAtllvFcn6ng6izCYsJg9aqA';
        const chatID = '-315566184';

        this.setState({ load: true });

        let messageText = `Заявка с сайта TopSecretSiteEver! <b>Full Name:</b> ${this.state.fullName}; <b>Email:</b> ${this.state.email}; <b>Project Name:</b> ${this.state.projectName}; <b>Telephone: </b> ${this.state.telephone}; <b>Message:</b> ${this.state.message}.`;

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

    render(){
        const className = this.props.className ? this.props.className : '';
        return(
            <React.Fragment>
                {
                    this.state.sent ?
                        <div className="form-success">
                            <div className="form-success__icon"><i className="material-icons">done</i></div>
                            <h3 className="form-success__title">Thank you for send message!</h3>
                        </div>
                        :
                        <form className={`form ${className}`} onSubmit={this.submitForm}>
                            <h2 className="form-title">Contact us</h2>
                            <div className="form-row">
                                <label className="form-label"><Input onChange={this.changeInput} typeInput="fullName" type="text" placeholder="Full Name" /></label>
                                <label className="form-label"><Input onChange={this.changeInput} typeInput="email" type="email" placeholder="Email" /></label>
                            </div>
                            <div className="form-row">
                                <label className="form-label"><Input onChange={this.changeInput} typeInput="projectName" type="text" placeholder="Project Name" /></label>
                                <label className="form-label"><Input onChange={this.changeInput} typeInput="telephone" type="text" placeholder="Telephone" /></label>
                            </div>
                            <div className="form-row">
                                <label className="form-label"><Input onChange={this.changeInput} typeInput="message" type="text" placeholder="Message" /></label>
                            </div>
                            {
                                this.state.load ?
                                    <button className="btn btn-load" disabled><i className="material-icons">replay</i> loading...</button>
                                    :
                                    <button className="btn" type="submit">send</button>
                            }
                        </form>
                }
            </React.Fragment>
        );
    }
}