import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Globe,
  BarChart3,
  ArrowRight,
  Play,
  Star,
  Users,
  Shield,
} from "lucide-react";
import ForexPlans from "./ForexPlans";
import ForexFeatures from "./ForexFeatures";
import Clients from "../components/Clients";
import Faqsection from "../components/Faqsectionone";

const ForexHosting = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Simulate live price updates
  }, []);

  const features = [
    { icon: Globe, text: "Access 50+ Currency Pairs" },
    { icon: BarChart3, text: "Real-time Market Analysis" },
    { icon: Shield, text: "Regulated & Secure Trading" },
  ];

  return (
    <>
      <section className=" bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] relative overflow-hidden min-h-[50vh]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gray-400 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-400 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-gray-400 rounded-full"></div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">4.8/5</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                50K+ Traders
              </span>
            </div>
          </div>
        </div> */}

        <div className="container mx-auto px-4 py-12 md:py-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
            {/* Left Column - Main Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Live Price Ticker */}

              {/* Main Headline */}
              <div className="space-y-4  -mt-[2px]">
                <h1 className="text-2xl md:text-3xl lg:text-[58px] font-bold text-[#0e3c47] leading-tight mb-7">
                  Forex Server Hosting
                </h1>

                <p className="text-sm md:text-base text-[#0e3c47d5] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Access global currency markets 24/7 with lightning-fast
                  execution, competitive spreads, and professional-grade trading
                  tools.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transform transition-all duration-700 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0077b6]/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-[#0077b6]" />
                    </div>
                    <span className="text-[#0e3c47] font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-0">
                <button
                  className="group bg-[#126276] hover:bg-[#218aa4] text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center space-x-2 text-base"
                  aria-label="View all hosting plans"
                >
                  <span>See All Plans</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust Badge */}
              
            </div>

            {/* Right Column - Illustration */}
            <div
              className={`relative bottom-[20px] transform transition-all duration-1200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Main Chart Container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Chart Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">
                      Live Trading
                    </span>
                  </div>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>

                {/* Simulated Chart */}
                <div className="h-48 bg-gradient-to-t from-[#0077b6]/5 to-transparent rounded-xl relative overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full border-t border-gray-200"
                        style={{ top: `${i * 25}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Chart Line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 0 120 Q 60 80 120 100 T 240 90 T 360 70 T 480 85"
                      stroke="#0077b6"
                      strokeWidth="3"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M 0 120 Q 60 80 120 100 T 240 90 T 360 70 T 480 85 L 480 192 L 0 192 Z"
                      fill="url(#gradient)"
                      className="opacity-20"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#0077b6" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                    +2.45%
                  </div>
                </div>

                {/* Trading Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      0.8ms
                    </div>
                    <div className="text-xs text-gray-500">Execution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      +$1,247
                    </div>
                    <div className="text-xs text-gray-500">Today's P&L</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">50+</div>
                    <div className="text-xs text-gray-500">Pairs</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">GBP/USD</span>
                  <span className="text-sm font-bold text-green-600">
                    +0.12%
                  </span>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">USD/JPY</span>
                  <span className="text-sm font-bold text-red-600">-0.08%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ForexPlans />
      <ForexFeatures />
      <Faqsection />
      <div className=" mt-20">
        <Clients />
      </div>
    </>
  );
};

export default ForexHosting;
