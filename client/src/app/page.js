"use client"
import React from 'react'
import HomeBanner from './home/HomeBanner';
import AboutUsFirst from './home/AboutUsFirst';
import AboutUsSecond from './home/AboutUsSecond';
import HomeServices from './home/HomeServices';
import HowWeWork from './home/HowWeWork';
import WhyChooseUs from './home/WhyChooseUs';
import ProjectHighlights from './home/ProjectHighlights';
import Testimonials from './home/Testimonials';
import RecentArticles from './home/RecentArticles';
import OurClient from './home/OurClient';
import RequestAQuote from './home/RequestAQuote';




export default function Home() {
  return (
    <>
    <HomeBanner/>
    <AboutUsFirst/>
    <AboutUsSecond/>
    <HomeServices/>
    <HowWeWork/>
    <WhyChooseUs/>
    <ProjectHighlights/>
    <Testimonials/>
    <OurClient/>
    <RecentArticles/>
    <RequestAQuote/>

    </>
  );
}
