"use client"
import React from 'react'
import AboutBanner from './AboutBanner'
import WhoWeAre from './WhoWeAre'
import MisionVision from './MisionVision'
import OurCoreValues from './OurCoreValues'
import Enquiry from './Enquiry'
// import Team from './Team'
import OurJourney from './OurJourney'

export default function page() {
  return (
    <>
    <AboutBanner/>
    <WhoWeAre/>
    <MisionVision/>
    <OurCoreValues/>
    <OurJourney/>
    {/* <Team/> */}
    <Enquiry/>
    </>
  )
}
