import React from 'react';
import About from "../components/About/About";
import Summary from "../components/Summary/Summary";
import Footer from "../components/Footer/Footer";
import OurTeam from "../components/OurTeam/OurTeam";
import TopHeader from '../components/TopHeader/TopHeader';
import Services from '../components/Services/Services';
import Review from '../components/Review/Review';
import ContactUs from '../components/CoatactUs/ContactUs';
import TopNavigation from '../components/TopNavigation/TopNavigation';


const HomePage = () => {
    return (
        <>
          <TopNavigation></TopNavigation>
          <TopHeader></TopHeader>
            <About/>
            <Services></Services>
            <Summary/>
            <OurTeam/>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer/>
        </>
    );
};

export default HomePage;