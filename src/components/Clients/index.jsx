import React, { Component } from 'react';
import Form from '../Form/';
import Popup from '../Popup/';
import "./style.css";

import onewo from "./images/1wo.png";
import crypterium from './images/crypterium.jpeg';
import genie from './images/genie.jpg';
import icos from './images/icos.png';
import ins from './images/Ins.png';
import paragon from './images/paragon.png';
import play2live from './images/play2live.jpg';
import ended from './images/ended.svg';

export default class Clients extends Component {
    constructor(props){
        super(props);
        this.state = { showAll: false };
        this.showAll = this.showAll.bind(this);
    }

    showAll(){
        this.setState({ showAll: true });
    }

    render(){
        return(
            <section className="clients">
                <h2 className="clients__title">$300M+ collected for our clients, and counting</h2>
                <div className="clients__cards">
                    <li className="clients__item">
                        <a href="#">
                            <figure>
                                <img className="clients__item-sticker" src={ended} />
                                <div className="clients__item-image" style={{backgroundImage: `url('${genie}')`}}></div>
                                <div className="hover">
                                    <p className="title">Genie</p>
                                </div>
                            </figure>
                            <footer>
                                <span>Collected</span>
                                <strong>$5,500,000</strong>
                            </footer>
                        </a>
                    </li>
                    <li className="clients__item">
                        <a href="#">
                            <figure>
                                <img className="clients__item-sticker" src={ended} />
                                <div className="clients__item-image" style={{backgroundImage: `url('${play2live}')`}}></div>
                                <div className="hover">
                                    <p className="title">Play2live</p>
                                </div>
                            </figure>
                            <footer>
                                <span>Collected</span>
                                <strong>$30,000,000</strong>
                            </footer>
                        </a>
                    </li>
                    <li className="clients__item">
                        <a href="#">
                            <figure>
                                <img className="clients__item-sticker" src={ended} />
                                <div className="clients__item-image" style={{backgroundImage: `url('${ins}')`}}></div>
                                <div className="hover">
                                    <p className="title">Instamart</p>
                                </div>
                            </figure>
                            <footer>
                                <span>Collected</span>
                                <strong>$60,000,000</strong>
                            </footer>
                        </a>
                    </li>
                    {
                        !this.state.showAll ?
                            <button className="btn-show" onClick={this.showAll}>Show all</button>
                            :
                            <React.Fragment>
                                <li className="clients__item">
                                    <a href="#">
                                        <figure>
                                            <img className="clients__item-sticker" src={ended} />
                                            <div className="clients__item-image" style={{backgroundImage: `url('${crypterium}')`}}></div>
                                            <div className="hover">
                                                <p className="title">Crypterium</p>
                                            </div>
                                        </figure>
                                        <footer>
                                            <span>Collected</span>
                                            <strong>$51,000,000</strong>
                                        </footer>
                                    </a>
                                </li>
                                <li className="clients__item">
                                    <a href="#">
                                        <figure>
                                            <img className="clients__item-sticker" src={ended} />
                                            <div className="clients__item-image" style={{backgroundImage: `url('${icos}')`}}></div>
                                            <div className="hover">
                                                <p className="title">Icos</p>
                                            </div>
                                        </figure>
                                        <footer>
                                            <span>Collected</span>
                                            <strong>$14,600,000</strong>
                                        </footer>
                                    </a>
                                </li>
                                <li className="clients__item">
                                    <a href="#">
                                        <figure>
                                            <img className="clients__item-sticker" src={ended} />
                                            <div className="clients__item-image" style={{backgroundImage: `url('${paragon}')`}}></div>
                                            <div className="hover">
                                                <p className="title">Icos</p>
                                            </div>
                                        </figure>
                                        <footer>
                                            <span>Paragon</span>
                                            <strong>$70,600,000 tokens</strong>
                                        </footer>
                                    </a>
                                </li>
                                <li className="clients__item">
                                    <a href="#">
                                        <figure>
                                            <img className="clients__item-sticker" src={ended} />
                                            <div className="clients__item-image" style={{backgroundImage: `url('${onewo}')`}}></div>
                                            <div className="hover">
                                                <p className="title">1World Online</p>
                                            </div>
                                        </figure>
                                        <footer>
                                            <span>Paragon</span>
                                            <strong>$70,600,000 tokens</strong>
                                        </footer>
                                    </a>
                                </li>
                                <Popup link={<button className="btn">WANNA BE THE NEXT BIG THING?</button>}>
                                    <Form />
                                </Popup>
                            </React.Fragment>
                    }
                </div>
            </section>
        );
    }
}