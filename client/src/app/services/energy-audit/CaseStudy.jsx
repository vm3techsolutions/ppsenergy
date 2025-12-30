import React from 'react'
import Image from 'next/image'

export default function CaseStudy() {
  return (
    <section className='common-section '>
        <div className="text-center mb-10">
        <h3 className="title text-[#889F2D]">Case Study</h3>
        <h2 className="center-section-heading">
        Powering change through real impact
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
                    <li className='mt-3 ml-2.5'>High energy consumption due to outdated machinery.</li>
                    <li className='ml-2.5'>Inefficient lighting and HVAC systems.</li>
                    <li className='ml-2.5'>Lack of real-time monitoring and reporting tools.</li>
                    <li className='ml-2.5'>Escalating operational costs impacting profitability.</li>
                    <li className='ml-2.5'>Compliance requirements for sustainable energy use.</li>
                </ul>
              
                <Image
                src="/assets/services/energyAudit/CaseStudy.png"
                alt="Team working"
                width={500}
                height={500}
                className="h-[350px] object-cover" />
            
        </div>  

            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center section mt-[30px]'>
            
                <ul className='content list-disc list-inside content space-y-3'>
                    <h3 className='title text-[#7B0000] '>SOLUTIONS DELIVERED</h3>
                    <li className=''>Lighting Upgrade: Transitioned to 100% LED lighting.</li>
                    <li>HVAC Optimization: Installed automated controls and variable frequency drives.</li>
                    <li>Renewable Integration: Deployed a 250 kWp rooftop solar plant.</li>
                    <li>Energy Monitoring: Real-time dashboard for continuous tracking.</li>
                    <li>Employee Awareness: Conducted training sessions for sustainable practices.</li>
                </ul>

                <ul className='content list-disc list-inside content space-y-3  '>
                    <h3 className='title text-[#7B0000]  '>RESULTS & IMPACT</h3>
                    After implementation, the client experienced measurable results:
                    <li className='mt-3  ml-2.5'>30% Reduction in Energy Costs (approx. INR 1.2 Cr savings annually).</li>
                    <li className=' ml-2.5'>1200 Tons CO₂ Reduction per Year — aligning with ESG targets.</li>
                    <li className=' ml-2.5'>Improved Productivity due to efficient machinery and environment.</li>
                    <li className=' ml-2.5'>ROI Achieved in Just 1.8 Years.</li>
                </ul>
              </div> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 section mt-10 items-start">
  
  {/* Solutions Delivered */}
  <div>
    <h3 className="title text-[#7B0000] mb-4">SOLUTIONS DELIVERED</h3>
    <ul className="content list-disc list-inside space-y-3">
      <li>Lighting Upgrade: Transitioned to 100% LED lighting.</li>
      <li>HVAC Optimization: Installed automated controls and variable frequency drives.</li>
      <li>Renewable Integration: Deployed a 250 kWp rooftop solar plant.</li>
      <li>Energy Monitoring: Real-time dashboard for continuous tracking.</li>
      <li>Employee Awareness: Conducted training sessions for sustainable practices.</li>
    </ul>
  </div>

  {/* Results & Impact */}
  <div>
    <h3 className="title text-[#7B0000] mb-4">RESULTS & IMPACT</h3>
    <ul className="content list-disc list-inside space-y-3">
      <li> After implementation, the client experienced measurable results</li>
      <li>30% reduction in energy costs (≈ INR 1.2 Cr annually).</li>
      <li>1200 tons CO₂ reduction per year.</li>
      <li>Improved productivity from efficient systems.</li>
      <li>ROI achieved in just 1.8 years.</li>
    </ul>
  </div>

</div>
      </div>

    </section>
  )
}
