

import React from "react";
import { Cloud, Download, Upload, Server, ArrowRight, Mail, FileText, Video } from "lucide-react";
import MicroImg from "../assets/mhome02.png";
import Clients from "../components/Clients";
import MPlans from "./MPlans";
import MFeatures from "./MFeatures";
import Faqsection from "../components/Faqsectionone";

const M365 = () => {
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
        <div className="container mx-auto px-4 py-4 lg:py-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center mt-10">
            {/* Left Side - Main Content */}
            <div className="text-center lg:text-left -mt-10 space-y-10">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-[55px] font-bold text-[#0e3c47] leading-tight flex flex-col gap-2 mb-6">
                  Microsoft 365
                </h1>

                <p className="text-sm md:text-base text-[#0e3c47d5] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Collaborate, create and connect with Microsoft 365. Your
                  anytime, anywhere office to grow your business.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  text-center lg:text-left">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-slate-300/60">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <FileText className="w-5 h-5 text-[#1c758b] mr-2" />
                    <span className="text-[#0e3c47] font-semibold text-[20px]">
                      Office Apps Integration
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Word, Excel, PowerPoint access
                  </p>
                </div>

                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-slate-300/60">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Video className="w-5 h-5 text-[#1c758b] mr-2" />
                    <span className="text-[#0e3c47] font-semibold text-[20px]">
                      Teams Collaboration
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Video meetings & chat
                  </p>
                </div>

                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-slate-300/60">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Cloud className="w-5 h-5 text-[#1c758b] mr-2" />
                    <span className="text-[#0e3c47] font-semibold text-[20px]">
                      1TB Cloud Storage
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Secure OneDrive backup
                  </p>
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
            <div className="relative flex justify-center lg:justify-center sm:bottom-[20px] bottom-[110px] ">
              {/* Main Cloud Server Icon */}
              <div className="relative lg:bottom-[0px] -bottom-[110px]">
                {/* Background Circle */}
                <img
                  className="animate-float w-[600px]"
                  src={MicroImg}
                  alt=""
                />

                {/* Floating Elements */}
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
      <MPlans />
      <MFeatures />
      <Faqsection />
      <div className=" mt-20">
        <Clients />
        </div>
    </>
  );
};

export default M365;