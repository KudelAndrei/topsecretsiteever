import React from 'react';
import Popup from '../Popup/';
import Form from '../Form';
import "./style.css";

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';

export default function TelegramPromotion(props) {
    return(
        <div className='telegram-promotion' name="telegram">
            <h2>Telegram Promotion</h2>
            <div className="container">
                <div className="block">
                    <div className="block-img"><img src={image1} alt="Telegram"/></div>
                    <div className="block-content">
                        <div className="block-top">ACTIVE DISCUSSION ON THE TOP MESSENGER FOR CRYPTO COMMUNITY</div>
                        <h3 className="block-title">Telegram.org</h3>
                        <p className="block-desc">There are more than 100 accounts at out disposal from which we lead live communication, create a buzz about your project in crypto/ICO related Telegram groups by asking inquiring questions, provide dialogues, conversations.</p>
                        <div className="block-buttons">
                            <a href="#" className="btn">Learn more</a>
                            <Popup link={<button className="btn-show">Ask for price</button>}>
                                <Form />
                            </Popup>
                        </div>
                    </div>
               </div>

                <div className="block">
                    <div className="block-img"><img src={image2} alt="Telegram"/></div>
                    <div className="block-content">
                        <div className="block-top">Sending Bulk Messages in Telegram</div>
                        <h3 className="block-title">Telegram.org</h3>
                        <p className="block-desc">Sending personal messages to targeted members and potential investors who are interested in ICO's. <br/>  1) We send PM with any text that you provide to the members of groups like bancor, OMG, civic etc. or any other. We use our own unique base of potential investors who can be interested in your ICO as well. Your text could be a description of a project with as an invitation to join your channel/group as well as with links to your website, whitepaper, description etc. We send everything you want.  </p>
                        <div className="block-buttons">
                            <a href="#" className="btn">Learn more</a>
                            <Popup link={<button className="btn-show">Ask for price</button>}>
                                <Form />
                            </Popup>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="block-img"><img src={image3} alt="Telegram"/></div>
                    <div className="block-content">
                        <div className="block-top">Bringing the project to cryptocurrency exchanges</div>
                        <h3 className="block-title">Exchanges</h3>
                        <p className="block-desc">After successful ICO stages, your project will have to add its tokens to the cryptocurrency exchange. This will provide investors with the potential to sell tokens they previously bought. <br/> Our team offers a full range of consulting services for the choice of an exchange for your project and the support of token placement.
                            <br/> <br/>
                            <strong>Our main advantages:</strong> <br/>
                            1. Wide choice of potential exchanges <br/>
                            2. Support at all transaction stages <br/>
                            3. Fixed terms for entering an exchange <br/>
                            4. Attractive financial conditions <br/>
                        </p>
                        <div className="block-buttons">
                            <a href="#" className="btn">Learn more</a>
                            <Popup link={<button className="btn-show">Ask for price</button>}>
                                <Form />
                            </Popup>

                        </div>
                    </div>
                </div>
            </div>

           <div className="telegram-promotion-bottom">
               <h2>Other promotion</h2>
               <div className="container">

                   <div className="block">
                       <div className="block-img"><img src={image4} alt="Telegram"/></div>
                       <div className="block-content">
                           <div className="block-top">ADVERTISING ON THE MOST FAMOUS FORUM ABOUT ICO</div>
                           <h3 className="block-title">Reddit.com</h3>
                           <p className="block-desc">There are more than 200 accounts on Reddit at our disposal. Using them we begin creating live communication on subreddit by adding new posts in the form of links to media / YouTube / social networks or issues that we ourselves start discussing. To increase activity, we also write comments to already existing posts: dialogues and questions to developers, responds to the real users to unfold communication.</p>
                           <div className="block-buttons">
                               <Popup link={<button className="btn-show">Ask for price</button>}>
                                   <Form />
                               </Popup>
                           </div>
                       </div>
                   </div>

                   <div className="block">
                       <div className="block-img"><img src={image5} alt="Telegram"/></div>
                       <div className="block-content">
                           <div className="block-top">ACOMMENTING YOURTHREAD USING TOP ACCOUNTS</div>
                           <h3 className="block-title">Bitcointalk.org</h3>
                           <p className="block-desc">There are more than 400 big bitcointalk accounts at our disposal (status member+). Using them we add positive messages and questions on forum in your thread. We create very positive wave on forum + your thread will be always on TOP of forum. It's one of the most successful type of advertising these days regarding popularity of Bitcointalk forum.</p>
                           <div className="block-buttons">
                               <Popup link={<button className="btn-show">Ask for price</button>}>
                                   <Form />
                               </Popup>
                           </div>
                       </div>
                   </div>

                   <div className="block">
                       <div className="block-img"><img src={image6} alt="Telegram"/></div>
                       <div className="block-content">
                           <div className="block-top">One of the most successful and popular promotions on the market</div>
                           <h3 className="block-title">Mass Media</h3>
                           <p className="block-desc">We are one of the leaders on the market working with more than 35 mass medias at the moment. <br/>
                               <br/> Your idea will be featured on the best possible platforms to catch the interest of your audience and potential investors. Promote your project on best websites, such as Forbes, USATODAY, INC, Business.com, Tech.co, Newsmax, Coinshedule, CCN, Coindesk, TNW, Odysseyonline, Hacked, IBM, Yourstory, investing.com, seekingalpha and others</p>
                           <div className="block-buttons">
                               <Popup link={<button className="btn-show">Ask for price</button>}>
                                   <Form />
                               </Popup>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
        </div>
    );
}