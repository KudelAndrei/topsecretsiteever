import React from 'react';
import Header from '../Header/';
import TelegramPromotion from '../TelegramPromotion/'
import Clients from '../Clients/';
import Team from '../Team/';
import HowWorks from '../HowWorks/';
import Footer from '../Footer/';

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <TelegramPromotion />
            <Clients />
            <HowWorks />
            <Team />
            <Footer />
        </React.Fragment>
    );
}