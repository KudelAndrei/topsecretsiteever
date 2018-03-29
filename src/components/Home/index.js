import React from 'react';
import Header from '../Header/';
import Clients from '../Clients/';
import Team from '../Team/';
import HowWorks from '../HowWorks/';
import Footer from '../Footer/';

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Clients />
            <HowWorks />
            <Team />
            <Footer />
        </React.Fragment>
    );
}