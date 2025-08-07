import React from 'react'
import Heroforeign from '../Cloud/Heroforeign';
import Planforeign from '../Cloud/Planforeign';

import Clients from '../components/Clients';
import Features from '../VPS/Features';
import Faqsection from '../components/Faqsectionone';


const Cloudforeign = () => {
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

export default Cloudforeign;