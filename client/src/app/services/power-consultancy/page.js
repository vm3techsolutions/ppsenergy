import React from 'react'
import PowerConsultancyBanner from './PowerConsultancyBanner'
import IndustriesWeServerPowerConsultancy from './IndustriesWeServerPowerConsultancy'
import ComprehensivePowerConsultancy from './ComprehensivePowerConsultancy'
import CoreServices from './CoreServices'
import OurProcessSection from './OurProcessSection'
import WhyChooseUsPowerConsultancy from './WhyChooseUsPowerConsultancy'
import QuoteBox from './QuoteBox'

export default function page() {
  return (
    <>
    <PowerConsultancyBanner />
    <ComprehensivePowerConsultancy/>
    <CoreServices/>
    <IndustriesWeServerPowerConsultancy/>
    <OurProcessSection/>
    <WhyChooseUsPowerConsultancy/>
    <QuoteBox/>
    </>
  )
}
