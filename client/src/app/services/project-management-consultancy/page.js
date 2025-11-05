import React from 'react'
import BannerProjectMgmt from './BannerProjectMgmt'
import IntroPMC from './IntroPMC'
import ServicesPMC from './ServicesPMC'
import ApproachPMC from './ApproachPMC'
import IndustriesPMC from './IndustriesPMC'
import BenifitsPMC from './BenifitsPMC'
import QuotePMC from './QuotePMC'
import ToolsPMC from './ToolsPMC'

export default function page() {
  return (
   <>
   <BannerProjectMgmt/>
   <IntroPMC/>
   <ServicesPMC/>
   <ApproachPMC/>
   <IndustriesPMC/>
   <ToolsPMC/>
   <BenifitsPMC/>
   <QuotePMC/>
   </>
  )
}
