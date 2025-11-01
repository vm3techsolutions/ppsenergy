import React from 'react'
import SafetyAuditBanner from './SafetyAuditBanner'
import IntroductionSafetyAudit from './IntroductionSafetyAudit'
import IndustriesWeServeSafetyAudit from './IndustriesWeServeSafetyAudit'
import QuoteSafetyAudit from './QuoteSafetyAudit'
import WhyChooseSafetyAudit from './WhyChooseSafetyAudit'
import OurProcessSafetyAudit from './OurProcessSafetyAudit'
import SafetyAuditTypes from './SafetyAuditTypes'

export default function page() {
  return (
    <>
    <SafetyAuditBanner/>
    <IntroductionSafetyAudit/>
    <SafetyAuditTypes/>
    <OurProcessSafetyAudit/>
    <IndustriesWeServeSafetyAudit/>
    <WhyChooseSafetyAudit/>
    <QuoteSafetyAudit/>
    </>
  )
}
