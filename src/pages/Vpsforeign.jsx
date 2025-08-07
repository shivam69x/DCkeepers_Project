
import React from 'react'
import Heroforeign from "../VPS/Heroforeign";
import Faqsection from '../components/Faqsectionone';
import Clients from '../components/Clients';
import Planforeign from '../VPS/Planforeign';
import Features from '../VPS/Features';

const Vpsforeign = () => {
    return (
        <div className=' bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] '>
            <Heroforeign />
            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Planforeign />
            </div>
            <Features />
            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Faqsection />
            </div>
            <div className="mt-20">
                <Clients />
            </div>
        </div>
    )
}

export default Vpsforeign;
