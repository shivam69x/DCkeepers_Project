import React from 'react';
import Dedicatedhero from '../Dedicatedpage/Dedicatedhero';
import Pricingtable from '../Dedicatedpage/Pricingtable';
import Pricingindia from '../Dedicatedpage/Pricingindia';
import Clients from '../components/Clients';
import Faqsection from '../components/Faqsectionone';

const DedicatedServerindia = () => {
  return (
    <div className=' bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] '>
      <Dedicatedhero />
      <Pricingtable />
      <Pricingindia />
      <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
        <Faqsection />
      </div>
      <div className="mt-20">
        <Clients />
      </div>
    </div>
  )
}

export default DedicatedServerindia;