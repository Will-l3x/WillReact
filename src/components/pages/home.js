import React from 'react'
import '../../App.css';
import Action from '../Action';
import BestSelling from '../BestSelling';
import Cards from '../Cards';
import Footer from '../Footer';
import Mission from '../Mission';
import Section from '../Section.js'
import Testimonials from '../Testimonials';

function home() {
    return (
        <>
            <Section/>
            <Cards />
            <BestSelling />
            <Mission />
            <Testimonials />
            <Action />
            <Footer />
        </>
    )
}

export default home
