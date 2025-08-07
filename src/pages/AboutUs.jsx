import React from "react";
import AboutImg2 from "../assets/about02.png";
import Clients from "../components/Clients";
import Faqsection from "../components/Faqsectionone";

const AboutUs = () => {
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
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-[55px] font-bold text-[#0e3c47] leading-tight mb-4">
                About DC Keepers
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#0e3c47f7] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The Tale of Our Achievement Story
              </p>
              <p className="text-sm sm:text-base text-[#0e3c47f0] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                At DC Keepers, we are committed to help your business boom in the digital world. If you are just starting, looking to grow or need a reliable partner for your existing online operations, we have the solutions that will help you to succeed. We focus on providing secured & reliable services to fit your unique business needs.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <img
                className="animate-float w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
                src={AboutImg2}
                alt="About DC Keepers"
              />
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

      {/* Company Story Section */}
      <section className="py-10 px-4 sm:px-6 bg-gradient-to-br from-sky-100 via-white to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0c7e9a] mb-6 text-left">
            Digital Cloud Keepers
          </h2>

          <div className="space-y-6 max-w-5xl mx-auto text-[#0e3c47e3] text-base sm:text-lg leading-relaxed">
            <p>
              Since our founding in 2019, Dc keepers InfoTech has been a trusted web hosting company in Jaipur. We are on a mission to make going digital easier by delivering businesses the tools and help they need to build an online presence. Dc keepers InfoTech brings numerous benefits for all its users.
            </p>
            <p>
              Aside from Dc keepers InfoTech dedicated server hosting India and cloud server hosting for small businesses tailored to help businesses succeed, you also benefit from 24×7 customer support, 99.9% uptime, affordable and attractive plans like low-cost dedicated server hosting in India, experts help and many more.
            </p>
            <p>
              These benefits are one of the many ways through which Dc keepers InfoTech delivers its promise of providing ultra-fast and the best web hosting services.
            </p>
            <p>
              When your business is ready to get online and build a robust digital presence for itself, buy Dc keepers InfoTech dedicated server hosting India and other services. You can also buy features for security and along with low-cost dedicated server hosting in India.
            </p>
          </div>
        </div>
      </section>

      <Faqsection />
      <div className="mt-20">
        <Clients />
      </div>
    </>
  );
};

export default AboutUs;
