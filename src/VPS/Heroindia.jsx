import React from 'react';
import Hero12 from "../assets/7.png";
import { ArrowRight } from "lucide-react";

export default function Heroindia() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] min-h-[440px] overflow-hidden py-8 sm:py-0">
      <div className="container mx-auto px-4 sm:px-6 h-full relative">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center">
          <div className="w-full h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="flex flex-col justify-center space-y-5 text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#0a2540]">
                  VPS Hosting - India
                </h1>
                <p className="text-base sm:text-lg text-[#3b3f5c] max-w-xl mx-auto lg:mx-0">
                  Supercharge your online experience with our India Linux/Windows VPS hosting – a perfect balance of power, flexibility, and affordability for your growing digital needs.
                </p>
                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    className="group bg-[#126276] hover:bg-[#218aa4] text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center space-x-2 text-base"
                    aria-label="View all hosting plans"
                  >
                    <span>See All Plans</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 animate-gentle-bounce">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <img
                    src={Hero12}
                    className="w-full h-auto object-cover"
                    alt="Dedicated Server"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
