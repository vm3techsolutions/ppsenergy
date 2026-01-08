"use client"
import React from 'react'
import BannerLegalService from './BannerLegalService'
import IntroductionLegal from './IntroductionLegal'
import WhyChooseLegalServices from './WhyChooseLegalServices'
import ClientsExpertise from './ClientsExpertise'
import ServicesLegal from './ServicesLegal'
import TeamMembers from './TeamMembers'

export default function page() {
  return (
   <>
   <BannerLegalService/>
   <IntroductionLegal/>
   <ServicesLegal/>
   <TeamMembers/>
   <WhyChooseLegalServices/>
   <ClientsExpertise/>
   </>
  )
}
