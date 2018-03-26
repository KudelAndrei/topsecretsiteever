import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="" className="mobile-menu__link">ICOS</Link>
                    <Link to="" className="mobile-menu__link">Store</Link>
                    <Link to="" className="mobile-menu__link">Services</Link>
                    <Link to="" className="mobile-menu__link">Team</Link>
                    <Link to="" className="mobile-menu__link">Contacts</Link>
                    <Link to="" className="mobile-menu__link">Media</Link>
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
                <Link to="/" className="logo">logo</Link>

                {
                    this.state.viewport.width < mobileViewPort ?
                        <button className="toggle-menu" onClick={this.toggleMenu}><i className="material-icons">menu</i></button>
                        :
                        <ul className="menu">
                            <Link to="" className="menu__link">ICOS</Link>
                            <Link to="" className="menu__link">Store</Link>
                            <Link to="" className="menu__link">Services</Link>
                            <Link to="" className="menu__link">Team</Link>
                            <Link to="" className="menu__link">Contacts</Link>
                            <Link to="" className="menu__link">Media</Link>

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