import React from 'react'
import Dedicatedforeignhero from '../Dedicatedpage/Dedicatedforeignhero';
import Clients from '../components/Clients';
import Pricingforeigntable from '../Dedicatedpage/Pricingforeigntable.jsx';
import Pricingforeign from '../Dedicatedpage/pricingforeign';
import Faqsection from '../components/Faqsectionone.jsx';

const DedicatedServerforeign = () => {
  return (
        <div className=' bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] '>
            <Dedicatedforeignhero />
            <Pricingforeigntable />
            <Pricingforeign />
      <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
        <Faqsection />
      </div>
      <div className="mt-20">
        <Clients />
      </div>
    </div>
  )
}

export default DedicatedServerforeign;
