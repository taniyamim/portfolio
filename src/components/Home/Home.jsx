import React from 'react';
import Banner from '../Bannner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import { Helmet } from 'react-helmet';
import { Fade, AttentionSeeker, Slide } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Taniya || Portfolio || Home</title>

            </Helmet>
            <Fade>
                <Banner></Banner>
            </Fade>
            <AttentionSeeker animate__lightSpeedInRight>
                <About></About>
            </AttentionSeeker>

            <Skills></Skills>
        </div>
    );
};

export default Home;