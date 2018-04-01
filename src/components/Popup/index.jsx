import React, { Component } from 'react';
import "./style.css";

export default class Popup extends Component {
    constructor(props){
        super(props);
        this.state = { open: false };
        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup(){
        this.setState({ open: !this.state.open }, () => {
            this.state.open ? document.body.classList.add('open') : document.body.classList.remove('open');
        });
    }

    render(){
        const className = this.props.className ? this.props.className : '';
        return(
            <React.Fragment>
                <div className="popup-link" onClick={this.togglePopup}>{this.props.link}</div>
                {
                    this.state.open ?
                    <div className="popup-wrap">
                        <div className="popup-bg" onClick={this.togglePopup}></div>
                        <div className={`popup ${className}`}>
                            <div className="popup-close" onClick={this.togglePopup}><i className="material-icons">close</i></div>
                            <div className="popup__content">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </React.Fragment>
        );
    }
}