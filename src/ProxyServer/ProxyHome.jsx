import React from "react";
import { Zap } from "lucide-react";
import { Cloud, Download, Upload, Server, ArrowRight } from "lucide-react";
import ProxyPlans from "./ProxyPlans";
import ProxyFeatures from "./ProxyFeaturs";
import FAQsection from "../components/FAQsection";
import Clients from "../components/Clients";
import ProxyImg from "../assets/proxy011.png";

import ProxyPriceTable from "./ProxyPriceTable";

const ProxyHome = () => {
  return (
    <>
      <div className="min-h-[65vh] bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-2 h-2 bg-[#1ab7c6] rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-[#1ab7c6] rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-[#1ab7c6] rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-40 w-2 h-2 bg-[#1ab7c6] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#1ab7c6] rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-4 lg:py-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left Side - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-[55px] font-bold text-[#0e3c47] leading-tight flex flex-col gap-2">
                  Proxy Servers
                  <span className="relative inline-block">
                    <span className="mt-4 bg-[#19849f] text-white px-4 py-2 rounded-lg transform -rotate-2 inline-block shadow-lg text-2xl">
                      5% OFF
                    </span>
                  </span>
                </h1>

                <p className="text-sm md:text-base text-[#0e3c47d5] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Anonymous proxy servers. HTTP & SOCKS5 proxy servers. Build
                  your proxy server list today!
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-slate-300/60">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Server className="w-5 h-5 text-[#1c758b] mr-2" />
                    <span className="text-[#0e3c47] font-semibold text-[20px]">
                      99.9% Uptime
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">Reliable performance</p>
                </div>

                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-slate-300/60">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Cloud className="w-5 h-5 text-[#1c758b] mr-2" />
                    <span className="text-[#0e3c47] font-semibold text-[20px]">
                      Global CDN
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">Worldwide coverage</p>
                </div>

                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-slate-300/60">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Download className="w-5 h-5 text-[#1c758b] mr-2" />
                    <span className="text-[#0e3c47] font-semibold text-[20px]">
                      Fast Speed
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">Optimized delivery</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-0">
                <button
                  className="group bg-[#126276] hover:bg-[#218aa4] text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center space-x-2 text-base"
                  aria-label="View all hosting plans"
                >
                  <span>See All Plans</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative flex justify-center bottom-[60px] sm:bottom-[40px] md:bottom-[20px] lg:bottom-0">
              {/* Main Cloud Server Icon */}
              <div className="relative">
                {/* Background Circle */}
                <img
                  className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] animate-float"
                  src={ProxyImg}
                  alt="Cloud Server"
                />

                {/* Floating Elements */}
                <div className="absolute top-2 left-2 sm:top-4 sm:-left-3 bg-white/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-300/50 animate-float">
                  <Server className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                </div>

                <div className="absolute bottom-3 right-2 sm:bottom-6 sm:-right-1 bg-white/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-300/50 animate-float delay-300">
                  <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                </div>

                <div className="absolute top-1/2 right-0 sm:-right-5 bg-white/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-300/50 animate-float delay-700">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="rgba(255,255,255,0.1)"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
          .delay-700 {
            animation-delay: 0.7s;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </div>
      <ProxyPriceTable />
      <ProxyFeatures />
      {/* <ProxyPlans /> */}

      <FAQsection />

      <div className=" mt-20">
        <Clients />
      </div>
    </>
  );
};

export default ProxyHome;
