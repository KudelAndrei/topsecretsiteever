import React, { Component } from 'react';
import "./style.css";

export default class Form extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form className="form form-transparent">
                <h2 className="form-title">Contact us</h2>
                <div className="form-row">
                    <label className="form-label"><input type="text" placeholder="Full Name" required /></label>
                    <label className="form-label"><input type="email" placeholder="Email" required /></label>
                </div>
                <div className="form-row">
                    <label className="form-label"><input type="text" placeholder="Project Name" required /></label>
                    <label className="form-label"><input type="phone" placeholder="Telephone" required /></label>
                </div>
                <div className="form-row">
                    <label className="form-label"><input type="text" placeholder="Message" required /></label>
                </div>
                <button className="btn">send</button>
            </form>
        );
    }
}