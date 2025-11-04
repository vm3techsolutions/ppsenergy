import React from 'react'
import BannerMarketResearch from './BannerMarketResearch'
import IntroMarketResearch from './IntroMarketResearch'
import ProcessMarketRearch from './ProcessMarketRearch'
import IndustriesMarketResearch from './IndustriesMarketResearch'
import WhyChooseMarketReseach from './WhyChooseMarketReseach'
import QuoteMarketResearch from './QuoteMarketResearch'
import ServicesMarketResearch from './ServicesMarketResearch'
import ToolsMarketResearch from './ToolsMarketResearch'

export default function page() {
  return (
    <>
    <BannerMarketResearch/>
    <IntroMarketResearch/>
    <ServicesMarketResearch/>
    <ProcessMarketRearch/>
    <IndustriesMarketResearch/>
    <ToolsMarketResearch/>
    <WhyChooseMarketReseach/>
    <QuoteMarketResearch/>
    </>
  )
}
