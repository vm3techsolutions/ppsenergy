// import UnderDevelopment from '@/component/UnderDevelopment'
import React from 'react'
import CaseStudyBanner from './CaseStudyBanner'

import UnderstandingProblem from './UnderstandingProblem'
import StaticRangeicImplementation from './StatergicImplementation'
import Methodology from './Methodology'
import AboveBelowBanner from './AboveBelowBanner'
import ProjectBG from './ProjectBG'
import ProjectImpact from './ProjectImpact'
import ResultImpact from './ResultImpact'

export default function page() {
  return (
    <>
    {/* <UnderDevelopment/> */}
    <CaseStudyBanner/>
    <ProjectBG/>
    <ProjectImpact/>
    <UnderstandingProblem/>
    <StaticRangeicImplementation/>
       <Methodology/>
       <ResultImpact/>
       <AboveBelowBanner/>
    </>
  )
}
