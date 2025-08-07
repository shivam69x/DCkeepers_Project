import React from 'react'
import Heroindia from "../VPS/Heroindia";
import Clients from '../components/Clients';
import Planindia from '../VPS/Planindia';
import Features from '../VPS/Features';
import Faqsection from '../components/Faqsectionone';

const Vpsindia = () => {
    return (
        <div className=' bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] '>
            <Heroindia />
            <div className="max-w-[1200px] flex justify-center flex-col mx-auto px-0 py-1 ">
                <Planindia />
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

export default Vpsindia;