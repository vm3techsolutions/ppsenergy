import React from 'react'
import Image from 'next/image'

export default function CaseStudy() {
  return (
    <section className='common-section bg-[#f8f8f8] shadow-[0px_4px_4px_0px_#00000040]"'>
        <div className="text-center mb-6">
        <h3 className="title text-[#889F2D]">Case Study</h3>
        <h2 className="center-section-heading">
        POWERING CHANGE THROUGH REAL IMPACT
        </h2>
      </div>

      {/* Case Study Text */}
      <div className='flex flex-col'>
        <div className='text-center'>
            <h3 className='title text-[#7B0000]'>CLIENT OVERVIEW</h3>
            <p className='content'>Our client, a leading manufacturing facility with operations across India, was facing rising energy costs, inefficiencies in equipment usage,<br/> and increasing pressure to adopt sustainable practices. They approached us to conduct a comprehensive energy audit and deliver <br/> a strategy that balances cost savings with sustainability goals.</p>
            <h3 className='title text-[#7B0000] mt-[25px] mb-[15px]'>THE CHALLENGE</h3>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center section '>
           
                <ul className='content list-disc list-inside content space-y-3'>
                    During the initial assessment, our team identified critical challenges:
                    <li className='mt-3 ml-[10px]'>High energy consumption due to outdated machinery.</li>
                    <li className='ml-[10px]'>Inefficient lighting and HVAC systems.</li>
                    <li className='ml-[10px]'>Lack of real-time monitoring and reporting tools.</li>
                    <li className='ml-[10px]'>Escalating operational costs impacting profitability.</li>
                    <li className='ml-[10px]'>Compliance requirements for sustainable energy use.</li>
                </ul>
              
                <Image
                src="/assets/services/energyAudit/CaseStudy.png"
                alt="Team working"
                width={500}
                height={500}
                className="h-[350px] object-cover" />
            
        </div>

              

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center section mt-[30px]'>
            
            <ul className='content list-disc list-inside content space-y-2'>
                <h3 className='title text-[#7B0000]  mt-[18px]  mb-[15px]'>SOLUTIONS DELIVERED</h3>
                    
                    <li className=''>Lighting Upgrade: Transitioned to 100% LED lighting.</li>
                    <li>HVAC Optimization: Installed automated controls and variable frequency drives.</li>
                    <li>Renewable Integration: Deployed a 250 kWp rooftop solar plant.</li>
                    <li>Energy Monitoring: Real-time dashboard for continuous tracking.</li>
                    <li>Employee Awareness: Conducted training sessions for sustainable practices.</li>
                </ul>

                <ul className='content list-disc list-inside content space-y-3  '>
                    <h3 className='title text-[#7B0000]  mb-[15px] '>RESULTS & IMPACT</h3>
                    
                    After implementation, the client experienced measurable results:
                    <li className='mt-3  ml-[10px]'>30% Reduction in Energy Costs (approx. INR 1.2 Cr savings annually).</li>
                    <li className=' ml-[10px]'>1200 Tons CO₂ Reduction per Year — aligning with ESG targets.</li>
                    <li className=' ml-[10px]'>Improved Productivity due to efficient machinery and environment.</li>
                    <li className=' ml-[10px]'>ROI Achieved in Just 1.8 Years.</li>
               
                </ul>
        </div>
      </div>

    </section>
  )
}
