import React from 'react'
import MepBanner from './MepBanner'
import MepIntroduction from './MepIntroduction'
import MepProcess from './MepProcess'
import MepIndustries from './MepIndustries'
import WhyChooseMep from './WhyChooseMep'
import MepQuote from './MepQuote'
import TechnologiesStandards from './TechnologyAndStandardsMep'
import ValueAdditionAndBenifitsMep from './ValueAdditionAndBenifitsMep'
import MepCaseStudies from './MepCaseStudies'

export default function page() {
  return (
   <>
   <MepBanner/>
   <MepIntroduction/>
   <MepProcess/>
   <MepIndustries/>
   <TechnologiesStandards/>
   <ValueAdditionAndBenifitsMep/>
   <MepCaseStudies/>
   <WhyChooseMep/>
   <MepQuote/>
   </>
  )
}
