import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import "./style.css";

export default class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = { viewport: {}, openMenu: false };
        this.resizeMixin = this.resizeMixin.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.renderMobileMenu = this.renderMobileMenu.bind(this);
    }

    componentDidMount(){
        window.addEventListener('load', this.resizeMixin);
        window.addEventListener('resize', this.resizeMixin);
        scrollSpy.update();
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeMixin);
    }

    resizeMixin(){
        this.setState({
            viewport: {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        });
    }

    toggleMenu(){
        this.setState({
            toggleMenu: !this.state.toggleMenu
        });
    }

    renderMobileMenu(){
        return (
            <React.Fragment>
                <ul className="mobile-menu">
                    <button className="mobile-menu__close" onClick={this.toggleMenu}><i className="material-icons">close</i></button>
                    <Link activeClass="active" to="header" spy={true} smooth={true} className="mobile-menu__link">ICOS</Link>
                    <Link activeClass="active" to="" className="mobile-menu__link">Store</Link>
                    <Link activeClass="active" to="" className="mobile-menu__link">Services</Link>
                    <Link activeClass="active" to="" className="mobile-menu__link">Team</Link>
                    <Link activeClass="active" to="" className="mobile-menu__link">Contacts</Link>
                    <Link activeClass="active" to="" className="mobile-menu__link">Media</Link>
                    <li className="mobile-menu__telegram">
                        <a href="#" className="menu__link menu__link-telega" target="_blank"><i className="material-icons">send</i><span>ru</span></a>
                        <a href="#" className="menu__link menu__link-telega" target="_blank"><i className="material-icons">send</i><span>ip</span></a>
                        <a href="#" className="menu__link menu__link-telega" target="_blank"><i className="material-icons">send</i><span>en</span></a>
                    </li>
                </ul>
            </React.Fragment>
        );
    }

    render(){
        const mobileViewPort = 800;
        return (
            <nav>
                <Link activeClass="active" spy={true} smooth={true} to="header" className="logo">logo</Link>

                {
                    this.state.viewport.width < mobileViewPort ?
                        <button className="toggle-menu" onClick={this.toggleMenu}><i className="material-icons">menu</i></button>
                        :
                        <ul className="menu">
                            <Link to="header" spy={true} smooth={true} activeClass="active" className="menu__link">Home</Link>
                            <Link to="telegram" spy={true} smooth={true} activeClass="active" className="menu__link">Telegram Promotion</Link>
                            <Link to="clients" spy={true} smooth={true} activeClass="active" className="menu__link">Our clients</Link>
                            <Link to="works" spy={true} smooth={true} activeClass="active" className="menu__link">How works</Link>
                            <Link to="basic" spy={true} smooth={true} activeClass="active" className="menu__link">Basic Package</Link>
                            <Link to="team" spy={true} smooth={true} activeClass="active" className="menu__link">Team</Link>
                            <Link to="contact" spy={true} smooth={true} activeClass="active" className="menu__link">Contact</Link>

                            <a href="#" className="menu__link menu__link-telega" target="_blank"><i className="material-icons">send</i><span>ru</span></a>
                            <a href="#" className="menu__link menu__link-telega" target="_blank"><i className="material-icons">send</i><span>ip</span></a>
                            <a href="#" className="menu__link menu__link-telega" target="_blank"><i className="material-icons">send</i><span>en</span></a>
                        </ul>
                }
                {
                    this.state.toggleMenu && this.renderMobileMenu()
                }
            </nav>
        );
    }
}