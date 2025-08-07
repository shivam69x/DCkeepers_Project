import React, { useState, useEffect } from "react";
import { Check, Star, Monitor, Terminal } from "lucide-react";
import { useCurrency } from "../components/CurrencyContext.jsx"; // <--- NEW
import { useNavigate } from "react-router-dom";

const Planindia = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOS, setSelectedOS] = useState("linux");
  const { convertPrice } = useCurrency();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const navigateToBilling = (plan) => {
    navigate("/billing", {
      state: {
        plan: {
          ...plan,
          category: "Cloud-India Hosting",
          type: "monthly",
        },
      },
    });
  };

  const linuxPlans = [
    {
      name: "Business Plan",
      description: "START FROM",
      price: 1799,
      features: [
        "2 Core",
        "2 GB RAM",
        "50 GB SSD",
        "1 Dedicated IP",
        "1TB Bandwidth",
        "FREE SetUp!!",
        "99.9% Uptime Guarantee",
        "Free CentOS WP-Cpanel",
      ],
      ctaText: "BUY NOW",
      popular: false,
    },
    {
      name: "Traffic Plan",
      description: "START FROM",
      price: 2499,
      features: [
        "2 CPU Cores",
        "4 GB RAM",
        "100 GB Hard Disk-SSD",
        "1TB Bandwidth",
        "1 Dedicated IP",
        "Free CentOS WP-Cpanel",
        "FREE Set Up!!",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "BUY NOW",
      popular: false,
    },
    {
      name: "Standard Plan",
      description: "Best for Entrepreneurs",
      price: 2799,
      features: [
        "4 CPU Cores",
        "6 GB RAM",
        "150 GB Hard Disk-SSD",
        "2TB Bandwidth",
        "1 Dedicated IP",
        "Free CentOS WP-Cpanel",
        "FREE Set Up!!",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "BUY NOW",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      description: "START FROM",
      price: 4200,
      features: [
        "4 CPU Cores",
        "8 GB RAM",
        "240 GB Hard Disk-SSD",
        "2TB Bandwidth",
        "1 Dedicated IP",
        "Free CentOS WP-Cpanel",
        "FREE Set Up!!",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "BUY NOW",
      popular: false,
    },
  ];

  const windowsPlans = [
    {
      name: "Business Plan",
      description: "START FROM",
      price: 2099,
      features: [
        "2 Core",
        "2 GB RAM",
        "50 GB SSD",
        "1 Dedicated IP",
        "1TB Bandwidth",
        "FREE SetUp!!",
        "99.9% Uptime Guarantee",
        "Windows Server 2022",
      ],
      ctaText: "BUY NOW",
      popular: false,
    },
    {
      name: "Traffic Plan",
      description: "START FROM",
      price: 2799,
      features: [
        "2 CPU Cores",
        "4 GB RAM",
        "100 GB Hard Disk-SSD",
        "1TB Bandwidth",
        "1 Dedicated IP",
        "Windows Server 2022",
        "FREE Set Up!!",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "BUY NOW",
      popular: false,
    },
    {
      name: "Standard Plan",
      description: "Best for Entrepreneurs",
      price: 3099,
      features: [
        "4 CPU Cores",
        "6 GB RAM",
        "150 GB Hard Disk-SSD",
        "2TB Bandwidth",
        "1 Dedicated IP",
        "Windows Server 2022",
        "FREE Set Up!!",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "BUY NOW",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      description: "START FROM",
      price: 4500,
      features: [
        "4 CPU Cores",
        "8 GB RAM",
        "240 GB Hard Disk-SSD",
        "2TB Bandwidth",
        "1 Dedicated IP",
        "Windows Server 2022",
        "FREE Set Up!!",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "BUY NOW",
      popular: false,
    },
  ];

  const plans = selectedOS === "linux" ? linuxPlans : windowsPlans;

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            India's Best Cloud Server
            <span className="text-blue-600"> At Affordable Price </span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed mb-8">
            India Cloud Hosting
          </p>

          {/* OS Selection Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-lg p-1 border border-blue-200">
              <div className="flex">
                <button
                  onClick={() => setSelectedOS("linux")}
                  className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
                    selectedOS === "linux"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Linux
                </button>
                <button
                  onClick={() => setSelectedOS("windows")}
                  className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
                    selectedOS === "windows"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Windows
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={`${selectedOS}-${plan.name}`}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.popular ? "ring-4 ring-green-500 ring-opacity-80" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0e3c47] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#0e3c47da] text-sm mb-4">
                    {plan.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#0e3c47]">
                        {convertPrice (plan.price)}
                      </span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                onClick={() => navigateToBilling(plan)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "rounded-xl border border-white bg-gradient-to-r from-[#0e3c47] to-[#0040514d] text-white shadow-lg backdrop-blur-md transition duration-300 hover:border-white/100 hover:from-[#133c46] hover:to-[#0040515d] hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-700 border-2 border-transparent hover:border-blue-200"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/90 border backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-11">
              Best Hosting Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  99.9% Uptime
                </h4>
                <p className="text-gray-600 text-xs">
                  Guaranteed reliable hosting
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  Free Migration
                </h4>
                <p className="text-gray-600 text-xs">
                  We'll move your site for free
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-xs">
                  Expert help when you need it
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  Multi Data Center
                </h4>
                <p className="text-gray-600 text-xs">
                  Worldwide Data Center Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planindia;
