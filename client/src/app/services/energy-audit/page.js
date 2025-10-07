"use client"
import React from 'react'
import EnergyAuditBanner from './EnergyAuditBanner'
import ComprehensiveEnergyAudit from './ComprehensiveEnergyAudit'
import OurEnergyAuditApproach from './OurEnergyAuditApproach'
import EnergyAuditBenifits from './EnergyAuditBenifits'
import IndustriesWeServe from './IndustriesWeServe'
import CaseStudy from './CaseStudy'
import EnergyAuditBottomBanner from './EnergyAuditBottomBanner'

export default function page() {
  return (
    <>
    <EnergyAuditBanner/>
    <ComprehensiveEnergyAudit/>
    <OurEnergyAuditApproach/>
    <EnergyAuditBenifits/>
    <IndustriesWeServe/>
    <CaseStudy/>
    <EnergyAuditBottomBanner/>
    </>
  )
}
